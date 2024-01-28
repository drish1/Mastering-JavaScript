/*
we are trying to read data from user */

//we require a package readline-sync
/*
installation command
npm install readline-sync
*/
//to use the package we need to use statement as require("readline-sync") so lets take it in some variable

const reqPackage = require("readline-sync");
const user_info = reqPackage.question("what is your name?"); //using package we are taking input from the user 
//we have stored the input from the user into a variable so that we can console or output it.
//let's take another input from the user
const userage = reqPackage.question("what is your age? ");
console.log(typeof userage);
console.log(`hi dear ${user_info}`);
console.log(`the user if of age ${userage}`);
//one thing to note is input from the user here is of type string
//we can utilize type conversion concept for performing airthmetic operation on string