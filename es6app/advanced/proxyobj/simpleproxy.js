class MyTarget {
    message = 'I am message from Target Object';
    data = 1000;
}


// define a handler
const handler = {};

const obj = new MyTarget();
// define a proxy
const proxyObject = new Proxy(obj,handler); 

function consumer1() {
     // use the proxy to define an access
     let pxyData = proxyObject.data; 
     let pxyMessage = proxyObject.message;
     console.log('====================================');
     console.log(`Data = ${pxyData}`);
     console.log(`Data = ${pxyMessage}`);
     console.log('====================================');  
}

consumer1();