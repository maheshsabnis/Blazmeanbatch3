import { Sequelize } from "sequelize";
import pkg from "sequelize";
// import JWT
import jsonwebtoken from "jsonwebtoken";

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

// define a secret key (You may use the crypto)
const jwtSettings = {
  jwtSecret: "msit007700itms",
};

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

    // authorize the user and generate the token
    // PayLoad: {user}, can also contains any other identity information (except Password, or any other secret info)
    // You can pass RoleName, UserName (This will be used by client-App to work with Role-Based-Security)
    const token = jsonwebtoken.sign({ user }, jwtSettings.jwtSecret, {
      expiresIn: 3600, // 1 hr
      algorithm: "HS384",
    });

    // respond the client with the token
    return resp.status(200).send({
      message: `User ${user.username} is authenticated successfully`,
      token: token,
    });
  }
  async getData(req, resp) {
    // logic to verify the token and if verified provide the data access
    // check if the authorization header is present in HTTP Request
    if (req.headers.authorization !== undefined) {
      // read the token from the header
      // AUTHORIZATION : 'Bearer [TOKEN-VALUE]'
      const receivedToken = req.headers.authorization.split(" ")[1]; // [1] means read the [TOKEN-VALUE]
      console.log('====================================');
      console.log(`Received Token ${receivedToken}`);
      console.log('====================================');
      // verify and decode the token
      await jsonwebtoken.verify(
        receivedToken,
        jwtSettings.jwtSecret,
        async (error, decode) => {
          if (error) {
            return resp.status(401).send({
              message: `User Authentication Failed because token verification filed`,
            });
          }

          // decode the token, the decode is the property of Express request object
          // that will read the decoded (identity) information from the received token
          req.decode = decode;
          // the decode can access the payload information
          console.log(`Decoded value ${JSON.stringify(decode)}`);
          // respond the data
          await sequelize.sync({ force: false });
          const dept = await department.findAll();
          return resp
            .status(200)
            .send({ message: `Data Read Successfully`, records: dept });
        }
      );
    } else {
      // authorization header is not present then send unauthorize response
      return resp.status(401).send({
        message: `User Authentication Failed because no Authorization Header is present in request`,
      });
    }
  }
}

export default AuthLogic;
