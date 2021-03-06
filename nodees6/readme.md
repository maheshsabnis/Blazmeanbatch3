# Node.js ES 6
- Modify the package.jso to support type as module

``` javascript
{
  "name": "nodees6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module" /* Provide Support for ES 6*/
}

```

- What is Module in ES 6?
    - It is an Exportable type from one JS file that can be imported by other JS file
    - The Exporting File will be Exporting Module
    - The Importing File will be Importing Module 
- To Export A type e.g. Class, Function, Array, Constant use follwoing
  - export default class MyClass {.......} OR
      - Create a class
        - class MyClass {....} 
      - and export it
        - export default MyClass;    
  - export function myfunc(){.....}
  - export const array = [];      
- IMP***
  - Make sure that the type is imported from full-FileName with extension
    - e.g. if type is exported from file1.js
    - Then import it as 
      - import Whatever-the-type from './file1.js';
- IMP***
  - The standard global variable '__dirname' is not accessible to ES 6 in Node.js
  - SOLUTION***
    - use the 'fileURLToPath' object from the 'url' module of Nods.js
      - The 'url' module will be used to detect the file paths from its relative URL and will provide its access using the absolute file Path (e.g. '.\..\..\')
      - To read the Current Server Path of Node.js use the following standard object 
        - import.meta.url
          - This object will detect the Server-Path and return it as URL
- IMP**
  - If the export is defined as
    - export default [TYPE], means the type is preloaded and cached
    - Then import it as 
      - import [TYPE] from 'Source-File';
  - If the export is defined as
    - export [TYPE], typed has to be loaded ands then cached
      - Then import it as 
        - import {[TYPE]} from 'Source-file';                 

# Using Express.js
- Web Application Framework
  - install following packages
    - express: Web App Framework
    - cors: Cross-Origin-Resource-Sharing
    - express-session: Session Management
  - npm install --save express cors express-session  
- Express Concepts
  - Express Instance
    - Used to Access Methods of Express
    - Methods
      - listen: Start listening on port specified by the application
      - get()/ post()/ put() / delete() 
        - Method for HTTP Request Endpoints
          - The First parameter of these HTTP Methods is the request URL
          - For the post() and put(), to read the data from the Http request Body, add a JSON middleware in express pipeline
            - express.json() (NOTE: Earlier versions of Express <=3.x were using 'body-parser' package) 
              - A Middleware that will inform the express pipeline that, the JSON data from posted body MUST be read and processed
                - Used in case of POST and PUT request
            - express.urlencoded({extended:false})
              - If the data is received from Headers and URL parameters, then read the header also
                - Used in case of PUT request 
        - Each method accepts second parameter as HttpRequestHandler OR RequestHandler with request and response object
          - request
            - .params.id
                - used for URL Parameters
            - .headers.XXXXX
                - use to read header values
                  - e.g. authorization, version, etc.
            - .body
                - used to read the body and read data from the request body
                  - used in case of the POST and PUT
          - response
            - send(), send response object
            - status(), send HTTP Status code
            - json(), send JSON data
            - sendFile(), send the file
      - use()
        - Used to Add or Configure various Middlewares in HTTP request Processing of Express Application
          - session, cors, MessageFormat, SecurityTokens, etc.            
      - express.static()
        - a method that is used to configure 'static resources e.g.JS Files and CSS Files' in the express Middleware       
    - Property Object
      - express.Router()
        - Used to build the Route Table for Building Single Page Apps or REST APIs
          - Route Methods
            - get(), post(), put(), delete()
          - When the request is received the requested URL will be matched first based on the HTTP request method (get/post/put/delete) and if match found the response will be generated  
- While building the Web Server, always use the 'Node.js' environment object to configure the port with Environment variable.                              
  - Use 
    - process.env.PORT to set the Environment variable
          - OR
    - Create a '.env' file and define Key=Value pairs for Environment variables         
- Make sure that for the Production, the express REST APIs MUST be configured with CORS policies
  - Use 'cors' package
    - npm install --save cors
  - Add the Package in Express Middleware pipeline
    - instance.use(cors()); 
      - IMP***
        - The CORS MUST be configured with following
          - origin: The request origin from where the API Host have received the request and allowed by the API Host 
              - default value is '*', means all origins are allowed 
          - methods: What HTTP request methods are allowed by the API Host
              - default value is '*', means all method  are allowed 
          - allowedHeaders: What are Http header parameters / values allowed by the API Host
              - default value is '*', means all headers are allowed 

- Express REST API Designing Principals 
  - How to Write Data in Persistable Storage e.g. Database
    - Object relational Mapping (ORM) for Data Operations
      - Best Approach for Database Operations
        - Database First Approach
          - Database is Ready for Production
        - Code-First Approach
          - Generate Database from Code
        - Use Existing Stored Procedures or Execute Queries
      - The Sequelize Package for ORM, the production-ready package     
        - The Sequelize is 'Promise-Based-ORM' for Node.js  
      - sequelize: Base Package for using ORM in Node.js apps 
        - Object that is used to manage Database Connection and Transactions
          - Sequelize Class
            - Used to Connect to Database
            - Synchronize with Database so create table if not exist or connect to table to read data from it
              - Methods: All methods are Asynchronous 
                - sync({force:bool});
                  - sync(): method is having 'force:true', then the table will be ovewritten, if 'force:false', the table will be used if exist
                - query()
                  - Used to execute Stored Procedures and Raw queries (i.e. Select, Insert, Update, Delete)
                - transaction()
                  - To Handle DB Transactions  
                  - Managed Transactions
                    -  Recommended because all REad/Write Statements are strictly monitored inside the transaction object
                    - The database cannot process any Query Request that is outside of transaction when the transaction object is live (or active) and sending queriers to database
                      - sequelize.transaction(async(tx)=>{
                        .......... execute all statements inside the the scope of 'tx'
                      });   
                    - Commit and RollBack are Automatic     
                  - UnManaged Transaction
                    - The Transaction object is explicitly bound with each Read/Write Statement
                      - let tx = sequelize.transaction();
                        - Pass the ex object to each Read/Write Statement  
                    - We can decide to which statements tx need to be used and monitored     
                    - The Commit and RollBack MUST be handled explicitly
                      - tx.commit();
                      - tx.rollback(); 
          - Model
            - Base class for JavaScript Model classes those are generated from Tables and mapped with these tables
            - Async Methods
                - findAll(): To Read All Records
                - findOne({where:{condition}}), Read single record based on condition
                - create({Model-Object}), Create a new record
                - update({Model-Object}, {where:{condition}}), update record by searching it based on condition
                - destroy({where:{condition}}), delete record based on condition
          - DataTypes
            - Represents ES 6 DataTypes those are mapped with Database Data Types
              - STRING, NUMBER, DATE, etc.
              - All these types are used by Model class        

      - sequelize-auto: Package to generate JavaScript Models from Database 
              - Database-First Approach
      - sequelize-cli: The package used to generate database from JavaScript Models
              - Code-First Approach
      - mysql2: Package to access MySQL database in Node.js
          - Provide an access of MySQL to Node.js app based on Connection Metadata
      - pg and pg-hstore: Package to ise PostgreSQL in Node.js app
          - Provide an access of Postgres using the Connection Metadata
              - HostName
              - Database Name
              - UserName
              - Password
              - Port
      - install sequelize Dependencies
        - npm install -g sequelize sequelize-cli sequelize-auto pg pg-hstore
        - npm install --save sequelize sequelize-cli sequelize-auto pg pg-hstore

      - Command to generate model classes from Database tables aka Database-First

 sequelize-auto -h localhost -d business -u maheshadmin -x P@ssw0rd_ -p 5433 --dialect postgres -o models -t department employee users -l esm      
     
      - -h: The Host Name or Server name where Database Instance is running
      - -d: The database name
      - -u: User Name for accessing database
      - -x: The Password
      - -p: Port from which database is accessible
            - MSSQL: 1433, mySQL: 3306, Postgres: 5432
            - The Port  can be customized while installation, so here this case , the postgres is using 5433 instead of 5432
      - --dialect: The Database provider
              - mysql:  For MySQL
              - pg:     For Postgres
              - mssql:  For MS Sql Server
              - mariadb:  For MariaDB
              - sqlite: For Sqlite
      - -o: The Output folder where JavaScript Model class files will be created e.g. 'models'
      - -t: The blank-space separated list of tables based on which JavaScript Model classes will be created
            - IMP***: Always use lowercase for tables name
      - l esm: The support for ES 6, (if this is not use, the JavaScript functions will be created)

      - The Models are generated by deriving the model class from Sequelize  'Model' base class1
      - The DataTypes are used to map the JS (ES 6) DataTypes with Database DataTypes

      - The Model Relations Managed by the Sequelize

- if using mysql
  - npm install -g mysql2
  - npm install --save mysql2

  -  sequelize-auto -h localhost -d business -u maheshadmin -x P@ssw0rd_ -p 3306 --dialect mysql -o models -t department employee users -l esm      
     
``` javascript
// importing the 'sequelize' object that represents the ORM Engine for Db Table Mapping
import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
// importing the department model exported class
import _department from  "./department.js";
// importing the employee model exported class
import _employee from  "./employee.js";
// importing the users model exported class
import _users from  "./users.js";

// all Model classes will be initialized so that the Node.js app can use them
export default function initModels(sequelize) {
  // the init() method call is passed with sequelize engine object and Datatypes 
  // to make sure that the these models are mapped with tables from database
  // connected using 'sequelize' object  
  const department = _department.init(sequelize, DataTypes);
  const employee = _employee.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
 // the 'belongsTo()' is a method that represents one-to-one relationship based on
 // reference key aka foreign key
  employee.belongsTo(department, { as: "deptno_department", foreignKey: "deptno"});
  // the 'hasMnay()' method, represents one-to-many relationship based on foreign key
  department.hasMany(employee, { as: "employees", foreignKey: "deptno"});

  return {
    department,
    employee,
    users,
  };
}

```



    - Use Database Connection Packages for Data Operations
      - node-sql, mssql, etc 
  - P-E-N
    - Postgres-Express-Node
    - P-E-H-J-N
      - HTML and JavaScript


  - How the Security is Managed for API w.r.t. clients
    - Basic Authentication (Basic Auth)
      - Read Headers values for Authentication and Verify the User to Provide API Access
      - Let the Express App use the User Name and Password verified by accessing the database
        - Note: Password can be Stored with encryption using Advanced Encryption Standard (AES) Support  
          - Use 'crypto' package or 'bcrypt'

    - Session State to Control API Access
      - Using the express-session for Session Management  
        - This is a Middleware that is added into the express pipeline to provide the session support for web app
        - This is an industry-standard practice for building an application using Express 
        - The Session MUST be linked with User Login
          - Consider using the Basic Auth with User Name and Password
    - The User's Passwords can be Encrypted  using 'bcrypt' and 'crypto' algorithm
      - crypto is a standard algorithm
        - Uses various algorithms for encryption      
    - Use Json Web Token (Recommended)      
      - The Industry Standard mechanism to control an access of REST APIs from the client
      - Following 3 Sections of JWT
        - Header
          - This contains an Algorithm to generate the token
        - Payload
          - This contains the User's Identity and Claim Information which will be verified by the server while validating the token
            - Identity: The UserName or User Id send to the client through the token
            - Claim: Authorization for containing the Access Rights of teh User
              - E.g. RoleName
        - Signature
          - The Integrity Verification of the User
    - Methods of 'jsonwebtoken'
      - sign(Payload, secret Key, Token Settings)
        - Used to Authenticate the user and generate the token      
          - Payload: Identity and Claim Information
          - secret key: The Signature
          - Token Settings
            - Expiry
              - Make sure that the expiry is not un-necessarily kept for long duration
              - Ideally 20-mins is best 
            - Algorithm
      - verify(token, secret key, decode)
        - Verify the received token      
          - token is the received token
          - secret key: The Signature 
          - decode
            - After the token verification is complete receive the payload information and used it for Authenticating the user and provide the application access 
- Node.js Promises
  - The Global object that will be used when the Node.js app is performing Multiple Async External Calls those are returning Promises
  - The Node.js app is performing several Async Operation as
    - Line 1: Write into File Async
    - Line 2: Read From File Async
    - Line 3: Read from Database Async
    - Line 4: Write to Database Async
    - Line 5: Make an External HTTP Call
  - Node.js Promise Packages
    - The 'q' package
      - A Promise based Object Model, this is used to monitor Async Operations under the defer
        - Provides the 'defer()' object
          - Create an Async Operation Manager to monitor the Async Execution and return the Promise from it so that the caller can easily subscribe to it 
    - The 'bluebird'
      - A Promise based package for Managing large scale Async Operations     
- dotenv package
  - The package for Reading Environment values from .env file       

# Advanced Node.js Programming
  - Node.js Micro-Services
  - Node.js Integration with AWS Services       
    - Using S3 Bucket
    - Using SQS
    - Using Serverless Deployment
    - Using DynamoDb