import {useState, useEffect} from 'react';
import DepartmentHttpService from '../services/departmentservice';
const EditDepartmentComponent=(props)=>{
    const [dept, setDept]  = useState({deptno:0,deptname:'', location:'',capacity:0});
    const [message,setMessage] = useState('');
    const serv = new DepartmentHttpService();
    
    const clear=()=>{
        setDept({deptno:0,deptname:'', location:'',capacity:0});
    }
    // load the department to be edited
    useEffect(()=>{
        // read the id from the Route Parameters
        let deptno = parseInt(props.match.params.id);    
        serv.getDataById(deptno).then((response)=>{
            // update the state 'dept' based on received response
            setDept(response.data.data);
        }).catch((err)=>{
            setMessage(`Error Occurred while fetching data`);
        });
    },[]);

    const save=()=>{
        serv.putData(dept.deptno, dept).then((response)=>{
            setMessage(`${response.data.message}`);
            props.history.push("/");
        }).catch((error)=>{
            setMessage(`Some Error Occurred while Put`);
        });
    }
    return (
        <div className="container">
            <h1>Edit Department</h1>
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

export default EditDepartmentComponent;