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
    number = number.toString();
    let isValid = false;

    if( this.isNumberValid(number) && this.isLengthValid(number) ) {
      isValid = true;
    }


    return isValid;
  }

  isNumberValid(number) {
    return number.match(this.validator)
  }

  isLengthValid(number) {
    let isValid = false;
    let size = this.size;
    let length = number.length;

    if( Number.isInteger(size) ) {
      if ( length === size ) {
        isValid = true;
      }
    }

    if( Array.isArray(size) ) {
      if( size.includes(length) ) {
        isValid = true;
      }
    }

    return isValid;
  }
};

module.exports = IssuerModel;