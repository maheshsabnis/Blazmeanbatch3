console.log('Hello World......Node.js');

let arr =[10,20,30];
console.log(arr);
 arr = ['A','B','C'];
console.log(arr);
let fname = 'Mahesh';
let mname = 'Ramesh';
let lname = 'Sabnis';
console.log(`${fname} ${mname} ${lname}`);

class MyClass {
    add(x,y) {return x + y;}
    pow(x,y) {return Math.pow(x,y);}
}
let o = new MyClass();
console.log(`Add = ${o.add(10,20)}`);
console.log(`Power = ${o.pow(10,5)}`);

arr.forEach((v,i)=> {console.log(v);});
arr = [...arr, 'D', 'E'];
arr.forEach((v,i)=> {console.log(v);});
