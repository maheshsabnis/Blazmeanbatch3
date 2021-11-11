let setObject = new Set();

// define objects
let o1 = { id: 1, name: "A" };
let o2 = { id: 2, name: "B" };
let o3 = { id: 3, name: "C" };
let o4 = { id: 4, name: "D" };
let o5 = { id: 5, name: "E" };

setObject.add(o1);
setObject.add(o2);
setObject.add(o3);
setObject.add(o4);
setObject.add(o5);
setObject.add(o5); // duplicate so omitted
o5 = {id:6,name:'F'}; // update the o5 with new values
setObject.add(o5); // since o5 is with new values, its ie a new object and will be stored in Set
o1 = null; // nullyfying the o1 
setObject.add(o1);
o1 = {id:7, name:'G'};
setObject.add(o1);
o1 = undefined;
setObject.add(o1);
let o6 = {id:2, name:'B'}; // value is same as o2
setObject.add(o6);
o6 = {id:2, name:'H'}; // update o6
setObject.add(o6); // add o6 not omitted although we have changed one property




console.log(`Size is = ${setObject.size}`);

for (const iterator of setObject.values()) {
    console.log(`Values = ${JSON.stringify(iterator)}`);
}
console.log();
for (const iterator of setObject.keys()) {
    console.log(`Keys = ${JSON.stringify(iterator)}`);
}
