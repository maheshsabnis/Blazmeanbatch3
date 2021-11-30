import {useState} from 'react';
const AddDepartmentComponent=()=>{

    const [dept, setDept]  = useState({deptno:0,deptname:'', location:'',capacity:0});

    const clear=()=>{
        setDept({deptno:0,deptname:'', location:'',capacity:0});
    }
    const save=()=>{
      
    }

    return (
        <div className="container">
            <h1>Create New Department</h1>
            
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

export default AddDepartmentComponent;