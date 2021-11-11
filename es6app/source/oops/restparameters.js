class LikeOverloading {
    addUsingArgumentsCheck(a,b){
        // a and b are undefined
         if(arguments.length === 0) {
             return 'No Arguments to method';
         }

         // pass 'a' but b is undefined
         if(arguments.length === 1) {
            return `${a} and ${b}`;
         }

         // pass a and b both
         if(arguments.length === 2) {
             return Math.pow(a,b);
         }
    }
   
    // the p as a rest parameter or a object spread
    // The 'p' is a single object that will be spreaded with multiple values
    // This can be used as overloading
    getSum(...p){
        let sum = 0;
        if(p.length > 0) {
            p.forEach((n,i)=>{
                sum+= n;
            });
        }
        return sum;
    }

    // Passing an array , this is no overloading
    getSumArr(p){
        let sum = 0;
        if(p.length > 0) {
            p.forEach((n,i)=>{
                sum+= n;
            });
        }
        return sum;
    }
}

let o1 = new LikeOverloading();

console.log(`0 Parameters = ${o1.addUsingArgumentsCheck()}`);
console.log(`1 Parameter = ${o1.addUsingArgumentsCheck(3)}`);
console.log(`2 Parameters = ${o1.addUsingArgumentsCheck(3,4)}`);

console.log(`Sum 2 Parameters ${o1.getSum(2,3)}`);
console.log(`Sum 3 Parameters ${o1.getSum(2,3,4)}`);
console.log(`Sum 4 Parameters ${o1.getSum(2,3,4,5)}`);
console.log(`Sum 5 Parameters ${o1.getSum(2,3,4,5,6)}`);
console.log(`Sum 6 Parameters ${o1.getSum(2,3,4,5,6,7)}`);


console.log(`Sum 2 Parameters ${o1.getSumArr([2,3])}`);
console.log(`Sum 3 Parameters ${o1.getSumArr([2,3,4])}`);
console.log(`Sum 4 Parameters ${o1.getSumArr([2,3,4,5])}`);
console.log(`Sum 5 Parameters ${o1.getSumArr([2,3,4,5,6])}`);
console.log(`Sum 6 Parameters ${o1.getSumArr([2,3,4,5,6,7])}`);

