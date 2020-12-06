const customs = require('./customs');

describe('Passport validation', () => {

  let tested;

  describe('Part 1', () => {

    beforeEach(() => {
      tested = customs.part1;
    });

    it('Returns correct number', () => {
      expect(tested("abc\nd\n\nab\nc".split("\n\n"))).toEqual(7)
    });

    it('Ensures dupicates in a group are not counted', () => {
      expect(tested("aabc\nd\n\nab\nc".split("\n\n"))).toEqual(7)
    });

    it('Works with the test from the site', () => {
      expect(tested(`abc

a
b
c

ab
ac

a
a
a
a

b`.split("\n\n"))).toEqual(11);
    })

  });

  describe('Part 2', () => {

    beforeEach(() => {
      tested = customs.part2;
    });

    it('Returns correct number', () => {
      expect(tested("abc\n\nab\nac".split("\n\n"))).toEqual(4)
    });

    it('Ensures dupicates in a group are not counted', () => {
      expect(tested("abc\nad\n\nab\nac".split("\n\n"))).toEqual(2);
    });

    it('Works with the test from the site', () => {
      expect(tested(`abc

a
b
c

ab
ac

a
a
a
a

b`.split("\n\n"))).toEqual(6);
    })

  });

});