const issuers = require('./issuers');

class CreditCardIssuer {
  static get() {
    return issuers.mastercard.friendlyName;
  }
}

module.exports = CreditCardIssuer;