const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// sending json array to / route (get method)
app.get("/", (req, res) => {
  fs.readFile(__dirname+"/user.json","utf-8", (err, data) => {
    if (err) throw err;
    const userArray = JSON.parse(data);
    res.send(userArray);
  });
});
// reading and add new json object to / route (post method)
app.post("/", (req, res) => {
  fs.readFile(__dirname+"/user.json","utf-8", (err, data) => {
    if (err) throw err;
    const uArray = JSON.parse(data);
    uArray.push({
      "name": "Myo Min Khant",
      "password": "Lovecat123",
      "profession": "programmer",
      "id": 11
    });
    //const newlist = JSON.stringify(uArray);
    res.send(uArray);
  });
});

app.listen(8000, () => {
  console.log("Server listening at port 8000");
})