//for loop 
//Example 01
for(let i=0;i<5;i++)
{
    console.log("let's make it work");
}
console.log("loop has terminated");

//Example 02
//Tables from 1 to 14
for(let i=1;i<15;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(`${i} x ${j} = `,i*j);
    }
}
//pattern printing
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        process.stdout.write("*");//console.log by default goes to next line after one iteration
    }
    process.stdout.write("\n");
}
//to avoid new line after every iteration, we can use process.stdout.write()

/**
 * print every character of string
 */

const str = "hyderabad";
for(let i=0;i<str.length;i++)
{
    console.log(str[i]);
}