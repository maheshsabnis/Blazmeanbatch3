// 1. Load the fs module
const fs = require("fs");
// 2. Load  path module
const path = require("path");
// using synchronous read
// Parameter is the File Path
// the file path will be resolved from the path from where the application is running (application path)
// the application path may not found the file path and will throw exception
// use the 'path' module (an another standard module) to specify the Application path

// path.join() will create an application path upto the myfile.txt and process the file
const filePath = path.join(__dirname, './../files/myfile.txt');
console.log(filePath);

let data = fs.readFileSync(filePath);
console.log(`Data = ${data}`);

// using Asynchronous File Read
// parameter 1: The File Path
// parameter 2: The Encoding for read the data from file (ascii, utf-8, utf-16,ect)
// parameter 3: The Callback function that will be executed when the read operation is over
// callback parameters, 'error', the error occurred while reading file, contents, are contents from file 
fs.readFile(filePath, {encoding:'ascii'}, (error, contents)=>{
    if(error) {
        console.log(`Error in reading file ${error.message}`);
        return;
    }
    console.log(`File Contents are 
            ${contents}`);
});


// ..... some other operations

for (let index = 0; index <5; index++) {
  console.log(index);
}

