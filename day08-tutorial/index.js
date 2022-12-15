const express = require("express");
const route = require("./calculator");
const app = express();
app.use("/", route);

app.listen(8000, function () {
    console.log("Server is listening at port 8000");
})