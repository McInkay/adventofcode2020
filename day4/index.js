const passports = require("./passports");
export const data = require("./data.txt");

export const name = "Passport Processing" ;
const parseData = (input) => input.split("\n\n");
export const part1 = (input) => passports.part1(parseData(input));
export const part2 = (input) => passports.part2(parseData(input));