import express from "express";
import cors from 'cors';
import DataAccess from './dataaccess/dataaccess.js';

const instance = express();


instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// add CORS middleware
instance.use(cors({
  origin: '*', 
  methods: '*',
  allowedHeaders: '*' 
}));
const port = process.env.PORT || 7013;
const dal = new DataAccess(); 

instance.get("/api/departments", dal.getData);
instance.get("/api/departments/:id", dal.getDataById);
instance.post("/api/departments",dal.postData);
instance.put("/api/departments/:id",dal.putData);
instance.delete("/api/departments/:id",dal.deleteData);


instance.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
  });
  