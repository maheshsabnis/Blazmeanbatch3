"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _privateN = /*#__PURE__*/new WeakMap();

var _privateN2 = /*#__PURE__*/new WeakMap();

var _privateMethod = /*#__PURE__*/new WeakSet();

var SimpleMathClass = /*#__PURE__*/function () {
  // define a class member (The new syntax for defining class members from ES 9+)
  // defined directly at the class level and it is public by default (Syntax Support from ES 9+)
  // private declaration
  // the 'constructor()' is a standard function
  function SimpleMathClass() {
    _classCallCheck(this, SimpleMathClass);

    _classPrivateMethodInitSpec(this, _privateMethod);

    _defineProperty(this, "x1", 10);

    _classPrivateFieldInitSpec(this, _privateN, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _privateN2, {
      writable: true,
      value: 0
    });

    // declaring public class members public explicitly using 'this.'
    // original ES 6 Syntax
    this.n1 = 100;
    this.n2 = 200;
    console.log('constructor called');
  } // methods are public by default


  _createClass(SimpleMathClass, [{
    key: "add",
    value: function add(x, y) {
      // class member is accessible using 'this.' prefix
      return x + y + this.x1;
    }
  }, {
    key: "accessPublicMemebers",
    value: function accessPublicMemebers() {
      return this.n1 * this.n2;
    }
  }, {
    key: "power",
    value: function power(x, y) {
      return Math.pow(x, y); // return x raised to y
    }
  }, {
    key: "sqrt",
    value: function sqrt(x) {
      return Math.sqrt(x); // return square root of x
    }
  }, {
    key: "mathOps",
    value: function mathOps() {
      // Round to nearest integer
      console.log("Round of 11.7 is  = ".concat(Math.round(11.7)));
      console.log("Round 11.5 up to the nearest integer is = ".concat(Math.ceil(11.5)));
      console.log("Round 11.5 down to the nearest integer is = ".concat(Math.floor(11.5)));
    } // writing get/set properties for initializing private members
    // set accepts a parameter

  }, {
    key: "N1",
    get: // get to return
    function get() {
      return _classPrivateFieldGet(this, _privateN);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _privateN, value);
    }
  }, {
    key: "N2",
    get: // get to return
    function get() {
      return _classPrivateFieldGet(this, _privateN2);
    } // define a private method
    ,
    set: function set(value) {
      _classPrivateFieldSet(this, _privateN2, value);
    }
  }, {
    key: "getReverse",
    value: function getReverse(str) {
      return _classPrivateMethodGet(this, _privateMethod, _privateMethod2).call(this, str);
    }
  }], [{
    key: "changeCase",
    value: function changeCase(s, c) {
      if (c === "u") return s.toUpperCase();
      if (c === 'l') return s.toLowerCase();
      return s;
    }
  }]);

  return SimpleMathClass;
}(); // define an instance if the class


function _privateMethod2(str) {
  var res = '';

  for (var i = str.length; i >= 0; i--) {
    res += str[i];
  }

  return "The Reverse of ".concat(str, " is = ").concat(res);
}

var o1 = new SimpleMathClass(); // call the constructor() function
// call methods

console.log("Add = ".concat(o1.add(30, 40)));
console.log("Power 4 raised to 5 is = ".concat(o1.power(4, 5)));
console.log("Square root of 9 is = ".concat(o1.sqrt(9)));
o1.mathOps();
console.log("Class Member Access = ".concat(o1.x1));
console.log("Method using public members = ".concat(o1.accessPublicMemebers()));
console.log("Direct Access of Public Members = ".concat(o1.n1, " and ").concat(o1.n2)); // using properties

o1.N1 = 1000;
console.log("N1 = ".concat(o1.N1));
o1.N2 = 2000;
console.log("N2 = ".concat(o1.N2));
console.log(o1.getReverse('JavaScript'));
console.log("Accessing Static Method ".concat(SimpleMathClass.changeCase('JavaSCript ES 6', 'u')));
console.log("Accessing Static Method ".concat(SimpleMathClass.changeCase('JavaSCript ES 6', 'l')));
