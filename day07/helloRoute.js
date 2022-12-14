var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('This is GET method.');
});
router.post('/', function(req, res){
   res.send('This is POST method');
});

//router.get('/about', function (req, res) {
//  res.send('About Get Page');
//});
//router.post('/about', function (req, res) {
//  res.send('About Post Page');
//});
//router.get('/user/:name', function (req, res) {
//  res.send("Welcome user: " + req.params.name);
//})

module.exports = router;