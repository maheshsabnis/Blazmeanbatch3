import fs from "fs";
import path from 'path';
import {fileURLToPath} from 'url';

export default class FsModule {
  writeFile() {
    fs.writeFileSync("myfile.txt", "I am File");
    console.log("File Write Done");
  }
  readFile(){
     // 1. read the server path
     let __fileName = fileURLToPath(import.meta.url);
     // 2. read the file path now 
     let filePath = path.join(__fileName, './../../files/doit.txt');   
     let data = fs.readFileSync(filePath);
     return data;
  }
}
