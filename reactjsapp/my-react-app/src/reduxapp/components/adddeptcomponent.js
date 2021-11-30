import {useState} from 'react';
const AddDepartmentComponent=(props)=>{

    const [dept, setDept]  = useState({deptno:0,deptname:'', location:'',capacity:0});

    const clear=()=>{
        setDept({deptno:0,deptname:'', location:'',capacity:0});
    }
    const save=()=>{
        // on the 'Save'  button click, the 'save()' function will be called
        // the 'dept' object will be passed to 'AddDepartment()' function received 
        // from parent using 'props' 
      props.AddDepartment(dept);
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