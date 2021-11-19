import express from "express";
import cors from 'cors';
import DataAccess from './dal/dal.js';

const instance = express();
// define an instance of DataAccess class
let dal = new DataAccess();

// configure the express pipeline by using JSON and utrlencoded middlewares

instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// add CORS middleware
instance.use(cors({
  origin: '*', 
  methods: '*',
  allowedHeaders: '*' 
}));

const port = process.env.PORT || 7012;


// Lets add REST API Methods using HTTP methods of 'instance'
// Second parameter is callback that will passed with RequestListener (req,resp) objects
instance.get("/api/employees", dal.getData);
instance.get("/api/employees/:id", dal.getDataById);
instance.post("/api/employees",dal.postData);
instance.put("/api/employees/:id",dal.putData);
instance.delete("/api/employees/:id",dal.deleteData);

instance.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
