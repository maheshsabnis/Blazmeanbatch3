import express from "express";
import cors from 'cors';
import AuthLogic from "./dal/dataaccess.js";

import session from './session-exporter.mjs';

const instance = express();


instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// add CORS middleware
instance.use(cors({
  origin: '*', 
  methods: '*',
  allowedHeaders: '*' 
}));

 


// add the session middleware in instance aka express pipeline
// session secret is used to encrypt the session information
// instead of using he hard-coded secret key, you can use crypto package   
instance.use(
    
    session({
      secret: "aaaaaaaaaaa",
      resave: false,
      saveUninitialized:true,
      cookie:{
        maxAge:3600000, // 1 hr
        httpOnly: true,// Prevent the XSS because the Cookie is not accessible to client App and hence prevent
        secure: true//  any possible session hijacking
      }
    })
);

const port = process.env.PORT || 7014;
const dal = new AuthLogic(); 

instance.post("/api/auth/register",dal.createUser);
instance.post("/api/auth/authuser",dal.authUser);
instance.get("/api/auth/departments", dal.getData);
instance.post("/api/auth/logoff",dal.logoff);



instance.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
  });
  