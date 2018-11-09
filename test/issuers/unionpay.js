const assert = require('assert');
const { unionpay } = require('../../src/issuers');

const unionpay_cards = [
  6255555555554444,
  62051051051051003,
  620510510510510035,
  6205105105105100355,
];

const not_unionpay_cards = [
  6111111111111117,
  5530111333300000
];

describe('UnionPay', function() {
  describe('validate card properties', function() {
    it('should return "UnionPay" as friendly name', function() {
      assert.equal(unionpay.friendlyName, 'UnionPay');
    });

    it('should return size of 16 to 19', function() {
      assert.deepEqual(unionpay.size, [16, 17, 18, 19]);
    });

    it('should has luhn validation', function() {
      assert.ok(unionpay.hasLuhn);
    });
  });

  describe('validate card numbers', function() {
    it('should return true for UnionPay numbers', function() {
      assert.ok(unionpay.validate(unionpay_cards[0]));
      assert.ok(unionpay.validate(unionpay_cards[1]));
      assert.ok(unionpay.validate(unionpay_cards[2]));
      assert.ok(unionpay.validate(unionpay_cards[3]));
    });

    it('should return false for non-UnionPay numbers', function() {
      assert.ok(!unionpay.validate(not_unionpay_cards[0]));
      assert.ok(!unionpay.validate(not_unionpay_cards[1]));
    });
  });
});
