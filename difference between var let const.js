//let's see the difference between var, let and const
var user_id = 123;
console.log(user_id);
//now with var we can redeclare a variable with same name
var user_id = 222;
console.log(user_id);

//taking let for declaration of variable
 let exam = "maths";
 console.log(exam);
//with let we cannot redeclare the variable but value can be modified
exam = "history";
console.log(exam);

//const as seen in other languages value cannot be modified
//declaration and initialization is done on same step
const result = 10;
console.log(result);