'use strict';

function logger() {
  console.log('My name is samuel kiroko');
}
// calling /running /invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);

const appleJuice2 = fruitProcessor(10, 12);
alert(appleJuice2);
