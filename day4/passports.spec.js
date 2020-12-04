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

    it('Fail when 8 numbers', () => {
      tested.map['pid'] = "12345678";
      expect(tested.hasValidPassportNumber()).toEqual(false);
    });

    it('Fail when we have letters', () => {
      tested.map['pid'] = "123456B89";
      expect(tested.hasValidPassportNumber()).toEqual(false);
    });

  });

  describe('Valid hair color', () => {

    it('Success when hash and 6 numbers', () => {
      tested.map['hcl'] = "#123456";
      expect(tested.hasValidHairColor()).toEqual(true);
    });

    it('Success when hash, 3 numbers, and 3 letters', () => {
      tested.map['hcl'] = "#123ABC";
      expect(tested.hasValidHairColor()).toEqual(true);
    });

    it('Fail when no hash', () => {
      tested.map['hcl'] = "123456";
      expect(tested.hasValidHairColor()).toEqual(false);
    });

    it('Fail when letter higher than F', () => {
      tested.map['hcl'] = "#12345G";
      expect(tested.hasValidHairColor()).toEqual(false);
    });

  });

});