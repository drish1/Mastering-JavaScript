/**
 * In this exercise we will try to print some pattern :"*"
   patter : *
            * *
            * * * 
 */
const readlinesync = require("readline-sync");
const size = readlinesync.question("enter the value of size");
const pattern = "*";
for(let i=1;i<=size;i++)
{
    console.log(pattern.repeat(i));
}

for(let i = size-1; i>0;i--)
{
    console.log(pattern.repeat(i));
}

// Number of characters in a string
const str = "aditya roy kapoor"
let count=0;
for(let i=0;i<str.length;i++)
{
    count++;
}
console.log(`length is ${count}`);


//Given a range of numbers find even numbers
for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(`${i} is even`);
    }
}

//given a string check if has vowels or not
const s = "hello, gfg";
const vowels = "aeiou";
let cnt =0;
for(let i=0;i<s.length;i++)
{
    //if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' ||s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U')
    if(vowels.includes(s[i]))
    cnt++;
}
console.log(`vowels are ${cnt}`);