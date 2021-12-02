import express from "express";

const instance = express();
 
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 7021;

let employees = [
  { EmpNo: 101, EmpName: "Mahesh", DeptName: "IT", Salary: 11000 },
  { EmpNo: 102, EmpName: "Tejas", DeptName: "HR", Salary: 12000 },
  { EmpNo: 103, EmpName: "Leena", DeptName: "IT", Salary: 13000 },
  { EmpNo: 104, EmpName: "Neeta", DeptName: "HR", Salary: 14000 },
  { EmpNo: 105, EmpName: "Vandana", DeptName: "IT", Salary: 15000 },
];

// Lets add REST API Methods using HTTP methods of 'instance'

instance.get("/api/employees", (req, resp) => {
  resp.status(200).send({
    message: "Data reading is successful",
    records: JSON.stringify(employees),
  });
});
instance.get("/api/employees/:id", (req, resp) => {
  // read the URL parameter
  let id = parseInt(req.params.id);
  if (id === 0) {
    resp
      .status(500)
      .send({
        message:
          "Based on Parameter we cannot Process your request, please check data",
      });
  } else {
    let emp = employees.find((e, i) => {
      return e.EmpNo === id;
    });
    resp
      .status(200)
      .send({
        message: "Data reading is successful",
        record: JSON.stringify(emp),
      });
  }
});
instance.post("/api/employees", (req, resp) => {
  // read data from body
  let emp = req.body;
  console.log(`Received Data for post is = ${JSON.stringify(emp)}`);
  employees.push(emp);
  resp
    .status(200)
    .send({
      message: "Data reading is successful",
      record: employees,
    });
});
 
instance.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
