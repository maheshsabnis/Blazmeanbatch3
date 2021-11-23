 
import http from 'http';
import q from 'q';


class DataAccess {
    getData(options){
        // start monitoring
        let defer = q.defer();
        let request;
        let departments;  
        if(!options) {
            // reject an execution
            defer.reject('The Server Information is missing');
        } else {
            // start performing async operation(s)
            // parameters to request()
            // 1. Server Information e.g. host name, port number, method , headers, data (POST/PUT)
            // 2. The Callback function, this will be that will start receiving the response  
            request = http.request(options,(result)=>{
                // result is a 'stream' of object that will be used to start receiving data
                result.on('data', (data)=>{
                    departments = data;
                });

                // Once the data receive is completed Process the data
                // and end the operations
                result.on('end',()=>{
                   try {
                       // if success while processing the data then resolve
                       defer.resolve(departments);
                   }catch(ex){
                       // if error while processing the data then reject
                       defer.reject(`Some Error Occurred while processing data ${ex.message}`);
                   }     
                });
            });
            
        }
        // End the request, this means that whether or not async operation is done successfully or with error, come back to caller
        request.end();    
        // Let the defer collect the state of execution in the promise and return back to the 
        // caller
        return defer.promise;
    }
}


export default DataAccess;

