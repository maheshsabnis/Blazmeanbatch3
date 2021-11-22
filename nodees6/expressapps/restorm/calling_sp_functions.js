// importing Sequelize class
import { Sequelize } from "sequelize";
// import the 'pkg' i.e. other exported type from 'sequelize' e.g. import DataTyps
import pkg from "sequelize";
// define an import for DataType
// We must need DataTypes because when we will be creating Model class instance e.g. department
// we need to map it to database table so that CRUD operations can be performed
const { DataTypes } = pkg;

 

// lets define an instance of sequelize and pass the database connection meta data to it
const sequelize = new Sequelize("business", "maheshadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

async function callProcedure(){
    // Stored Proc Call
    // let result = await sequelize.query("CALL sp_insertdepartment(2203, 'Dept-2203', 'Hyderabad', 450)");
    // return result;

    // function call
let result = await sequelize.query("select * from get_employeesview(10)");
    return result;

}

callProcedure().then((res)=>{
    console.log(`Result from Procedure = ${JSON.stringify(res[0])}`);
}).catch((error)=>{
    console.log(`Error from Procedure = ${error}`);
});

