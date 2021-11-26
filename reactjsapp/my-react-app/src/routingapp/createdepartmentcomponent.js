import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import DepartmentHttpService from '../services/departmentservice';
const CreateDepartmentComponent=(props)=>{
    const [dept, setDept]  = useState({deptno:0,deptname:'', location:'',capacity:0});
    const [message,setMessage] = useState('');
    const serv = new DepartmentHttpService();
    
    const clear=()=>{
        setDept({deptno:0,deptname:'', location:'',capacity:0});
    }
    const save=()=>{
        serv.postData(dept).then((response)=>{
            setMessage(`${response.data.message}`);
            // navigate to the ListDepartmentsComponent the '/' path
            // the push("/") will match the route URL with Route 
            // table and once found it will route to the component
           props.history.push("/");
          
        }).catch((error)=>{
            setMessage(`Some Error Occurred while Post`);
        });
    }
    return (
        <div className="container">
            <h1>Create New Department</h1>
            <div className="container">
                <strong>
                    {message}
                </strong>
            </div>
            <div className="form-group">
                <label>Dept No</label>
                <input type="text" className="form-control"
                 value={dept.deptno} onChange={(evt)=> setDept({...dept, deptno:parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                <label>Dept Name</label>
                <input type="text" className="form-control"
                value={dept.deptname} onChange={(evt)=> setDept({...dept, deptname:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control"
                value={dept.location} onChange={(evt)=> setDept({...dept, location:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Capacity </label>
                <input type="text" className="form-control"
                value={dept.capacity} onChange={(evt)=> setDept({...dept, capacity:parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
        </div>
    );
};

export default CreateDepartmentComponent;