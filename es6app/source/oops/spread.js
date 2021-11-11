let obj0 = {a:1,b:1};
console.log(`obj0 = ${JSON.stringify(obj0)}`);
let obj1 = {...obj0, x:10,y:20};
console.log(`obj1 = ${JSON.stringify(obj1)}`); // mutation of obj1 with obj0 and x,y

let arr = [10,20,30];
console.log(`Original ${arr}`);
arr = [...arr, 40,50]; // mutation of arr
console.log(`Arr after spread ${arr}`);

obj1 = {...obj1, z:100};
console.log(`obj1 = ${JSON.stringify(obj1)}`); // mutation of obj1 with z


