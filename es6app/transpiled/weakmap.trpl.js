"use strict";

var wm = new WeakMap();
var o0 = {
  DeptNo: 10,
  DeptName: 'IT'
};
var o1 = {
  DeptNo: 20,
  DeptName: 'HR'
};
var o2 = {
  DeptNo: 30,
  DeptName: 'SL'
};
wm.set(o0, [{
  EmpNo: 101,
  EmpName: 'A'
}, {
  EmpNo: 102,
  EmpName: 'B'
}]);
wm.set(o1, [{
  EmpNo: 103,
  EmpName: 'A'
}, {
  EmpNo: 104,
  EmpName: 'B'
}]);
wm.set(o2, [{
  EmpNo: 105,
  EmpName: 'A'
}, {
  EmpNo: 106,
  EmpName: 'B'
}]);
var o3 = {
  DeptNo: 40,
  DeptName: 'TR'
};
wm.set(o3, [{
  EmpNo: 107,
  EmpName: 'A'
}, {
  EmpNo: 104,
  EmpName: 'B'
}]); // the reference of {DeptNo:30,DeptName:'SL'} set previously 
// and reference of wm.has({DeptNo:30,DeptName:'SL'}) is different

console.log("".concat(wm.has({
  DeptNo: 30,
  DeptName: 'SL'
}))); // false

console.log("".concat(wm.has(o1)));
