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
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
GOOD LUCK*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // test data
// const averDolphin = calcAverage(85, 54, 41);
// console.log(averDolphin);
// const averKoalas = calcAverage(23, 34, 27);
// console.log(averKoalas);

// function checkWinner(averDolphin, averKoalas) {
//   if (averDolphin >= 2 * averKoalas) {
//     return `Dolphins win 🏆 ${averDolphin} vs ${averKoalas}`;
//   } else if (averKoalas >= 2 * averDolphin) {
//     return `Koalas win 🏆 ${averKoalas} vs ${averDolphin}`;
//   } else {
//     return 'No one wins 🤔';
//   }
// }

// console.log(checkWinner(averDolphin, averKoalas));

/* Introduction to arrays */
// const friend1 = 'Michael';
// const friend2 = 'Milla';
// const friend3 = 'Mic';
// const friend4 = 'Mich';

// const friends = ['Michael', 'Milla', 'Mic', 'Mich'];
// console.log(friends);

// const years = new Array(2020, 2000, 1889, 1845);
// console.log(years);
// console.log(years[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

const friends = ['Michael', 'Milla', 'Mic', 'Mich'];
// add elements
friends.push('Jay');
console.log(friends);
friends.unshift('john');
console.log(friends);

// remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Milla'));
// console.log(friends.includes('Milla'));

/*Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement  (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
GOOD LUCK*/

// step 1 create a function that calculate bill tips

// const calTips = (bill) => (50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// // step 2 test data in the array
// const bill = [275, 40, 430];
// const tips = [calTips(bill[0]), calTips(bill[1]), calTips(bill[2])];
// // step 3 console bill with relevant tip
// console.log(bill, tips);
// // step 4 total bills plus tip
// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(total);

/* Introduction to objects*/
// const samKiroko = {
//   firstName: 'Samuel',
//   lastName: 'Kiroko N',
//   age: 2020 - 1989,
//   job: 'software Developer',
//   friends: ['Milla', 'Joyce', 'Myles'],
// };
// console.log(samKiroko);

/*Dot vs. Bracket Notion*/
const samKiroko = {
  firstName: 'Samuel',
  lastName: 'Kiroko N',
  age: 2020 - 1989,
  job: 'software Developer',
  friends: ['Milla', 'Joyce', 'Myles'],
};

console.log(samKiroko.lastName);
console.log(samKiroko['lastName']);

const nameKey = 'Name';
console.log(samKiroko['first' + nameKey]);
console.log(samKiroko['last' + nameKey]);

// test cases on bracket Notation
const interestedIn = prompt(
  'What do you want to know about Sam? Choose between firstName, LastName, age, job, and friends '
);

if (samKiroko[interestedIn]) {
  console.log(samKiroko[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, LastName, age, job, and friends '
  );
}
// adding values in a object

samKiroko.location = 'Thindigua';
samKiroko['twitter'] = '@samkiroko';
console.log(samKiroko);

console.log(
  `${samKiroko.firstName} has ${samKiroko.friends.length}friends and his best friend is called ${samKiroko.friends[0]}`
);
