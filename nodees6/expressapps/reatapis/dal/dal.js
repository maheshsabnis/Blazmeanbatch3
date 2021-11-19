let employees = [
  { EmpNo: 101, EmpName: "Mahesh", DeptName: "IT", Salary: 11000 },
  { EmpNo: 102, EmpName: "Tejas", DeptName: "HR", Salary: 12000 },
  { EmpNo: 103, EmpName: "Leena", DeptName: "IT", Salary: 13000 },
  { EmpNo: 104, EmpName: "Neeta", DeptName: "HR", Salary: 14000 },
  { EmpNo: 105, EmpName: "Vandana", DeptName: "IT", Salary: 15000 },
];

export default class DataAccess {
  constructor() {}

  getData(req, resp) {
    return resp.status(200).send({
      message: "Data reading is successful",
      records: employees,
    });
  }
  getDataById(req, resp) {
    // read the URL parameter
    let id = parseInt(req.params.id);
    if (id === 0) {
      return resp.status(500).send({
        message:
          "Based on Parameter we cannot Process your request, please check data",
      });
    } else {
      let emp = employees.find((e, i) => {
        return e.EmpNo === id;
      });
      return resp.status(200).send({
        message: "Data reading is successful",
        record: JSON.stringify(emp),
      });
    }
  }
  postData(req, resp) {
    let emp = req.body;
    console.log(`Received Data for post is = ${JSON.stringify(emp)}`);
    employees.push(emp);
    return resp
      .status(200)
      .send({
        message: "Data reading is successful",
        record: employees,
      });
  }
  putData(req, resp) {}
  deleteData(req, resp) {}
}
