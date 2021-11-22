import express from "express";
import cors from 'cors';
import AuthLogic from "./dal/dataaccess.js";

 

const instance = express();


instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// add CORS middleware
instance.use(cors({
  origin: '*', 
  methods: '*',
  allowedHeaders: '*' 
}));

 


 

const port = process.env.PORT || 7015;
const dal = new AuthLogic(); 

instance.post("/api/auth/register",dal.createUser);
instance.post("/api/auth/authuser",dal.authUser);
instance.get("/api/auth/departments", dal.getData);
 



instance.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
  });
  