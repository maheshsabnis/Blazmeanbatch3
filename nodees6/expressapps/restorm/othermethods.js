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

// Write an async method that will be used to execute a query on database
async function getDepartmentUsingSelectStatement(){
    let depts = await sequelize.query("SELECT * from department");
    return depts;
} 


// lets call the function
// recordset will return ar array of arrays where 0th index is rows and 
// first index is metadata for each column from the table  
getDepartmentUsingSelectStatement().then((recordSet)=>{
    console.log(`Received Data = ${JSON.stringify(recordSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred = ${error}`);
});



// Write an async method that will be used to execute a query on database
async function insertDepartmentUsingInsertStatement(){
    let depts = await sequelize.query("Insert into department (deptno,deptname,location,capacity) values (400, 'Dept-400', 'Pune', 6776)");
    return depts;
} 

// lets call the function
// recordset will return ar array of arrays where 0th index is rows and 
// first index is metadata for each column from the table  
insertDepartmentUsingInsertStatement().then((recordSet)=>{
    console.log(`Received Data = ${JSON.stringify(recordSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred = ${error}`);
});

// lets call the function
// recordset will return ar array of arrays where 0th index is rows and 
// first index is metadata for each column from the table  
getDepartmentUsingSelectStatement().then((recordSet)=>{
    console.log(`Received Data = ${JSON.stringify(recordSet[0])}`);
}).catch((error)=>{
    console.log(`Error Occurred = ${error}`);
});
