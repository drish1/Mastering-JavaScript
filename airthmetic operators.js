//basic  operations are +, -,/,*,% etc
//let's take different example to understand
//when operands are numbers
const x = 10;
const y = 2;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**2);
console.log(y**3);
//as per above example we are performig airthmetic operations just like we always do

//let operands are numbers but in double quotes i.e string
const m = "10";
const n = "2";
console.log(m+n); //this is performing concatenation on strings
console.log(m-n);
console.log(m*n);
console.log(m/n);
console.log(m%n);
console.log(m**2);
console.log(n**3);
//rest operations are performing respective operation just like on numbers coz these string can get converted into numbers

//let one operand is number and other is string

const p =10;
const q = "2";
console.log(p+q); //this is performing concatenation on strings
console.log(p-q);
console.log(p*q);
console.log(p/q);
console.log(p%q);
console.log(p**2);
console.log(q**3);
//thses are givng same output as the above case

//consider both operands as string with characters
const a = "apple";
const b = "grape";
console.log(a+b); //this is performing concatenation on strings
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**2);
console.log(b**3);
//when operands are strings with characters or anything else then numbers then they won't be convertible to numbers
//hence output as nan i.e not a number