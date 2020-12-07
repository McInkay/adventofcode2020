const luggage = require('./luggage');

describe('Luggage', () => {

  let tested;

  describe('Part 1', () => {

    beforeEach(() => {
      tested = luggage.part1;
    });

    it('Returns correct number when only 1 level of recursion', () => {
      const rules = [
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "shiny gold bags contain 1 dark olive bag.",
        "dark olive bags contain no other bags.",
        "faded blue bags contain no other bags."
      ];
      expect(tested(rules)).toEqual(1);
    });

    it('Returns correct number when 2 levels of recursion', () => {
      const rules = [
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "green bags contain 1 faded blue bag.",
        "faded blue bags contain 1 shiny gold bag.",
        "dark olive bags contain no other bags.",
        "shiny gold bags contain 1 dark olive bag."
      ];
      expect(tested(rules)).toEqual(3);
    });

    it('Returns correct number with multiple levels of recursion', () => {
      const rules = [
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
        "bright white bags contain 1 shiny gold bag.",
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
        "faded blue bags contain no other bags.",
        "dotted black bags contain no other bags."
      ];
      expect(tested(rules)).toEqual(4);
    });

    it('Returns correct number with multiple levels of recursion', () => {
      const rules = [
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
        "bright white bags contain 1 shiny gold bag.",
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags, 1 shiny gold bag.",
        "faded blue bags contain no other bags.",
        "dotted black bags contain no other bags."
      ];
      expect(tested(rules)).toEqual(6);
    });

  });

});