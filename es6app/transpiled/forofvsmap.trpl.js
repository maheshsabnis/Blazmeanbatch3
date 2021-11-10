"use strict";

var names = ["Mahesh", "Tejas", "Leena", "Amit", "Ajay", "Anil", "Abhay", "Nandu", "Shyam", "Jaywant", "Anil", "Vivek", "Satish", "Mukesh"];
var res1 = names.forEach(function (n, i) {
  if (n.length > 5) {
    n = n.toUpperCase();
    console.log("forEach()  Upper case n = ".concat(n));
    return n;
  }
});
console.log('Using forEach()');
console.log("Result forEach = ".concat(res1));
console.log("Original Array ".concat(names));
var res2 = names.map(function (n, i) {
  if (n.length > 5) {
    n = n.toUpperCase();
    console.log("map() Upper case n = ".concat(n));
    return n;
  }
});
console.log('Using map()');
console.log("Result map() ".concat(res2, " and its length = ").concat(res2.length));
console.log("Original Array ".concat(names, " and its length = ").concat(names.length));
var res3 = names.filter(function (n, i) {
  return n.length > 5;
});
console.log('Using filter()');
console.log("Result filter() ".concat(res3, " and its length = ").concat(res3.length));
console.log("Original Array ".concat(names, " and its length = ").concat(names.length));
