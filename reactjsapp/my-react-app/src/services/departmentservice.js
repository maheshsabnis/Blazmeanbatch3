import axios from 'axios';


export default class DepartmentHttpService {
    constructor(){
        this.url = 'http://localhost:7013';
    }

    getData(){
        let response = axios.get(`${this.url}/api/departments`);
        return response;
    }
    postData(dept){
        let response = axios.post(`${this.url}/api/departments`, dept, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    putData(id,dept){
        let response = axios.put(`${this.url}/api/departments/${id}`, dept, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    deleteData(id){
        let response = axios.delete(`${this.url}/api/departments/${id}`);
        return response;
    }
}