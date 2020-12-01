const expenses = require("./expenses");
export const data = require("./data.txt");

export const name = "Expenses`" ;
export const part1 = (data) => expenses.part1(data.split("\n"));
export const part2 = (data) => expenses.part2(data.split("\n"));