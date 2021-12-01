import {useState} from 'react';
import {connect} from 'react-redux';
import {addDepartment} from './../actions/actions';
const AddDepartmentComponent=(props)=>{

    const [dept, setDept]  = useState({deptno:0,deptname:'', location:'',capacity:0});

    const clear=()=>{
        setDept({deptno:0,deptname:'', location:'',capacity:0});
    }
    const save=()=>{
        props.saveDepartment(dept);
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

// using the Connect Method to Connect the View with the Store for data as well as  dispatching
// actions

const mapDispatchToProps = {
    // props:       action creator
    saveDepartment: addDepartment
};

const mapStateToProps=state=>({
    message: state.message
});


// connect() will map the Component with store and using the mapDispatchToProps
// the props will be passed with the Component
export default connect(mapStateToProps, mapDispatchToProps)(AddDepartmentComponent);


// export default AddDepartmentComponent;