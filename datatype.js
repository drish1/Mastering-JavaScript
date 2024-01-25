//in this file, we will take a look at various datatypes 
//let's start with string data type
let userName = "Drishti";
console.log(userName);
//if we want to see the type of variable typeof will be used
console.log(typeof userName);
//anything written inside double quotes and assiged to variable is stated as string

//number

let age = 10;
console.log(age);
console.log(typeof age);

//number collectively involves both fractional and whole values
let weight = 23.45;
console.log(weight);
console.log(typeof weight);

//null
//variable assigned null is kind of object with pointing nowhere
let temp = null;
console.log(typeof temp);
console.log(temp);

//undefined
//when a variable is just left as declared but not initialized

let user_id;
console.log(typeof user_id);

//last we can object variable type
// object are non-primitive type variables i.e two or more values can be there
//for object we can utilize {} or []
//{key:value} kind of form we have
let person_details = {age:30, name: "aditya", state: "up"};
console.log(person_details);
console.log(typeof person_details);
// for arrays we can have [] this 