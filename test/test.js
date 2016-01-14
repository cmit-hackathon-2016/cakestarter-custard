var playerstore = require('../player-store')

var assert = require('assert');
describe('player-store', function() {
  describe('when a player is stored', function () {
    var originalPlayer = { name : "b" };
    var address = 'the-address';
    playerstore.save(address, originalPlayer);
    it('should retain its name when retrieved', function() {
      var retrievedPlayer = playerstore.read(address);
      assert.equal(originalPlayer.name, retrievedPlayer.name);
    });
    it('should contain the address on which it was stored', function() {
      var retrievedPlayer = playerstore.read(address);
      assert.equal(address, retrievedPlayer.address);
    });
  });
});
