const mymodule = require('./mymodule');

console.log('====================================');
console.log(`Add = ${mymodule.add(20,30)}`);
console.log(`Add = ${mymodule.pow(2,30)}`);
console.log('====================================');

const objectClass = require('./exportclass');
// This will provide an instance of the Exported class i.e. MyClass from exportclass.cs 
let obj = new objectClass();
console.log('====================================');
console.log(`Result = ${obj.sort([30,20,10])}`);
console.log('====================================');