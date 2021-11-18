const fs = require('fs');
const path = require('path');
const http = require('http');

// set the serverPath, map with views folder to read HTML Files
const serverPath = path.join(__dirname, './../views');

const server = http.createServer((req,resp)=>{
    // read file
    fs.readFile(`${serverPath}/home.html`, {encoding:'ascii'}, (error,file)=>{
        if(error){
            resp.writeHead(404, {'Content-Type': 'text/html'});
            resp.write(`File Not Found ${error.message}`);
            resp.end();
        }
        resp.writeHead(404, {'Content-Type': 'text/html'});
        // the response will be HTML Stream from the home.html
        resp.write(file);
        resp.end();
    });    
});

// listen
server.listen(7011);
console.log('Started on port 7011');
