// 1. Load the fs module
const fs = require("fs");
// 2. Load  path module
const path = require("path");

// 3. Create  directory path
const dirPath = path.join(__dirname, './../newdir');

// Create a directory
fs.mkdir(dirPath, (err)=>{
    if(err) {
        console.log(`Error Occured ${err.message}`);
        return;
    }
    console.log('Directory is created successfully');
});

// read directory

fs.readdir(dirPath,(err,contents)=>{
    if(err){
        console.log(`Error Occured  in reading ${err.message}`);
        return;
    }
    // iterate over contents, where each content is object (file or directory)
    // check if the current content is file or directory
    // use fs.stat() function to check if content is file and then take action
    // accordingly
    // isFile(), means content in file, isDirectory(), means content is directory

    contents.forEach((content,index)=>{
        fs.stat(`${dirPath}/${content}`, (error,stat)=>{
            if(error){
                console.log(`Error Occured  while reading ${error.message}`);
                return;
            }

            if(stat.isFile()) {
                // show file name
                console.log(`File Name = ${content}`);
                // read contents from file
                console.log(`Contents in ${content} is 
                              ${fs.readFileSync(`${dirPath}/${content}`)} `);
            }
        });
    });

    
});