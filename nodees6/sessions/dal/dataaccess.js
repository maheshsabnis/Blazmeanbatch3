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
import users from "./../models/users.js";

// lets define an instance of sequelize and pass the database connection meta data to it
const sequelize = new Sequelize("business", "maheshadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

class AuthLogic {
  constructor() {
    department.init(sequelize, DataTypes);
    users.init(sequelize, DataTypes);
  }

  async createUser(req, resp) {
    // read body
    const user = req.body;
    await sequelize.sync({ force: false });
    // check if user already exist
    // search a record based on criteria
    const findUser = await users.findOne({
      where: { username: user.username },
    });
    if (findUser !== null) {
      return resp
        .status(409)
        .send({ message: `User ${user.username} is already present` });
    }
    // register a new user
    const userCreated = await users.create({
      username: user.username,
      password: user.password,
    });
    return resp
      .status(201)
      .send({ message: `User ${user.username} is registered successfully` });
  }
  async authUser(req, resp) {
    // read body
    const user = req.body;
    await sequelize.sync({ force: false });
    // check if user already exist
    // search a record based on criteria
    const findUser = await users.findOne({
      where: { username: user.username },
    });
    if (findUser === null) {
      return resp
        .status(404)
        .send({ message: `User ${user.username} is not found` });
    }
    // match the password
    if (findUser.password.trim() !== user.password.trim()) {
      return resp
        .status(401)
        .send({ message: `User ${user.username} password does not match` });
    }
    // set the session for the request
    // the session information can be set using the 'req.session' property
    // this property can be used because of session middleware added in express
    // inform the server that the login has takes place based on the User Based Logic
    // this will generate a session id and will be stored in MemoryStore
    req.session.loggedin = true;
    // configure the session identity to user
    req.session.name = user.username;
    // send the response to the client with session information
    return resp
      .status(200)
      .send({
        message: `User ${user.username} is authenticated successfully`,
        id: req.sessionID,
      });
  }
  async getData(req, resp) {
      console.log(`The Current Login User ${req.session.name}`);
      // please make sure that the session name is not empty
      if(req.session.name === undefined) {
        return resp
        .status(401)
        .send({ message: `You are not authorized to access this data` });
      }
      // respond the data
      await sequelize.sync({ force: false });
      const dept = await department.findAll();
      return resp
      .status(200)
      .send({ message: `Data Read Successfully`, records:dept });
  }
  async logoff(req,resp){
    console.log(`The Current Login User ${req.session.name}`);
    // destroy the session
    req.session.destroy();
    return resp
    .status(200)
    .send({ message: `You are successfully logged out` });
  }
}

export default AuthLogic;
