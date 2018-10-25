const model = require('./model');

const AmericanExpress = new model({
  friendlyName: 'American Express',
  size: 15,
  validator: /^3(4|7)/,
  hasLuhn: true,
});

module.exports = AmericanExpress;