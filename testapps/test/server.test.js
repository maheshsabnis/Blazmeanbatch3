import test from 'chai';
import request from 'request';

// the assertion object that will be used to compare the expected result withe actual 

let expect = test.expect; 

import instance from '../server.js';

// The test data
let data = [
    {id:1,name:'A'},
    {id:2,name:'B'}
];

describe('REST APT Test',()=>{
    // done() is a callback notification, that will be subscribe to Async promise
    // either Resolve or Reject it
    it('the HTTP call MUST return the response status code as 200',(done)=>{
        // the callback function will evaluate the status of HTTP Execution and 
        // receive th response from HTTP Call
        // error: The communication Error that occurres
        // response: The response header that contains the status code
        // body: The response body   
        request('http://localhost:9080/api/message', (error, response,body)=>{
            expect(response.statusCode).to.equal(200);
            done(); // call is completed
        });
    });


     
    it('the HTTP call MUST return the response text in body as "Hello World" ',(done)=>{
        let expected = "Hello World";
        request('http://localhost:9080/api/message', (error, response,body)=>{
            expect(body).to.equal(expected);
            done(); 
        });
    });

    // Test case for receiving all records
    it('the HTTP call MUST return the response data ',(done)=>{
      
        request('http://localhost:9080/api/data', (error, response,body)=>{
            expect(body).to.equal(JSON.stringify(data));
            done(); 
        });
    });

     // Test case for receiving all records
     it('the HTTP call MUST return the response status code as 500 when the id is 0 ',(done)=>{
        let expected = 500;
        let id = 0;
        request(`http://localhost:9080/api/data/${id}`, (error, response,body)=>{
            expect(response.statusCode).to.equal(expected);
            done(); 
        });
    });

    // Test case for the POST
    it('should return a 3 records when a new record is posted',(done)=>{
        let postedData = {id:3, name:'C'};
        let expectedCount  =3;

        request.post('http://localhost:9080/api/dataPost', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postedData)
        },(error,response,body)=>{
             expect(JSON.parse(body).length).to.equal(expectedCount);
             done();   
        });
        
    });
});