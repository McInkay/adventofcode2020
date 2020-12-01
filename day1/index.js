const expenses = require("./expenses");
export const data = require("./data.txt");

export const name = "Expenses" ;
const parseData = (input) => input.split("\n").map((num) => Number(num));
export const part1 = (input) => expenses.part1(parseData(input));
export const part2 = (input) => expenses.part2(parseData(input));