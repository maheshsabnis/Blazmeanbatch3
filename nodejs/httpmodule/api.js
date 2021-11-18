const http = require("http");

let employees = [
  { EmpNo: 101, EmpName: "Mahesh", DeptName: "IT", Salary: 11000 },
  { EmpNo: 102, EmpName: "Tejas", DeptName: "HR", Salary: 12000 },
  { EmpNo: 103, EmpName: "Leena", DeptName: "IT", Salary: 13000 },
  { EmpNo: 104, EmpName: "Neeta", DeptName: "HR", Salary: 14000 },
  { EmpNo: 105, EmpName: "Vandana", DeptName: "IT", Salary: 15000 },
];

// lets design an API that will perform following operations
// 1. detect HTTP methods like get,post,put and delete
// and based on that will perform READ/WRITE operations
// 2. if the request is POST / PUT then write / update operations will takes place respectively
// 3. for 'DELETE' request the record will be deleted

const server = http.createServer((req, resp) => {
  // check the header parameter if is either undefined or 0 the return all records else
  // query the data based on header parameter value and return the data

  let id = parseInt(req.headers.id);
  // detect the GET request
  if (req.method === "GET") {
    if (id === undefined || id === 0) {
      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.write(JSON.stringify(employees));
      resp.end();
    } else {
      let emps = employees.filter((e, i) => {
        return e.EmpNo === id;
      });
      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.write(JSON.stringify(emps));
      resp.end();
    }
  }

  // detect the POST request
  if (req.method === "POST") {
       // read data from request using 'request.on('data')' 
       // The 'chunk' is the data that is received
       let receivedData;
       req.on('data',(chunk)=>{
           // parsing data in JSON form
         receivedData = JSON.parse(chunk);
       });
       // once the data read is complete start processing it
       req.on('end', ()=>{
           employees.push(receivedData);
           // send response back
           resp.writeHead(200, { "Content-Type": "application/json" });
           resp.write(JSON.stringify(employees));
           resp.end();
       });
  }

  // detect the PUT request
  if (req.method === "PUT") {
  }

  // detect the DELETE request
  if (req.method === "DELETE") {
  }
});

// listen
server.listen(7011);
console.log("Started on port 7011");
