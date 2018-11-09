const assert = require('assert');
const { americanexpress } = require('../../src/issuers');

const americanexpress_cards = [
  345555555555444,
  370510510510510
];

const not_americanexpress_cards = [
  601111111111117,
  353011133330000
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
