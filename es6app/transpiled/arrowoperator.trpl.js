"use strict";

var numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 12, 14, 16, 18, 20]; // using Array.sort() by declaring an explicit named function and used as input parameter to the Array.sort()

function sortHelper(a, b) {
  return a - b;
} // passing an explicitly declared function as input parameter 


var result = numbers.sort(sortHelper);
console.log("Using Explicit function Parameter\n".concat(result)); // passing the callback function ES 3+

var result1 = numbers.sort(function (a, b) {
  return a - b;
});
console.log("Using callback function Parameter\n".concat(result1)); // Using an ES 6 arrow operator

var result2 = numbers.sort(function (a, b) {
  return a - b;
});
console.log("Using ES 6 Arrow Operator ".concat(result2));
