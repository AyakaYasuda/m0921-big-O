'use strict';

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// O(3 + 4n)
// O(n)

function anotherFunction(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 15; // O(1)

  for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) { // O(n)
      let p = j + 1; // O(n)
      let q = j + 2; // O(n)
      let r = j + 3; // O(n)
  }
  let string = 'I dont know' // O(1)
}
// O(4 + 8n)
// O(n)