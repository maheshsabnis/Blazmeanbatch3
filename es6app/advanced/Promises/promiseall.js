function getDataOne(){
    console.log('In Method');
     
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
        ajax.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        // start sending the request
        ajax.send();
    });  
} 

function getDataTwo(){
    console.log('In Method');
     
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
        ajax.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        // start sending the request
        ajax.send();
    });  
} 


function multiplePromises(){
    let promises = Promise.all([getDataOne(), getDataTwo()]);
    return promises;
}


async function getDataFromPromises(){
    let res1 = await getDataOne();
    console.log(`First Promise ${res1}`);
    let res2 = await getDataTwo();
    console.log(`Second Promise ${res2}`);

    return [res1,res2];
} 