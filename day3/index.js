const trees = require("./trees");
export const data = require("./data.txt");

export const name = "Trees" ;
const parseData = (input) => input.split("\n");
export const part1 = (input) => trees.part1(parseData(input));
export const part2 = (input) => trees.part2(parseData(input));