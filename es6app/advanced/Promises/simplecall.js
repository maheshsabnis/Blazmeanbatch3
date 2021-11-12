// simple asynchronous operations
function getData(){
    console.log('In Method');
    let products = [];

    let ajax = new XMLHttpRequest();
    // subscribe to the event handlers

    ajax.onload = function(){
        products = ajax.response;
        console.log(`The Received Response = ${products}`);
    };

    ajax.onerror = function(error){
        console.log(`Error Occured ${e}`);
    };

    // open a request for REST API, start an async calls
    ajax.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    // start sending the request
    ajax.send();
     
    console.log('Exiting the function and returning data');
    // return from function
    return products;
} 