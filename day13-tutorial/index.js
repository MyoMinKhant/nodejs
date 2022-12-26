import express, { application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import { connectDB } from "./db.js";
import movieRoutes from "./routes/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())

//db
connectDB();

//default route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Default Route is OK!",
    });
});

//routes api
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));