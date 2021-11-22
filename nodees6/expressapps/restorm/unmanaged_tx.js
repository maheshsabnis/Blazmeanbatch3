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

department.init(sequelize, DataTypes);
employee.init(sequelize, DataTypes);

async function unmanagedTransaction() {
  // define a tx object over a connection
  let tx = await sequelize.transaction();
  try {
    let dept = await department.create(
      {
        deptno: 703,
        deptname: "dept-703",
        location: "Pune",
        capacity: 800,
      },
      { transaction: tx } // inform the DB Query Engine to handle the statement under transaction 
    ); // inform the DB that the current operation is under transaction

    let emp = await employee.create(
      {
        empno: 902,
        empname: "emp-902",
        designation: "Manager",
        salary: 7887,
        deptno: 10,
      },
      { transaction: tx }
    ); // inform the DB that the current operation is under transaction

    // explicitly commit transaction
    await  tx.commit();  
  } catch (ex) {
    console.log(`Error Occurred ${ex.message}`);
    await tx.rollback(); 
  }
}

unmanagedTransaction()
  .then((res) => {
    console.log(`Managed Transaction are done ${res}`);
  })
  .catch((err) => {
    console.log(`Error in Managed Transaction ${err}`);
  });
