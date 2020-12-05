const boarding = require('./boarding');

describe('Passport validation', () => {

  let tested;

  describe('Boarding pass seat number', () => {

    beforeEach(() => {
      tested = boarding.seatId;
    });

    it('Gives us the correct seat id', () => {
      expect(tested("FBFBBFFRLR")).toEqual(357);
    });

    it('Gives us the correct seat id', () => {
      expect(tested("BFFFBBFRRR")).toEqual(567);
    });

    it('Gives us the correct seat id', () => {
      expect(tested("FFFBBBFRRR")).toEqual(119);
    });

    it('Gives us the correct seat id', () => {
      expect(tested("BBFFBBFRLL")).toEqual(820);
    });

  });

  describe('Part 1', () => {

    beforeEach(() => {
      tested = boarding.part1;
    });

    it('Gives us the correct seat id', () => {
      expect(tested("FBFBBFFRLR\nBFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL".split("\n"))).toEqual(820);
    });

    it('Gives us the correct seat id', () => {
      expect(tested("FBFBBFFRLR\nBFFFBBFRRR\nFFFBBBFRRR".split("\n"))).toEqual(567);
    });

  });

});