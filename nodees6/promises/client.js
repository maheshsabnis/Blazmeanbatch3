import DataAccess from "./dataaccess.js";

 
let obj = new DataAccess();

const serverOptions = {  
    host: 'localhost',
    port: 7013,
    path: '/api/departments',
    method: 'GET'
};

obj.getData(serverOptions).then((response)=>{
    console.log('====================================');
    console.log(`Received response ${response}`);
    console.log('====================================');
}).catch((error)=>{
    console.log('====================================');
    console.log(`Error Occured ${error}`);
    console.log('====================================');
});