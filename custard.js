var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/players/:address', function(req, res, next) {
  var address = req.params.address;
  res.json({message:'Hello, ' + address});
  next();
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
