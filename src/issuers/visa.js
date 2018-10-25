const model = require('./model');

const Visa = new model({
  friendlyName: 'Visa',
  size: 16,
  validator: /^4/,
  hasLuhn: true,
});

module.exports = Visa;