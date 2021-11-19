// 1. import express and other module
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

// 1a. define a Port using Environment

const port = process.env.PORT || 7011;

// 2. defining an instance
const instance = express();

// 3.  Define a server specification for building Express Web Server
// for accepting requests for HTMl Pages to respond them using JS files
// and CSS files

 // 3a. read the server path
let __dirName = fileURLToPath(import.meta.url);

// 3b. Let's configure the 'views' and node_modules folder into the static path middleware of
// express instance

instance.use(
    express.static(path.join(__dirName, './../../../node_modules/bootstrap/dist/css'))
); 

instance.use(
    express.static(path.join(__dirName, './../../../node_modules/jquery/dist'))
); 
 

instance.use(
    express.static(path.join(__dirName, './../../views'))
); 
 
// 3c. Define a router object for routing for the views
let router = express.Router();

// 3d. add the router in express middleware so that
// the HTTP request will detect and analyze the request URL to process request
// using Route
instance.use(router); 

// 3e. define Http request methods
router.get('/', (req,resp)=>{
    // response the index.html file
    resp.sendFile('index.html', {
        root: path.join(__dirName, './../../views')
    });
});

router.get('/home', (req,resp)=>{
    // response the home.html file
    resp.sendFile('home.html', {
        root: path.join(__dirName, './../../views')
    });
});

router.get('/about', (req,resp)=>{
    // response the index.html file
    resp.sendFile('about.html', {
        root: path.join(__dirName, './../../views')
    });
});

router.get('/contact', (req,resp)=>{
    // response the index.html file
    resp.sendFile('contact.html', {
        root: path.join(__dirName, './../../views')
    });
});

// 4. Start Listening on port
instance.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
});