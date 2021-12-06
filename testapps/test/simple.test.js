import test from 'chai';
// the assertion object that will be used to compare the expected result withe actual 
let expect = test.expect; 
// import the code that is to be tested
import MyClass  from './../simple.js';

let obj;
// define a Test Suite

  describe('Test a Simple JavaScript Class',()=>{

     // a method that will be executed before each Test case
      beforeEach(() => {
        obj = new MyClass();
      });

  //  let obj  = new MyClass();
      // write a test case
      it('should return sum of two numbers',()=>{
        // arrange
        let x = 100;
        let y = 200;
        let expected = 300;
        // act
        let actual  = obj.add(x,y);
        // assertion
        expect(actual).to.equal(expected);
      });


      it('should concatinate two strings', ()=>{
        let s1 = 'Tejas';
        let s2 = 'Sabnis';
        let expected = 'TejasSabnis';
        let actual = obj.concat(s1,s2);
        expect(actual).to.equal(expected);
        
      });


      // test case to throw an exception
      it('should concatinate two strings', ()=>{
        let s1 = '';
        let s2 = 'Sabnis';
        let expected = 'String Length Cannot be 0';
        let actual = obj.concat(s1,s2);
        expect(actual).throw(expected);
        
      });

      // Code that will be executed after each test
      afterEach(() => {
          obj = undefined;
      })

  });
