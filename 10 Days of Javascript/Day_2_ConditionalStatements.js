"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getGrade(score) {
  let grade;
  score = Number(score);
  // Write your code here
  grade =
    score > 25 && score <= 30
      ? "A"
      : score > 20 && score <= 25
      ? "B"
      : score > 15 && score <= 20
      ? "C"
      : score > 10 && score <= 15
      ? "D"
      : score > 5 && score <= 10
      ? "E"
      : "F";
  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}
