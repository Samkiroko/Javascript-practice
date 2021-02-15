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

/* Arrow functions*/
const calAge3 = (birthYear) => 2020 - birthYear;
const age3 = calAge3(1989);
console.log(age3);

// year till retirement
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1985, 'Joyce'));
