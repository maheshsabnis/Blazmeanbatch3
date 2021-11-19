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


    - Use Database Connection Packages for Data Operations
      - node-sql, mssql, etc 

  - How the Security is Managed for API w.r.t. clients
    - Basic Authentication
      - Read Headers values for Authentication and Verify the User to Provide API Access
    - Session State to Control API Access
    - Use Json Web Token (Recommended)             