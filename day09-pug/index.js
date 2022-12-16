const express = require("express");
const app = express();

app.set('viewengine', 'pug');
app.set('views', './views')

app.get("/", (req, res) => {
  res.render("template")
})

app.listen(8000, () => {
  console.log("Server listening on port 8000");
})