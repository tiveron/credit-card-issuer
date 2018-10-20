const issuers = require('./issuers');

class CreditCardIssuer {
  static get(number = false) {
    if (!number) {
      throw new Error('Need to receive a credit card number...');
    }
    if (typeof number === 'string') {
      throw new Error('Invalid credit card number...');
    }
    return issuers.mastercard.friendlyName;
  }
}

module.exports = CreditCardIssuer;