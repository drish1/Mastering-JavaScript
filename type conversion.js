//there can be some cases where type conversion is necessary
//e.g consider we want to extract numbers from the text given so conversion from strings to number is required

const a = "10";  //string
const b = 2;   //number

const x = Number(a);
const y = String(b);

console.log(typeof a);
console.log(typeof b);
console.log(typeof x);
console.log(typeof y);


//let's see the type conversion to boolean

const p = true;
const q = Number(p);
console.log(typeof p);
console.log(typeof q);
console.log(q);

const m = 5;
const n = Boolean(m);
console.log(typeof m);
console.log(typeof n);
console.log(n);


const z = Number(n);
console.log(z);

const v = "hi";
const w = Number(v);
console.log(w); //will give nan as character string is there 

const r = "hi33";
const wr = Number(v);
console.log(wr); //will give nan as character string is there 
