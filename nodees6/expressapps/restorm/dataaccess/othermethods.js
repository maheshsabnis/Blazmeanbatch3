import { Sequelize } from "sequelize";
import pkg from "sequelize";
const { DataTypes } = pkg;
import department from "./../models/department.js";
const sequelize = new Sequelize("business", "maheshadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

async function executeQuery(){
    let depts = await sequelize.query("Select * from department");
    return depts;
}

executeQuery().then((rowSet) => {
    console.log(`Result of Query ${JSON.stringify(rowSet)}`);
}).catch((err) => {
    console.log(`Error Occured ${err}`);
});

async function insertDepartment(){
    let record = await sequelize.query("CALL sp_InsertDepartment(600, 'dept-600', 'Pune', 2300)");
    return record;
}

// insertDepartment().then((rowSet) => {
//     console.log(`Result of Insert Stored Procedure ${JSON.stringify(rowSet)}`);
// }).catch((err) => {
//     console.log(`Error Occured ${err}`);
// });

async function callFunction(){
    let result = await sequelize.query("select * from GetSumofSalarybydeptNo(20)");
    return result;
}

callFunction().then((rowSet) => {
    console.log(`Sum of Salary ${JSON.stringify(rowSet[0])}`);
}).catch((err) => {
    console.log(`Error Occured ${err}`);
});