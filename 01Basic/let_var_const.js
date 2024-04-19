const accountId=123456;
let accountEmail='vins@gmail.com';
var accountPass='Ram@123'
accountCity="Warananagar"

//accountId=5;  -->changing constant value not possible

accountEmail='v@gmail.com'
accountPass="123";
accountCity='Kolhapur'

/*
    let-> functional scope 
    var-> block scope

    dont use var to declare a variable bez of issue in a block and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity])
