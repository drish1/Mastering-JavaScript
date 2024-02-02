//ternary operator ae alternative to if else
/**
 * for writing short and precise codes, ternary is preferable over if-else
 */

const readlinesync = require("readline-sync");
const age = readlinesync.question("what is your age? ");

const ans = age>=18?"yes":"no";
console.log(`${ans} eligible`);


//Example 02

const total_marks = 65;
let answer = total_marks>80?"you did well, keep it up":"work hard, you can do well next time";
console.log(answer);

//example 03

const name = "alex";
name === "alex"? console.log("he knows how to play voilin"):console.log("he should learn");