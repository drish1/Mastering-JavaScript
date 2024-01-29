/*
In this file we will see the use case of comparison operators and how they can be used.
The cases are taken in below given sequence:
1.number operator number
2. string operator string
3. string operator number
4.null operator undefined
5.null operator number/string
6.undefined operator number/string
*/
console.log("number vs number");
console.log(20>40);
console.log(20>=40);
console.log(20==20);
console.log("string vs string");
//case 2
console.log("mango">="banana");
console.log("run" > "running");
console.log("string vs number");
//case 3
console.log("2">1);
console.log("01"==1);//ideally this is wrong as datatype should be one factor considered during comparision
//to solve this problem we use strict equality concept i.e === 
console.log("01"===1);

//case 4 
console.log("null vs undefined");
console.log(null==undefined);
//again this should be false as null has no value but undefined is a value when no value is assigned
//strict equality
console.log(null===undefined);

//case 5
console.log("null vs anything");
console.log(null<"app");
console.log(null<0);
console.log(null<1);
console.log(null==0);

//case 6
console.log("undefined vs anything");
console.log(undefined >0);
console.log(undefined <1);
console.log(undefined == 0);

//exercise
console.log("exercise");
console.log(3<=5);
console.log("mango" > "banana");
console.log("2">"3");
console.log(undefined==null);
console.log(null == undefined);
console.log(null<1);

