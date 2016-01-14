function PlayerStore() {
  this.players = {};
}

PlayerStore.prototype.save = function(address, player) {
  this.players[address] = player;
};

PlayerStore.prototype.read = function(address) {
  if (this.players.hasOwnProperty(address)) {
    return this.players[address];
  }
};

module.exports = new PlayerStore();
