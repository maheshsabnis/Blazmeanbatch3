let wm = new WeakMap();
let o0 = {DeptNo:10,DeptName:'IT'};
let o1 = {DeptNo:20,DeptName:'HR'};
let o2 = {DeptNo:30,DeptName:'SL'};
wm.set(o0, [{EmpNo:101,EmpName:'A'},{EmpNo:102,EmpName:'B'}]);
wm.set(o1, [{EmpNo:103,EmpName:'A'},{EmpNo:104,EmpName:'B'}]);
wm.set(o2, [{EmpNo:105,EmpName:'A'},{EmpNo:106,EmpName:'B'}]);

let o3 = {DeptNo:40, DeptName:'TR'};

wm.set(o3,  [{EmpNo:107,EmpName:'A'},{EmpNo:104,EmpName:'B'}]);

// the reference of {DeptNo:30,DeptName:'SL'} set previously 
// and reference of wm.has({DeptNo:30,DeptName:'SL'}) is different
console.log(`${wm.has({DeptNo:30,DeptName:'SL'})}`); // false

console.log(`${wm.has(o1)}`);