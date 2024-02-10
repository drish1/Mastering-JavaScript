/**
 * function can be used when a section of code needs to be used repeatedly and for a specific task
 * basic syntax :   function function_name(){
                        code segment
 *                  }
we can have function with arguments as well
 */

//function declaration
function message(){
    console.log("hi there, its a function");
}

//function call
message();

function user_name(name)
{
    console.log(`user has a name ${name}`);
}
//call
user_name("drishti");

//function with multiple parameters

function user_info(name,city,age)
{
    console.log(`hi my name is ${name}`);
    console.log(`i came from ${city}`);
    console.log(`my age is ${age}`);
}
user_info("yash","indore","22");

//call first
num_print(1,10);

//declaration

function num_print(min,max)
{
    for(let i = min;i<=max;i++)
    {
        console.log(i);
    }
}

