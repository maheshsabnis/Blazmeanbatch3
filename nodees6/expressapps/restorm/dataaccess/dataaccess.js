// importing Sequelize class
import { Sequelize } from "sequelize";
// import the 'pkg' i.e. other exported type from 'sequelize' e.g. import DataTyps
import pkg from "sequelize";
// define an import for DataType
// We must need DataTypes because when we will be creating Model class instance e.g. department
// we need to map it to database table so that CRUD operations can be performed
const { DataTypes } = pkg;

// importing the department model
import department from "./../models/department.js";

// lets define an instance of sequelize and pass the database connection meta data to it
const sequelize = new Sequelize("business", "maheshadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

// just make sure that the connection is established with database server
sequelize.authenticate().then(
  (authenticate) => {
    console.log("====================================");
    console.log("Are Connection Ho gaya tusi fikir mat kar");
    console.log("====================================");
  },
  (error) => {
    console.log("Oye, pappe error ho gaya");
  }
);

// class used to connect to Db and perform CRUD operations
// since Sequelize is Promise Based ORM, all calls will be async calls
// so each method of the class with be 'async' method and making 'await' calls
class DataAccess {
  constructor() {
    // lets initialize the department model using its static 'init()' method
    // and pass 'sequelize' instance and 'DataTypes' so that mapping with database table
    // will be. In this case the table is 'department'
    // Parameter 1: will be used to connect to Database
    // Parameter 2; will be used to map DataTypes
    department.init(sequelize, DataTypes);
  }

  async getData(req, resp) {
    // 1. establish the connection
    await sequelize.sync({ force:false });
    // 2. read all records
    let records = await department.findAll();
    // 3. send response
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is received successfully", data: records });
    }
    return resp.status(500).send({ message: "Some error Occurred" });
  }

  async postData(req, resp) {
    // 1. establish the connection
    await sequelize.sync({ force:false });
    let dept = await department.create(req.body);
    if (dept) {
      return resp
        .status(200)
        .send({ message: "Data is added successfully", data: dept });
    }
    return resp
      .status(500)
      .send({ message: "Some error Occurred while adding record" });
  }
  async putData(req, resp) {
    // 1. establish the connection
    await sequelize.sync({ force:false });
    // 2. update each column based on data received from body
    // update() method uses the where condition to search record and update
    let dept = await department.update(
      {
        deptno: req.body.deptno,
        deptname: req.body.deptname,
        location: req.body.location,
        capacity: req.body.capacity,
      },
      {
        where: {
          deptno: parseInt(req.params.id),
        }
      }
    );
    if (dept) {
      return resp
        .status(200)
        .send({ message: "Data is updated successfully", data: dept });
    }
    return resp
      .status(500)
      .send({ message: "Some error Occurred while updating record" });
  }
  async deleteData(req, resp) {
    // 1. establish the connection
    await sequelize.sync({force:false });
    // 2. update each column based on data received from body
    // update() method uses the where condition to search record and update
    let dept = await department.destroy({
      where: {
        deptno: parseInt(req.params.id),
      }
    });
    if (dept) {
      return resp
        .status(200)
        .send({ message: "Data is deleted successfully", data: dept });
    }
    return resp
      .status(500)
      .send({ message: "Some error Occurred while deleting record" });
  }
}

export default DataAccess;
