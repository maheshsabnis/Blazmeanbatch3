const http = require('http');

const employees = [
    {EmpNo:101,EmpName:'Mahesh', DeptName:'IT', Salary:11000},
    {EmpNo:102,EmpName:'Tejas', DeptName:'HR', Salary:12000},
    {EmpNo:103,EmpName:'Leena', DeptName:'IT', Salary:13000},
    {EmpNo:104,EmpName:'Neeta', DeptName:'HR', Salary:14000},
    {EmpNo:105,EmpName:'Vandana', DeptName:'IT', Salary:15000}
];

const server =  http.createServer((req,resp)=>{
    // check the header parameter if is either undefined or 0 the return all records else
    // query the data based on header parameter value and return the data

    let id = parseInt(req.headers.id);

    if(id === undefined || id === 0) {
        resp.writeHead(200, {'Content-Type': 'application/json'});
        resp.write(JSON.stringify(employees));
        resp.end();
    }else {
        let emps = employees.filter((e,i)=> {return e.EmpNo === id});
        resp.writeHead(200, {'Content-Type': 'application/json'});
        resp.write(JSON.stringify(emps));
        resp.end();
    }

});

// listen
server.listen(7011);
console.log('Started on port 7011');
