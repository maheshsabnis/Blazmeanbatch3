import FsModule from './modules/fsmodule.js';

let obj = new FsModule();

obj.writeFile();
console.log(`Data from File = ${obj.readFile()}`);