class AbstractClass {
    constructor(){
        if(new.target === AbstractClass) {
            throw new TypeError('Sorry! Abstract class cannot be instantiated');
        }
    }

    myFunction(){
        console.log(`I am the function from the Abstract class`);
    }
}


// let o1 = new AbstractClass();
// o1.myFunction();

// Lets extend the abstract class

class MyDeriveClass extends AbstractClass {
    constructor(){
        super();
    }

    myDeriveFunction(){
        console.log('I am the function from derive class');
    }
}

let o1 = new MyDeriveClass();
o1.myFunction(); // base class function
o1.myDeriveFunction(); // derive class function
