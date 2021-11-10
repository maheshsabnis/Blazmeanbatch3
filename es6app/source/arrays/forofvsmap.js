let names = [
  "Mahesh",
  "Tejas",
  "Leena",
  "Amit",
  "Ajay",
  "Anil",
  "Abhay",
  "Nandu",
  "Shyam",
  "Jaywant",
  "Anil",
  "Vivek",
  "Satish",
  "Mukesh",
];

let res1 = names.forEach((n, i) => {
  if (n.length > 5) {
    n = n.toUpperCase();
    console.log(`forEach()  Upper case n = ${n}`);
    return n;
  }
});

console.log('Using forEach()');
console.log(`Result forEach = ${res1}`);
console.log(`Original Array ${names}`);

let res2 = names.map((n,i)=>{
    if (n.length > 5) {
        n = n.toUpperCase();
        console.log(`map() Upper case n = ${n}`);
        return n;
      }  
});


console.log('Using map()');
console.log(`Result map() ${res2} and its length = ${res2.length}`);
console.log(`Original Array ${names} and its length = ${names.length}`);

let res3 = names.filter((n,i)=>{
     return n.length > 5; 
});
console.log('Using filter()');
console.log(`Result filter() ${res3} and its length = ${res3.length}`);
console.log(`Original Array ${names} and its length = ${names.length}`);