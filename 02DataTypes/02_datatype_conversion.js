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
console.log(numToString);
console.log( typeof numToString);