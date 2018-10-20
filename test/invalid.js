const assert = require('assert');
const cci = require('../src/index');

describe('Invalid credit card number', function() {
  describe('passing strings', function() {
    it('should throw error', function() {
      assert.throws(() => cci.get('invalid argument'), Error);
    });
  });

  describe('passing nothing', function() {
    it('should throw error', function() {
      assert.throws(() => cci.get(), Error);
    });
  });
});
