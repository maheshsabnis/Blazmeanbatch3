let numbers = [1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20];

// using Array.sort() by declaring an explicit named function and used as input parameter to the Array.sort()

function sortHelper(a,b){
    return a - b;
}
// passing an explicitly declared function as input parameter 
let result = numbers.sort(sortHelper);
console.log(`Using Explicit function Parameter
${result}`);

// passing the callback function ES 3+
let result1 = numbers.sort(function(a,b){return a-b;});
console.log(`Using callback function Parameter
${result1}`);

// Using an ES 6 arrow operator
let result2  = numbers.sort((a,b)=>{return a-b;});
console.log(`Using ES 6 Arrow Operator ${result2}`);

