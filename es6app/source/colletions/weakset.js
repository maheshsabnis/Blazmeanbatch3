let ws = new WeakSet();
let o1 = { id: 1, name: "A" };
let o2 = { id: 2, name: "B" };
let o3 = { id: 3, name: "C" };
let o4 = { id: 4, name: "D" };
let o5 = { id: 5, name: "E" };

ws.add(o1);
ws.add(o2);
ws.add(o3);
ws.add(o4);
ws.add(o5);
ws.add(o5); // duplicated entry

console.log(`Does Exist  = ${ws.has(o1)}`); // true

o1 = null; // kill the o1 object, the object reference will be removed from the WeakSet
console.log(`Does Exist after Killing  = ${ws.has(o1)}`); 
// lets re-birth the o1
o1 = {id:9,name:'S'};
console.log(`Does Exist after Re-Birth = ${ws.has(o1)}`);  // false because the reference is removed
ws.add(o1);
console.log(`Does Exist after Re-Birth and adding  into the set = ${ws.has(o1)}`);  // false because the reference is removed


