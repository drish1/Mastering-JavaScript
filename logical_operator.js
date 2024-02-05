/**
 * there are 4 logical operators
 * && -> returns true only when all conditions are true
 * || -> return s true when either of the condition is true
 * ! -> returns opposite of the value or reverts the value. not only works with boolean values
 * ?? -> stands for nullish coalescing
 */
const phy = 88;
const chem = 90;
const maths = 99;
const bio = 80;
//use of logical && operator
if(phy>=85 && chem>=85 && maths>=85) 
console.log("eligible");
else
console.log("not eligible");

// use of logical or operator


if(phy>=85 || chem>=85 || maths>=85) 
console.log("eligible for taking bio");
else
console.log("not eligible for science");

//use of ! operator

const truthvalue = true;
if(!truthvalue)
{
    console.log("not eligible");
}
else
{
    console.log("eligible");
}