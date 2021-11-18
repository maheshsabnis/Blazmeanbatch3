const http = require('http');
// create a server

let server = http.createServer((request, response)=>{
    // write a response headers
    response.writeHead(200, {'Content-Type': 'text/html'});
    // write a response message
    response.write('Hello HTTP Server...');
    // End response
    response.end();
});

// start listening
server.listen(7011);
console.log(`http Server starts on port 7011`);