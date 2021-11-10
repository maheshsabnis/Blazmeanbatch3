'use strict';

function MyFunction(x) {
  if (x) {
    var _y = 0;
    console.log('In If Statement y = ' + _y);
  }

  y++;
  console.log('Out of If Statement y = ' + y);
}

MyFunction(true);
MyFunction(false);

for (var _index = 0; _index < 10; _index++) {
  console.log('In for..loop index = ' + _index);
}

index++;
console.log('Outside of for..loop index = ' + index);
