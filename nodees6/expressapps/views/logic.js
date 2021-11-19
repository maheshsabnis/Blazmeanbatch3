// simple asynchronous operations
function getData(){
    console.log('In Method');
     
    return new Promise((resolve,reject)=>{
        let ajax = new XMLHttpRequest();
    
        ajax.onload = function(){
            // success
            resolve(ajax.response); 
        };
    
        ajax.onerror = function(error){
          // failure  
          reject(error);
        };
    
        // open a request for REST API, start an async calls
        ajax.open("GET", "http://localhost:7012/api/employees");
        // start sending the request
        ajax.send();
    });  
} 

 

// The post method 
function postData(emp){
    return new Promise((resolve,reject)=>{
        let ajax = new XMLHttpRequest();
    
        ajax.onload = function(){
            // success
            resolve(ajax.response); 
        };
    
        ajax.onerror = function(error){
          // failure  
          reject(e);
        };
    
        // open a request for REST API, start an async calls
        ajax.open("POST","http://localhost:7012/api/employees");
        // set the header Media Type Format aka (MIME Type)
        // this format will be used by REST API to Process the received data
        ajax.setRequestHeader("Content-Type", "application/json");
        // start sending the request. The body MUST be always in JSON String Format
        ajax.send(JSON.stringify(emp));
    });  
}

// id: the ProductRowId, based on which the Data will be searched
// product: The modified data (ProductRowId cannot be modified)
// Note: ProductId is unique 
function putData(id,product){
    // the id will go in header
    ajax.open("PUT", `http://localhost:7012/api/employees/${id}`);
}

function deleteData(id){
    // the id will go in header
    ajax.open("DELETE", `http://localhost:7012/api/employees/${id}`);
}