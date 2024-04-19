const score="35";

//console.log(typeof score);


//conversion of string to number 
const scoreInNumber=Number(score);
//console.log(typeof scoreInNumber);

/*
Basic Conversions to Number

"32" -> 32
"32abs" -> NaN
null -> 0
undefined -> NaN
true -> 1
false ->0
*/

// basic number conversion to boolean 
// toconvert variable to  boolean use Boolean(variable_name)

// 1 ->true
// 0 ->false
// "" ->false
// "vins"->true

// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean("")); //false
// console.log(Boolean("vins")); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false

//to convert varible to string use String method

let numToString=String(33)
// console.log(numToString);
// console.log( typeof numToString);

const str="vinsPawar"
// console.log(str.length);
// console.log(str.includes('ins'));
// console.log(str.substring(1,5));
// console.log(str.slice(-4,8));

let vins;
const name= vins || "";
// console.log(name.length);

let a=50;
// console.log( typeof a.toString())

const myIntro="hello my name is vinayak pawar im from warananager 200";
// console.log(myIntro.split(" ").toString());

const arr=["10","20","30"];
console.log(typeof Number(arr[0]));