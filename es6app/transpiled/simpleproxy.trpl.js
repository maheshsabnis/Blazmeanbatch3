"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MyTarget = function MyTarget() {
  _classCallCheck(this, MyTarget);

  _defineProperty(this, "message", 'I am message from Target Object');

  _defineProperty(this, "data", 1000);
}; // define a handler


var handler = {};
var obj = new MyTarget(); // define a proxy

var proxyObject = new Proxy(obj, handler);

function consumer1() {
  // use the proxy to define an access
  var pxyData = proxyObject.data;
  var pxyMessage = proxyObject.message;
  console.log('====================================');
  console.log("Data = ".concat(pxyData));
  console.log("Data = ".concat(pxyMessage));
  console.log('====================================');
}

consumer1();
