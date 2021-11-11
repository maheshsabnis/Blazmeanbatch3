"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LikeOverloading = /*#__PURE__*/function () {
  function LikeOverloading() {
    _classCallCheck(this, LikeOverloading);
  }

  _createClass(LikeOverloading, [{
    key: "addUsingArgumentsCheck",
    value: function addUsingArgumentsCheck(a, b) {
      // a and b are undefined
      if (arguments.length === 0) {
        return 'No Arguments to method';
      } // pass 'a' but b is undefined


      if (arguments.length === 1) {
        return "".concat(a, " and ").concat(b);
      } // pass a and b both


      if (arguments.length === 2) {
        return Math.pow(a, b);
      }
    } // the p as a rest parameter or a object spread
    // The 'p' is a single object that will be spreaded with multiple values

  }, {
    key: "getSum",
    value: function getSum() {
      var sum = 0;

      for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) {
        p[_key] = arguments[_key];
      }

      if (p.length > 0) {
        p.forEach(function (n, i) {
          sum += n;
        });
      }

      return sum;
    }
  }, {
    key: "getSumArr",
    value: function getSumArr(p) {
      var sum = 0;

      if (p.length > 0) {
        p.forEach(function (n, i) {
          sum += n;
        });
      }

      return sum;
    }
  }]);

  return LikeOverloading;
}();

var o1 = new LikeOverloading();
console.log("0 Parameters = ".concat(o1.addUsingArgumentsCheck()));
console.log("1 Parameter = ".concat(o1.addUsingArgumentsCheck(3)));
console.log("2 Parameters = ".concat(o1.addUsingArgumentsCheck(3, 4)));
console.log("Sum 2 Parameters ".concat(o1.getSum(2, 3)));
console.log("Sum 3 Parameters ".concat(o1.getSum(2, 3, 4)));
console.log("Sum 4 Parameters ".concat(o1.getSum(2, 3, 4, 5)));
console.log("Sum 5 Parameters ".concat(o1.getSum(2, 3, 4, 5, 6)));
console.log("Sum 6 Parameters ".concat(o1.getSum(2, 3, 4, 5, 6, 7)));
console.log("Sum 2 Parameters ".concat(o1.getSumArr([2, 3])));
console.log("Sum 3 Parameters ".concat(o1.getSumArr([2, 3, 4])));
console.log("Sum 4 Parameters ".concat(o1.getSumArr([2, 3, 4, 5])));
console.log("Sum 5 Parameters ".concat(o1.getSumArr([2, 3, 4, 5, 6])));
console.log("Sum 6 Parameters ".concat(o1.getSumArr([2, 3, 4, 5, 6, 7])));
