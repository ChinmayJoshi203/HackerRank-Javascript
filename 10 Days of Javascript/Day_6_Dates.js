
// Objective

// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task

// Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format

// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, , denoting the number of dates to check.
// Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let date=new Date(dateString)
    switch(date.getDay())
    {
        case 0:
        dayName='Sunday';
        break;
        case 1:
        dayName='Monday';
        break;
        case 2:
        dayName='Tuesday';
        break;
        case 3:
        dayName='Wednesday';
        break;
        case 4:
        dayName='Thursday';
        break;
        case 5:
        dayName='Friday';
        break;
        case 6:
        dayName='Saturday';
        break;
        }
    return dayName;

}



