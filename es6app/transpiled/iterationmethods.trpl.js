"use strict";

var numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 12, 14, 16, 18, 20];
console.log('Using Array.forEach()');
numbers.forEach(function (n, idx) {
  console.log("Using forEach Number at index ".concat(idx, " is = ").concat(n));
});
console.log();
console.log('Using Array.map()');
numbers.map(function (n, idx) {
  console.log("Using map Number at index ".concat(idx, " is = ").concat(n));
});
console.log();
console.log('Using Array.filter()');
var result = numbers.filter(function (n, idx) {
  return n % 2 === 0; // return only even numbers
});
console.log(" Using array.filter() for even numbers \n".concat(result, " and length of resultant array is = ").concat(result.length));
console.log();
console.log('Using Array.find()');
var res = numbers.find(function (n, idx) {
  return n === 500;
});
console.log("Find 5  = ".concat(res));
console.log("Reverse = ".concat(numbers.reverse()));
