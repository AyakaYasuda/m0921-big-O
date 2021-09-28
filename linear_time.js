'use strict';

const fish = ['Dory', 'Gill', 'Crush', 'Bubbles', 'Marlin', 'Nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(fish);
