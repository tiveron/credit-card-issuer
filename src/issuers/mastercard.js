const model = require('./model');

const Mastercard = new model({
  friendlyName: 'Mastercard',
  size: 16,
  validator: /^5[0-5]/,
  hasLuhn: true,
});

module.exports = Mastercard;