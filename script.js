'use strict';

// function logger() {
//   console.log('My name is samuel kiroko');
// }
// // calling /running /invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 2);
// console.log(appleJuice);

// const appleJuice2 = fruitProcessor(10, 12);
// alert(appleJuice2);

/* Function declaration VS Expressions */
// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calAge1(1989);

// /* Expression  */

// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calAge2(1993);
// console.log(age1, age2);

// /* Arrow functions*/
// const calAge3 = (birthYear) => 2020 - birthYear;
// const age3 = calAge3(1989);
// console.log(age3);

// // year till retirement
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2020 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearUntilRetirement(1985, 'Joyce'));

/*Function calling Other functions*/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function (birthYear) {
//   return 2020 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} you are already retired`;
//   }
// };

// console.log(yearUntilRetirement(1989, 'Samuel'));
// console.log(yearUntilRetirement(1889, 'Sam'));

/*Coding Challenge one*/
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// test data
const averDolphin = calcAverage(85, 54, 41);
console.log(averDolphin);
const averKoalas = calcAverage(23, 34, 27);
console.log(averKoalas);

function checkWinner(averDolphin, averKoalas) {
  if (averDolphin >= 2 * averKoalas) {
    return `Dolphins win 🏆 ${averDolphin} vs ${averKoalas}`;
  } else if (averKoalas >= 2 * averDolphin) {
    return `Koalas win 🏆 ${averKoalas} vs ${averDolphin}`;
  } else {
    return 'No one wins 🤔';
  }
}

console.log(checkWinner(averDolphin, averKoalas));
