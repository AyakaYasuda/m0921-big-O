'use strict';

// Rule 1 : Worst Case
/*
Here, the worst case is that Nemo is sitting at the end of the array and the function has to loop over the entire array to find Nemo.
*/
const fish = ['Dory', 'Gill', 'Crush', 'Bubbles', 'Marlin', 'Nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(fish);

// Rule 2 : Remove Constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2); // O(1)
  let index = 0; // O(1)
  while (index < middleIndex) {
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for (let i = 0; i < 100; i++) {
    // O(100)
    console.log('Hi'); // O(100)
  }
}
// O(3 + n/2 + n/2 + 200)

function printItemsTwice(items) {
  items.forEach(function (item) {
    console.log(item);
  }); // O(n)

  items.forEach(function (item) {
    console.log(item);
  }); // O(n)
}
// O(2n)
// O(n) removed constants

// Rule 3 : Different Type of Inputs

function printItemsTwice2(items, items2) {
  items.forEach(function (item) {
    console.log(item);
  }); // O(n)

  items2.forEach(function (item) {
    console.log(item);
  }); // O(m) since this function has a different input from the first one
}
// O(n + m)
// O(n) in case where both items have the same length

const arr = [1, 2, 3, 4, 5];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    } // O(n)
  } // O(n)
}

logAllPairs(arr);
// O(n * n)  nested for loop multiples runtime
// O(n^2)

// Rule 4 : Drop non Dominants

function printAllNumbersThenAllpairsSum(numbers) {
  console.log('These are the numbers'); // O(1)
  numbers.forEach(function (number) {
    console.log(number);
  }); // O(n)

  console.log('And these are their sums'); // O(1)
  numbers.forEach(function (firstNum) {
    numbers.forEach(function (secondNum) {
      console.log(firstNum + secondNum);
    });
  }); // O(n^2)
}
printAllNumbersThenAllpairsSum([1, 2, 3, 4, 5]);

// O(1 + n + 1 + n^2)
// O(2 + n + n^2)
// O(n + n^2)
// O(n^2) n^2 is the most dominant