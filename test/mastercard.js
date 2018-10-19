const assert = require('assert');
const cci = require('../src/index');

describe('Master Card', function() {
  describe('validate mastercard pins', function() {

    const mastercard_cards = [
      5555555555554444,
      5105105105105100
    ];

    const not_mastercard_cards = [
      6011111111111117,
      3530111333300000
    ];

    it('should return "Mastercard"', function() {
      assert.equal(cci.get(mastercard_cards[0]), 'Mastercard');
    });
  });
});
