let myMap = new Map();
myMap.set(1, {id:101,name:'A'});
myMap.set(2, {id:102,name:'B'});
myMap.set(3, {id:103,name:'C'});
myMap.set(4, {id:104,name:'D'});
myMap.set(5, {id:105,name:'E'});
myMap.set(6, {id:106,name:'F'});
myMap.set(6, {id:107,name:'G'}); // duplicate Key but value is different, this will overwrite the value for same key in Map

myMap.set(7, [{id:201,name:'Mahesh'}, {id:202,name:'Tejas', hobbies:['Music', 'Sports', 'Movies']}]);

console.log(`Size = ${myMap.size}`);
console.log(`Has Record 6 = ${myMap.has(6)}`);
console.log(`Has Record 7 = ${myMap.has(7)}`);
for (const iterator of myMap.entries()) {
    console.log(`Keys = ${iterator[0]} and Values = ${JSON.stringify(iterator[1])}`);
}
console.log();
myMap.delete(6);
for (const iterator of myMap.entries()) {
    console.log(`Keys = ${iterator[0]} and Values = ${JSON.stringify(iterator[1])}`);
}
