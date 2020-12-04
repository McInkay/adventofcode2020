const Passport = require('./passports').Passport;

describe('Passport validation', () => {

  let tested;

  beforeEach(() => {
    tested = new Passport("");
  });

  describe('Valid passport number', () => {

    it('Success when 9 numbers', () => {
      tested.map['pid'] = "123456789";
      expect(tested.hasValidPassportNumber()).toEqual(true);
    });

    it('Fail when 10 numbers', () => {
      tested.map['pid'] = "1234567890";
      expect(tested.hasValidPassportNumber()).toEqual(false);
    });

  });
});