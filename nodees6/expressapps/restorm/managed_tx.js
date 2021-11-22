// importing Sequelize class
import { Sequelize } from "sequelize";
// import the 'pkg' i.e. other exported type from 'sequelize' e.g. import DataTyps
import pkg from "sequelize";
// define an import for DataType
// We must need DataTypes because when we will be creating Model class instance e.g. department
// we need to map it to database table so that CRUD operations can be performed
const { DataTypes } = pkg;

// importing the department model
import department from "./models/department.js";
import employee from "./models/employee.js";

// lets define an instance of sequelize and pass the database connection meta data to it
const sequelize = new Sequelize("business", "maheshadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

department.init(sequelize,DataTypes);
employee.init(sequelize,DataTypes);



async function managedTransaction() {
  try {
      let tx = sequelize.transaction(async(t)=>{
        // t is the transaction scope to monitor all transaction
        let dept = await department.create({
            deptno:702, deptname:'dept-702', location: 'Pune', capacity:800
        }, {transaction:t}); // inform the DB that the current operation is under transaction

        let emp = await employee.create({
            empno:901, empname:'emp-901', designation: 'Manager', salary:7887, deptno:10
        }, {transaction:t}); // inform the DB that the current operation is under transaction

      });
  } catch (ex) {
      console.log(`Error Occured ${ex.message}`);
  }
}

managedTransaction().then((res)=>{
    console.log(`Managed Transaction are done ${res}`);
}).catch((err)=>{
    console.log(`Error in Managed Transaction ${err}`);
});