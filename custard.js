var express = require('express');
var bodyparser = require('body-parser');
var playerStore = require('./player-store');

var app = express();
app.use(bodyparser.json())

app.get('/players', function(req, res, next) {
  var players = playerStore.all();
  res.json(players);
  next();
});

app.get('/players/:address', function(req, res, next) {
  var address = req.params.address;
  var player = playerStore.read(address);
  if (typeof player !== 'undefined') {
    res.json(player);
  } else {
    res.status(404).json({ error : "No such player" });
  }
  next();
});

app.put('/players/:address', function(req, res, next) {
  var address = req.params.address;
  var player = req.body;
  playerStore.save(address, player);
  res.json(player);
  next();
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
