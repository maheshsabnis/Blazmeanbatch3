// 1. Load the fs module
const fs = require("fs");
// 2. Load  path module
const path = require("path");

// 3. set a file path to be created
let filePath = path.join(__dirname, './../files/newfile.txt');
// SYnchronous write
fs.writeFileSync(filePath, 'I am new data1111');

// create a new file
filePath = path.join(__dirname, './../files/newfile1.txt');

fs.open(filePath, 'w', (err,file)=>{
    if(err) {
        console.log(`Error ${err.message}`);
        return;
    }
    console.log(`The File is created ${file}`);
});


// Lets append data in file
fs.appendFile(filePath, 'The New Data in File', (err)=>{
    if(err) {
        console.log(`Error ${err.message}`);
        return;
    }
    console.log(`The File is Appended`);
});

// Overwrite the file using writeFile()

fs.writeFile(filePath, 'I am the new data added asynchronously', (err)=>{
    if(err) {
        console.log(`Error ${err.message}`);
        return;
    }
    console.log(`The File is Overriten`);
});

fs.unlink(filePath,()=>{
    console.log('Deleted');
});