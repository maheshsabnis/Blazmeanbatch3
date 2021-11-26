import axios from 'axios';


export default class SecureService {
    constructor(){
        this.url = 'http://localhost:7015';
    }

   
    createUser(user){
        let response = axios.post(`${this.url}/api/auth/register`, user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    loginUser(user){
        let response = axios.post(`${this.url}/api/auth/authuser`, user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    getdepartments(token){
        let response = axios.get(`${this.url}/api/auth/departments`, {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        return response;
    }
     
}