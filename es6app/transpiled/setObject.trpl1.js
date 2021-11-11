"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setObject = new Set(); // define objects

var o1 = {
  id: 1,
  name: "A"
};
var o2 = {
  id: 2,
  name: "B"
};
var o3 = {
  id: 3,
  name: "C"
};
var o4 = {
  id: 4,
  name: "D"
};
var o5 = {
  id: 5,
  name: "E"
};
setObject.add(o1);
setObject.add(o2);
setObject.add(o3);
setObject.add(o4);
setObject.add(o5);
setObject.add(o5); // duplicate so omitted

o5 = {
  id: 6,
  name: 'F'
}; // update the o5 with new values

setObject.add(o5); // since o5 is with new values, its ie a new object and will be stored in Set

o1 = null; // nullyfying the o1 

setObject.add(o1);
o1 = {
  id: 7,
  name: 'G'
};
setObject.add(o1);
o1 = undefined;
setObject.add(o1);
var o6 = {
  id: 2,
  name: 'B'
}; // value is same as o2

setObject.add(o6);
o6 = {
  id: 2,
  name: 'H'
}; // update o6

setObject.add(o6); // add o6 omitted

console.log("Size is = ".concat(setObject.size));

var _iterator = _createForOfIteratorHelper(setObject.values()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var iterator = _step.value;
    console.log("Values = ".concat(JSON.stringify(iterator)));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log();

var _iterator2 = _createForOfIteratorHelper(setObject.keys()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _iterator3 = _step2.value;
    console.log("Keys = ".concat(JSON.stringify(_iterator3)));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
