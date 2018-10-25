class IssuerModel {
  constructor({
    friendlyName,
    size,
    validator,
    hasLuhn,
  }) {
    this.friendlyName = friendlyName;
    this.size = size;
    this.validator = validator;
    this.hasLuhn = hasLuhn;
  }

  validate(number) {
    return number.toString().match(this.validator) ? true : false;
  }
};

module.exports = IssuerModel;