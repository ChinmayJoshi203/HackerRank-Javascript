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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function isVowel(char){
    let vowels=['a','e','i','o','u']
    for(var i=0;i<vowels.length;i++)
    if(vowels[i]==char) return 1;
    return 0;
}
function vowelsAndConsonants(s) {
    let a=s.split('')
    let result=a.filter(x=>isVowel(x))
    for (var i=0;i<result.length;i++)
    {
        console.log(result[i])
    }
    
let results=a.filter(x=>!isVowel(x))
 for (var i=0;i<results.length;i++)
    {
        console.log(results[i])
    }
}

