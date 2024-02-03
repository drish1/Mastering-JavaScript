const marks = 60;
if(marks<40)
{
    console.log("work hard");
}
else if(marks<60)
{
    console.log("B Grade");
}
else if(marks<80)
{
    console.log("A Grade");
}
else
{
    console.log("Genius");
}
/**
 * ternary operator syntax
 * condition? if true this part is evaluated : if false this part will be evaluated 
 */
const result = marks<40?"Work hard" : marks<60?"B Grade":marks<80?"A Grade":"Genius";
console.log(result);