var a = 100;
var b = 100;
console.log(a == b); // true
b = 80;
console.log(a > b); // true
console.log(a < b); // false

b = "100"; // string
console.log(a == b); // the result will be  'true' the == is value equality that equates variable w/0 datatype taken into consideration  so a and b are having same value
console.log(a === b); // false, the  === will parse the type, if type matches then value equavality will takes place 

