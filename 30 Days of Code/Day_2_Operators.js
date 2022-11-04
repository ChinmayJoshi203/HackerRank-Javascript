"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  var meal_cost1 = parseFloat(meal_cost, 2);
  var meal_tip = parseFloat((tip_percent * meal_cost1) / 100, 10);
  var meal_tax = parseFloat((tax_percent * meal_cost1) / 100, 10);
  console.log(Math.round(meal_tip + meal_tax + meal_cost1));
}

function main() {
  const meal_cost = parseFloat(readLine().trim());

  const tip_percent = parseInt(readLine().trim(), 10);

  const tax_percent = parseInt(readLine().trim(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
