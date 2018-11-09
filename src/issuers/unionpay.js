const model = require('./model');

const UnionPay = new model({
  friendlyName: 'UnionPay',
  size: [16, 17, 18, 19],
  validator: /^62/,
  hasLuhn: true,
});

module.exports = UnionPay;