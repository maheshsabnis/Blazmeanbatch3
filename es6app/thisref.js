class MyClass {
    self = this;
    constructor(){
        this.x = 10;
    }

    async print(req,resp){
        console.log(this.x);
        return await new Promise((resolve,reject)=>{
            resolve(this.x);
            
        });
        
    }
}

let o1  =new MyClass();
o1.print().then((r)=>{
    console.log(r);
});