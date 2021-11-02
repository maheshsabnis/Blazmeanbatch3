var MyObject = function(){
    // private function
    function privateValidator(x,y){
         if (x <= 0 || y <= 0) 
            return 0;
    }

    
    // public declarations exposed using 'this'
    // the 'this' is the scope object, so currently
    // it represents 'MyObject' so all members
    // prefixed using 'this' are exposed publically using
    // MyObject and thats whya they are accessible using
    // an instance of MyObject
    this.add = function(x,y){
        if(privateValidator(x,y) == 0) return 0;
        return x + y;
    };
    this.mult = function(x,y){
        if(privateValidator(x,y) === 0) return 0;
        return x * y;
    }
};



