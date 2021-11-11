class SimpleMathClass {

      // define a class member (The new syntax for defining class members from ES 9+)
      // defined directly at the class level and it is public by default (Syntax Support from ES 9+)
       x1 = 10;

     // private declaration
     #privateN1 = 0;
     #privateN2 = 0;

     // the 'constructor()' is a standard function
      constructor(){
          // declaring public class members public explicitly using 'this.'
          // original ES 6 Syntax
          this.n1 = 100;
          this.n2 = 200;
          console.log('constructor called');
      }  
      // methods are public by default
      add(x,y){
          // class member is accessible using 'this.' prefix
        return x + y + this.x1;
      }

      accessPublicMemebers(){
          return this.n1 * this.n2;
      }

      power(x,y) {
          return  Math.pow(x,y); // return x raised to y
      }
      sqrt(x){
          return Math.sqrt(x); // return square root of x
      }
      mathOps(){
          // Round to nearest integer
          console.log(`Round of 11.7 is  = ${Math.round(11.7)}`);
          
          console.log(`Round 11.5 up to the nearest integer is = ${Math.ceil(11.5)}`);
          console.log(`Round 11.5 down to the nearest integer is = ${Math.floor(11.5)}`);
      }

      // writing get/set properties for initializing private members
      // set accepts a parameter
      set N1(value) {
        this.#privateN1 = value;
      }
      // get to return
      get N1(){
          return this.#privateN1;
      }

      set N2(value) {
        this.#privateN2 = value;
      }
      // get to return
      get N2(){
          return this.#privateN2;
      }

      // define a private method
      #privateMethod(str){
        let res=''; 
        for(let i = str.length; i>=0; i--) {
            res+= str[i];
        }
         return `The Reverse of ${str} is = ${res}`; 
      }

      getReverse(str) {
          return this.#privateMethod(str);
      }

      static changeCase(s,c){
          if(c === "u") return s.toUpperCase();
          if(c === 'l') return s.toLowerCase();
          return s; 
      }
}

// define an instance if the class
let o1 = new SimpleMathClass(); // call the constructor() function
// call methods
console.log(`Add = ${o1.add(30,40)}`);
console.log(`Power 4 raised to 5 is = ${o1.power(4,5)}`);
console.log(`Square root of 9 is = ${o1.sqrt(9)}`);
o1.mathOps();
console.log(`Class Member Access = ${o1.x1}`);
console.log(`Method using public members = ${o1.accessPublicMemebers()}`);
console.log(`Direct Access of Public Members = ${o1.n1} and ${o1.n2}`);
// using properties
o1.N1 = 1000;
console.log(`N1 = ${o1.N1}`);
o1.N2 = 2000;
console.log(`N2 = ${o1.N2}`);

console.log(o1.getReverse('JavaScript'));
console.log(`Accessing Static Method ${SimpleMathClass.changeCase('JavaSCript ES 6' , 'u')}`);
console.log(`Accessing Static Method ${SimpleMathClass.changeCase('JavaSCript ES 6' , 'l')}`);