/*
Nullish coalescing is denoted by "??" and is supported on latest version of node.js
*/

//example 01: 
let username = "drishti";
console.log(username ?? "missing"); //here we got drishti as output
//if username was null or undefined only then the value for fill up (here "missing") will be used

let a = "";
console.log(a ?? "missing");//empty string as output coz its not null or undefined

//nullish coalescing does not considers truthy or falsy values

let message;//this variable is undefined
console.log(message ?? "no message provided");


let cnt = null;//follow up will be returned coz this is null
console.log(cnt ?? "default");

//nullish coalescing is useful when 0 is also a potential choice for initialization but for || it is a falsy