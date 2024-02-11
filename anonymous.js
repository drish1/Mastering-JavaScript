//function with no name are called anonymous function or function expression

let user_info = function ()
{
    console.log("hello geeks");
}

//calling a function
user_info();

//we cannot have call before the function declaration in case of anonymous function case, it will give an error
// we can check the type of anonymous function using typeof
console.log(typeof user_info);

//named funtion expression are nothing but assigning normal function to a variable

let user_profile = function profile(){
    console.log("Good Evening fellas, happy to have you here");
}
//profile(); this function call gives error
user_profile();

//in named function expression, local check with original name is valid

let user_age = function age(){
    console.log("Good Evening fellas");
    console.log(typeof age);
}
user_age();