let numbers = [1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20];
console.log('Using Array.forEach()');
numbers.forEach((n,idx)=>{
    console.log(`Using forEach Number at index ${idx} is = ${n}`);
});
console.log();
console.log('Using Array.map()');
numbers.map((n,idx)=>{
    console.log(`Using map Number at index ${idx} is = ${n}`);
});
console.log();
console.log('Using Array.filter()');
let result = numbers.filter((n,idx)=>{
    return n % 2 === 0 ; // return only even numbers
});
console.log(` Using array.filter() for even numbers 
${result} and length of resultant array is = ${result.length}`);

console.log();
console.log('Using Array.find()');
let res = numbers.find((n,idx)=>{
   return n === 500;
});
console.log(`Find 5  = ${res}`);

console.log(`Reverse = ${numbers.reverse()}`);
