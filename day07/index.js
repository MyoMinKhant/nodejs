var express = require('express');
const helloRoute = require('./helloRoute.js');
var app = express();

app.use('/', helloRoute);
app.listen(8000, () => {
  console.log("Server listening on port 8000");
})