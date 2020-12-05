const boarding = require("./boarding");
export const data = require("./data.txt");

export const name = "Binary Boarding" ;
const parseData = (input) => input.split("\n");
export const part1 = (input) => boarding.part1(parseData(input));
export const part2 = (input) => boarding.part2(parseData(input));