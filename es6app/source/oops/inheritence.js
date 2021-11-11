class MyBase {
    #x=0;
    #y=0;
    constructor(a,b){
        this.#x = a;
        this.#y = b;
    }

    power(){
        console.log('Base');
        return Math.pow(this.#x,this.#y);
    }
}


class MyDerive extends MyBase {
    #a = 0;
    #b = 0;
    constructor(x,y) {
        super(x,y);
        this.#a = x;
        this.#b = y;
    }

    power(){
        console.log('Derive');
       // console.log(`x = ${this.#x} and y = ${this.#y}`);
        return Math.pow(this.#a, this.#b);
    }
}

let o1 = new MyDerive(10,20);
console.log(`Power = ${o1.power()}`);
let o2 = new MyBase(2,3);
console.log(`Power = ${o2.power()}`);
o2 = new MyDerive(4,5); // re-instantiating the o2 using the MyDerive class
console.log(`Power = ${o2.power()}`);

 

 
