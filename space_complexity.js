'use strict';

/*
space complexity : how much memory do we need to allocate in order to run the code in an algorithm.

What causes space complexity
1. Variables
2. Data structures (Arrays and Objects)
3. Function call
4. Allocations
*/

function sayHello(n) {
  for (let i = 0; i < n; i++) {
    console.log('Hello');
  }
}
sayHello(3); // O(1)

function arrayOfHiNTimes(n) {
  let hiArray = []; // O(1)
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'Hi'; // O(n)
  }
  return hiArray;
}
console.log(arrayOfHiNTimes(5));

// O(1 + n)
// O(n)