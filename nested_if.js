//in this file, we are demonstrating the use of nested if
const readlinesync = require('readline-sync');
const number = Number(readlinesync.question('enter a number: '));

const remainder = number%2;

if(remainder===0){
    console.log(`${number} is an even number`);
    if(number%4===0)
    {
        console.log(`${number} is also divisible by 4 too`);
    }
    else
    {
        console.log(`${number} is not divisible by 4 too`);
    }
}
else
console.log(`${number} is an odd number`);


/**
 * nested ifs are useful when we want to check a condition when some other condition exists
 */