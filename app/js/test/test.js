'use strict'

var assert = require('assert');
describe('Somme', function() {
  describe('reduce()', function() {
    it('devrait retourner la somme du tableau', function() {
      assert.equal(40, [10,10,20].reduce((a, b) => a + b));
    });
  });
});
