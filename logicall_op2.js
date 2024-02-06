//while working on logical operators truthy or falsy are considered
/**
 * let's first understand what actually the truthy and falsy values are
 * Falsy : if on conversion to boolean values the output it returns is false , it is a falsy
 */

let demo = null;
console.log(Boolean(demo));

const firstname = "";
const lastname = "";
//expression with or operator will look for first truthy value, if all are falsy then last falsy will be returned.
const username = firstname || lastname || null;
//here what happens is for "or" operator if the firstname exits means giving a truthy value then firstname will be assigned to username
//if lets suppose firstname = "", then we will check lastname and lastname will be assigned to username
console.log(`we have ${username}`);


//truthy and falsy values are useful while dealing wih undefined values

let a = 23;
let b;
console.log(a+b);//here we will get NaN as an answer as b is undefined
//this can be solved with the help of or operator just as we saw above

console.log(a + (b||0));
// or operator follows rule : return first truthy if not found return last falsy 


/**
 * Let's understand "&&" operator working
 * && looks for the first falsy value and returns it, if not found then it returns last truthy value
 * working of && is opposite to that of ||
 */

let c = "hi";
let d = "there";
console.log(c && d);//here we got "there" as output because && returns last truthy if not found any falsy

let x = "u are strong";
let y = null;
console.log(x&&y);//we got null as output coz its the first falsy

/**
 * and operator is never used to assign defualt values as it will result in falsy values being assigned
 */

//Exercise
console.log(3||2||1); //3
console.log(""||0||2); //2
console.log(""||0||undefined);//undefined
console.log(""||"null"||2);//null


//Exercise

console.log(3&&2&&1);//1
console.log("" && 0 && 2);//"" empty string as output
console.log("undefined"&& "null" && "");//"" empty string as output