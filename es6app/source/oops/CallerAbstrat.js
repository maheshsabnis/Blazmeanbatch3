class HttpCalls {
    constructor(){
        if(new.target === HttpCalls) {
            throw new TypeError('Sorry! Abstract class cannot be instantiated');
        }
    }

    get(url, ideneity){}
    post(url, ideneity, object){}
    put(url, identity, id,object){}
    delete(url,identity, id){}
}

class CategoryServCall extends HttpCalls {
    
}

class ProductServCall extends HttpCalls {
    
}


class DataAccess {
    constructor(){
        if(new.target === DataAccess) {
            throw new TypeError('Sorry! Abstract class cannot be instantiated');
        }
    }

    create(connstring, data, table){}
    update(connstring, data, table){}
    delete(connstring, data, table){}
}

class CategoryTable extends DataAccess {}