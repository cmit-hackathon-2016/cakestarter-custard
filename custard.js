var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json())

app.get('/players/:address', function(req, res, next) {
  var address = req.params.address;
  res.json({message:'Hello, ' + address});
  next();
});

app.put('/players/:address', function(req, res, next) {
  res.json(req.body);
  next();
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
