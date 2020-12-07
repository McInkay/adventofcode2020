const luggage = require("./luggage");
export const data = require("./data.txt");

export const name = "Handy Haversacks" ;
const parseData = (input) => input.split("\n");
export const part1 = (input) => luggage.part1(parseData(input));
export const part2 = (input) => luggage.part2(parseData(input));