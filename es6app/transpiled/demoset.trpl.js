"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setValues = new Set(); // add data

setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add(60);
setValues.add(70);
setValues.add(10); // duplicate

setValues.add("10"); // print the size of the set

console.log("Size of Set is = ".concat(setValues.size)); // 8 (duplicate numeric 10 is omitted )
// read all entries

console.log("Entries ".concat(setValues.entries())); // iterator, a collection that represents all data from Set

var _iterator = _createForOfIteratorHelper(setValues.entries()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var iterator = _step.value;
    console.log(" ".concat(iterator[0], " ").concat(iterator[1]));
  } // verify if a record is present into the set

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log("Is 80 present ".concat(setValues.has(80))); // false
// lets iterate over all keys and values (keys and values are same)
// keys are internal to check the duplicate entry, whereas value is 'value' of the 'key'

console.log();
console.log('Keys');

var _iterator2 = _createForOfIteratorHelper(setValues.keys()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var record = _step2.value;
    console.log("Key = ".concat(record));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

console.log();
console.log('Values');

var _iterator3 = _createForOfIteratorHelper(setValues.values()),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _record = _step3.value;
    console.log("value = ".concat(_record));
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
