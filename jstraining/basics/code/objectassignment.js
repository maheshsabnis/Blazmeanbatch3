var obj1 = {x:10};
console.log(' obj1.x = ' + obj1.x);

var obj2 = obj1; // assigning obj2 by obj1

console.log(' obj1.x = ' + obj1.x + ' obj2.x ' + obj2.x);

obj2.x = 1000; // modify obj2.x

console.log(' After modification of obj2.x to 1000,  obj1.x = ' + obj1.x + ' obj2.x ' + obj2.x);

var obj3 = Object.assign({},obj1);
console.log(' obj1.x = ' + obj1.x + ' obj3.x ' + obj3.x);
obj3.x  =90; // modify the obj3.x
console.log(' After modification of obj3.x to 90,  obj1.x = ' + obj1.x + ' obj3.x ' + obj3.x);



