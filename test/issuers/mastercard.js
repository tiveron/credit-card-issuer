const assert = require('assert');
const { mastercard } = require('../../src/issuers');

const mastercard_cards = [
  5555555555554444,
  5105105105105100
];

const not_mastercard_cards = [
  6011111111111117,
  3530111333300000
];

describe('Mastercard', function() {
  describe('validate card properties', function() {
    it('should return "Mastercard" as friendly name', function() {
      assert.equal(mastercard.friendlyName, 'Mastercard');
    });

    it('should return size of 16', function() {
      assert.equal(mastercard.size, 16);
    });

    it('should has luhn validation', function() {
      assert.ok(mastercard.hasLuhn);
    });
  });

  describe('validate card numbers', function() {
    it('should return true for Mastercard numbers', function() {
      assert.ok(mastercard.validate(mastercard_cards[0]));
      assert.ok(mastercard.validate(mastercard_cards[1]));
    });

    it('should return false for non-Mastercard numbers', function() {
      assert.ok(!mastercard.validate(not_mastercard_cards[0]));
      assert.ok(!mastercard.validate(not_mastercard_cards[1]));
    });
  });
});
