const passwords = require("./passwords");
export const data = require("./data.txt");

export const name = "Passwords" ;
const parseData = (input) => input.split("\n");
export const part1 = (input) => passwords.part1(parseData(input));
export const part2 = (input) => passwords.part2(parseData(input));