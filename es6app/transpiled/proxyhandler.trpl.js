"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserInfo = function UserInfo() {
  _classCallCheck(this, UserInfo);

  _defineProperty(this, "firstName", 'Mahesh');

  _defineProperty(this, "lastName", 'Sabnis');

  _defineProperty(this, "Email", 'mahesh.sabnis@msit.com');

  _defineProperty(this, "_UerSecret", '*********');

  _defineProperty(this, "Occupation", 'Self-Employed');
}; // lets implement behavior in the handler to prevent an access of _UserSecret
// also prevent the updates in Email value


var handler = {
  // target is the target object
  // prop is the property from the target object
  get: function get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error('Access is denied');
    } else {
      // read the value of property from the target object  
      var val = target[prop];
      return val;
    }
  },
  // target is the target object
  // prop is the property from the target object
  // val is the value to be written in property
  set: function set(target, prop, val) {
    if (prop === 'Email') {
      throw new Error('This property cannot be changes');
    } else {
      target[prop] = val;
      return true;
    }
  },
  ownKeys: function ownKeys(target) {
    var keys = Object.keys(target); // return all properties except those starts from _

    var props = keys.filter(function (p, i) {
      return p[0] !== '_';
    });
    return props;
  },
  ownValues: function ownValues(target, prop) {
    // return value for each property
    var values = target[prop];
    return values;
  }
};
var obj = new UserInfo();
var proxy = new Proxy(obj, handler);

function consumer() {
  console.log(Object.keys(proxy)); // call ownKeys()

  console.log(Object.values(proxy)); // call ownValues

  console.log("First Name = ".concat(proxy.firstName));
  console.log("Last Name = ".concat(proxy.lastName));
  console.log("Email = ".concat(proxy.Email));
  console.log("Occupation = ".concat(proxy.Occupation)); // console.log(`Secret = ${proxy._UerSecret}`); // Access Denied

  proxy.firstName = 'Mr. Mahesh';
  console.log("Updated First Name = ".concat(proxy.firstName)); //    proxy.Email = 'mrmahesh.sabnis@msit.com'; // Access Denied
  //   console.log(`Email = ${proxy.Email}`); 
}

consumer();
