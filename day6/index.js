const customs = require("./customs");
export const data = require("./data.txt");

export const name = "Custom Customs" ;
const parseData = (input) => input.split("\n\n");
export const part1 = (input) => customs.part1(parseData(input));
export const part2 = (input) => customs.part2(parseData(input));