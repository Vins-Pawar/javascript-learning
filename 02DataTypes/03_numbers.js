const score = 35;
// console.log(score); //35

//explicitly wants value shoud be a number
const myscore = new Number(59.56622);
// console.log(myscore); //[Number: 59]

// console.log(myscore.toFixed(2));
// console.log(myscore.toPrecision(3));

// console.log(Math.random()); //gives value 0 to 1
// console.log(Math.floor((Math.random() * 10))+1); //gives value 0 to 10

//random value between the range
const min = 10;
const max = 30;

const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomValue);

// function generateRandomValues() {
//   for (let i = 0; i < 50; i++) {
//     let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
//     console.log(randomValue);
//   }
// }
// generateRandomValues()
