const issuers = require('./issuers');

class CreditCardIssuer {
  static get(number = false) {
    if (!number) {
      throw new Error('Need to receive a credit card number...');
    }
    if (typeof number === 'string') {
      throw new Error('Invalid credit card number...');
    }

    const matches = [];

    for(let issuer in issuers) {
      const model = issuers[issuer];

      if(model.validate(number)) {
        matches.push(model.friendlyName);
      }
    }

    if ( !matches.length ) {
      return 'uknown card'
    }

    return matches;
  }
};


module.exports = CreditCardIssuer;