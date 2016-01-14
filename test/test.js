var playerstore = require('../player-store')

var assert = require('assert');
describe('player-store', function() {
  describe('demo', function () {
    it('should work', function () {
        playerstore.save("a", { name:"b" } );
        
        assert.equal("b", playerstore.read("a").name);
    });
  });
});