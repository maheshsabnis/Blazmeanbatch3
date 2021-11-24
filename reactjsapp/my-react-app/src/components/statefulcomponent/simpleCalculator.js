import {useState} from 'react';
const SimpleCalculator=()=>{
    // x is state property and setX is an action to update state property based on event
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [res, setRes] = useState(0);

    const [depts, setdept] = useState(['IT', 'HR', 'TR', 'SL', 'AC']);
    const [selDept, setSelectedDept] = useState('');
    const [employees, setEmps] = useState([
        {EmpNo:101,EmpName:'A'},
        {EmpNo:102,EmpName:'B'},
        {EmpNo:103,EmpName:'C'}
    ]);
    const [selEmp,setSelEmp]=useState({EmpNo:0,EmpName:''});

    const add=()=>{
        setRes(x+y);
    };
    const subst=()=>{
        setRes(x-y);
    };

    const mult=()=>{
        setRes(x*y);
    };
    const div=()=>{
        setRes(x/y);
    };



    return(
        <div className="container">
            <div className="form-group">
                <label>X</label>
                {/*  onChange={(evt)=>{setX(parseInt(evt.target.value))}}
                  The syntax to update the state based on value entered into the text element*/}
                <input type="text" className="form-control"
                  value={x}
                   onChange={(evt)=>{setX(parseInt(evt.target.value))}}/>
            </div>
            <div className="form-group">
                <label>Y</label>
                <input type="text" className="form-control"
                 value={y}
                 onChange={(evt)=>{setY(parseInt(evt.target.value))}}/>
            </div>
            <div className="form-group">
                <label>Result</label>
                <input type="text" className="form-control"
                 value={res} readOnly/>
            </div>
            <div className="btn-group-lg">
                <input type="button" value="Add" className="btn btn-primary"
                 onClick={add}/>
                <input type="button" value="Subst" className="btn btn-success"
                onClick={subst}/>
                <input type="button" value="Mult" className="btn btn-warning"
                onClick={mult}/>
                <input type="button" value="Div" className="btn btn-danger"
                onClick={div}/>
            </div>
            <br/>
            <div className="container">
                <label>List of Departments</label>
                <select className="form-group" value={selDept}
                  onChange={(evt)=>{setSelectedDept(evt.target.value)}}>
                    {
                        depts.map((d,idx)=>(
                            <option key={idx} value={d}>{d}</option>
                        ))
                    }
                </select>
                <br />
                <strong>
                    Selected Department is = {selDept}
                </strong>
            </div>
            <br/>
            <h6>Dynamic Table</h6>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>EmpNo</th>
                        <th>EmpName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp,idx)=>(
                            <tr key={idx} onClick={()=>{setSelEmp(emp)}}>
                                <td>{emp.EmpNo}</td>
                                <td>{emp.EmpName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br/>
            <strong>
                The Selected Employee {JSON.stringify(selEmp)}
            </strong>
        </div>
    );
};

export default SimpleCalculator;