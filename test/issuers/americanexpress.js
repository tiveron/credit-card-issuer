const assert = require('assert');
const { americanexpress } = require('../../src/issuers');

const americanexpress_cards = [
  3455555555554444,
  3705105105105100
];

const not_americanexpress_cards = [
  6011111111111117,
  3530111333300000
];

describe('americanexpress', function() {
  describe('validate card properties', function() {
    it('should return "American Express" as friendly name', function() {
      assert.equal(americanexpress.friendlyName, 'American Express');
    });

    it('should return size of 15', function() {
      assert.equal(americanexpress.size, 15);
    });

    it('should has luhn validation', function() {
      assert.ok(americanexpress.hasLuhn);
    });
  });

  describe('validate card numbers', function() {
    it('should return true for american express numbers', function() {
      assert.ok(americanexpress.validate(americanexpress_cards[0]));
      assert.ok(americanexpress.validate(americanexpress_cards[1]));
    });

    it('should return false for non-american express numbers', function() {
      assert.ok(!americanexpress.validate(not_americanexpress_cards[0]));
      assert.ok(!americanexpress.validate(not_americanexpress_cards[1]));
    });
  });
});
