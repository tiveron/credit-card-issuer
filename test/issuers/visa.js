const assert = require('assert');
const { visa } = require('../../src/issuers');

const visa_cards = [
  4555555555554444,
  4105105105105100
];

const not_visa_cards = [
  6011111111111117,
  3530111333300000
];

describe('Visa', function() {
  describe('validate card properties', function() {
    it('should return "Visa" as friendly name', function() {
      assert.equal(visa.friendlyName, 'Visa');
    });

    it('should return size of 16', function() {
      assert.equal(visa.size, 16);
    });

    it('should has luhn validation', function() {
      assert.ok(visa.hasLuhn);
    });
  });

  describe('validate card numbers', function() {
    it('should return true for visa numbers', function() {
      assert.ok(visa.validate(visa_cards[0]));
      assert.ok(visa.validate(visa_cards[1]));
    });

    it('should return false for non-visa numbers', function() {
      assert.ok(!visa.validate(not_visa_cards[0]));
      assert.ok(!visa.validate(not_visa_cards[1]));
    });
  });
});
