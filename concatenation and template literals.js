//concatenation is merging of strings
let user_name = "Drishti";
let roll_no = 2204101002;
//now suppose we want a statement as Hi, This is Drishti and my rollno is 2204101002.
let message = "Hi, This is " + user_name + " and my rollno is " + roll_no + ".";
console.log(message); 
//now here for concatenation, we have used + operator but it is not convenient to use always
//to solve this issue template literals are used
let tick_message = `Hi, This is ${user_name} and my rollno is ${roll_no}.`;
console.log(tick_message);
//we have used backticks and template literal as ${variable name} that should be at that place
//its similar to how we use %c,%d in C language.

//now template literal can be useful if we want output in multiple lines 
let intro;
intro = `Hi how u doing?
its nice to see you here
i am just chilling.`;
console.log(intro);