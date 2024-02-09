/**
 * for error handling in javascript, we define try catch block
 * in this we put the potential erroneous code in try block and if found what to do in catch block
 */

const str = "My name is Pikachu";
try{
    console.log(age);
}
catch(error)
{
    console.log('error is there');
    console.log(error.name);
    console.log(error.message);
}

console.log(str);

//to avoid cases like nan we can have try and catch block