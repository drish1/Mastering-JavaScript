/**
 * In this file we will ssee how we can utilize conditional statements to achieve the req. purpose
 */

const age = 8;
if(age>=18)
{
    console.log('eligible to vote');
}
else {
    console.log("underage");
}
//let's take input from the user using readline-sync
const readlinesync = require("readline-sync");
const number = Number(readlinesync.question("Enter a number!! "));
//simple example of if else
/*if(number%3==0)
{
    console.log('fizz');
}
else if(number%5==0)
{
    console.log('buzz');
}*/

//now let's see how we can use && and || operators with conditional statements

if(number%3===0 && number%5===0)
{
    console.log("Fizzz");
}
else if(number%3===0 || number%5===0)
{
    console.log("BUzzz");
}
else if(number%7===0)
{
    console.log('buzzbuzz');
}
else
{
    console.log('none of the above');
}
//this is if-else ladder where else if is otherwise of conditional statement above
if(number%3===0 && number%5===0)
{
    console.log("Fizzz");
}
if(number%3===0 || number%5===0)
{
    console.log("BUzzz");
}
if(number%7===0)
{
    console.log('buzzbuzz');
}
else//this else is associated with the if just above it keeping in mind the indentation
{
    console.log('none of the above');
}
//in if- if ladder every if statement will be checked