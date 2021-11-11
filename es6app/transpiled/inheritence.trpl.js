"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _x = /*#__PURE__*/new WeakMap();

var _y = /*#__PURE__*/new WeakMap();

var MyBase = /*#__PURE__*/function () {
  function MyBase(a, b) {
    _classCallCheck(this, MyBase);

    _classPrivateFieldInitSpec(this, _x, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _y, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _x, a);

    _classPrivateFieldSet(this, _y, b);
  }

  _createClass(MyBase, [{
    key: "power",
    value: function power() {
      console.log('Base');
      return Math.pow(_classPrivateFieldGet(this, _x), _classPrivateFieldGet(this, _y));
    }
  }]);

  return MyBase;
}();

var _a = /*#__PURE__*/new WeakMap();

var _b = /*#__PURE__*/new WeakMap();

var MyDerive = /*#__PURE__*/function (_MyBase) {
  _inherits(MyDerive, _MyBase);

  var _super = _createSuper(MyDerive);

  function MyDerive(x, y) {
    var _this;

    _classCallCheck(this, MyDerive);

    _this = _super.call(this, x, y);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _a, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _b, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _a, x);

    _classPrivateFieldSet(_assertThisInitialized(_this), _b, y);

    return _this;
  }

  _createClass(MyDerive, [{
    key: "power",
    value: function power() {
      console.log('Derive'); // console.log(`x = ${this.#x} and y = ${this.#y}`);

      return Math.pow(_classPrivateFieldGet(this, _a), _classPrivateFieldGet(this, _b));
    }
  }]);

  return MyDerive;
}(MyBase);

var o1 = new MyDerive(10, 20);
console.log("Power = ".concat(o1.power()));
var o2 = new MyBase(2, 3);
console.log("Power = ".concat(o2.power()));
o2 = new MyDerive(4, 5); // re-instantiating the o2 using the MyDerive class

console.log("Power = ".concat(o2.power()));
o2 = 100;
console.log(o2);
