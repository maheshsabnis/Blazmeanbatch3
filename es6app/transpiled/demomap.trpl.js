"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var myMap = new Map();
myMap.set(1, {
  id: 101,
  name: 'A'
});
myMap.set(2, {
  id: 102,
  name: 'B'
});
myMap.set(3, {
  id: 103,
  name: 'C'
});
myMap.set(4, {
  id: 104,
  name: 'D'
});
myMap.set(5, {
  id: 105,
  name: 'E'
});
myMap.set(6, {
  id: 106,
  name: 'F'
});
myMap.set(6, {
  id: 107,
  name: 'G'
}); // duplicate Key but value is different, this will overwrite the value for same key in Map

myMap.set(7, [{
  id: 201,
  name: 'Mahesh'
}, {
  id: 202,
  name: 'Tejas',
  hobbies: ['Music', 'Sports', 'Movies']
}]);
console.log("Size = ".concat(myMap.size));
console.log("Has Record 6 = ".concat(myMap.has(6)));
console.log("Has Record 7 = ".concat(myMap.has(7)));

var _iterator = _createForOfIteratorHelper(myMap.entries()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var iterator = _step.value;
    console.log("Keys = ".concat(iterator[0], " and Values = ").concat(JSON.stringify(iterator[1])));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log();
myMap["delete"](6);

var _iterator2 = _createForOfIteratorHelper(myMap.entries()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _iterator3 = _step2.value;
    console.log("Keys = ".concat(_iterator3[0], " and Values = ").concat(JSON.stringify(_iterator3[1])));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
