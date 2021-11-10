"use strict";

var firstName = "Mahesh";
var middleName = "Rameshrao";
var lastName = "Sabnis"; // traditional concatenation
// \n the next line

var fullName1 = firstName + ' \n ' + middleName + ' \n ' + lastName;
console.log('====================================');
console.log('Traditional Concatenation ' + fullName1);
console.log('===================================='); // Using ES 6 String Interpolation or Template String
// the Template string maintains the 'state' of string object e.g. new-line on
// pressing 'enter'

var fullName2 = "The First Name ".concat(firstName, " \n                 The Middle Name ").concat(middleName, " \n                 The Last Name ").concat(lastName);
console.log('====================================');
console.log("Using Template String ".concat(fullName2));
console.log('====================================');
