class MyClass {
    add(x,y) {
        return parseInt(x) + parseInt(y);
    }
    concat(s1,s2){
        if(s1.length ===0 || s2.length === 0 ){
            throw new Error('String Length Cannot be 0');
        }

        return s1 + s2;
    }
}

let obj = new MyClass();
console.log(`Add  = ${obj.add(2,3)}`);
console.log(`Concat = ${obj.concat('Mahesh', 'Sabnis')}`);
// console.log(`With Error ${obj.concat('','Man')}`);
// like export default
export default MyClass;