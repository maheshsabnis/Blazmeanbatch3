import {useState, useEffect} from 'react';
import DepartmentHttpService from '../../services/departmentservice';

import DataGridComponent from './../reusablecomponents/datagridcomponent';
const DepartmentComponent=()=>{
    const [departments, setDepts]  = useState([]);
    const [message,setMessage] = useState('');

    // define an instance of the DepartmentHttpService class
    const serv = new DepartmentHttpService();

    useEffect(()=>{
        // the 'result' is an AxiosResponse object
        // this object has the 'data' property, that
        // contains response from Ajax Call 
        // Note: result.data means the response received from the API call
        // result.data.data means the 'data' property from received message from API Call
        serv.getData().then((result)=>{
             setDepts(result.data.data);   
        }).catch((error)=>{
            setMessage(error);
        });
    }, []); // --> The dependency parameter 


    const save=()=>{
        const dept={
            deptno:100,
            deptname:'Dept-100',
            location: 'Hyderabad',
            capacity:678
        };
        serv.postData(dept).then((result)=>{
            setMessage(JSON.stringify(result.data));
        }).catch((error)=>{
            setMessage(error);
        });
    };
    const update=()=>{
        const dept={
            deptno:100,
            deptname:'Dept-100',
            location: 'Hyderabad-East',
            capacity:678
        };
        serv.putData(dept.deptno, dept).then((result)=>{
            setMessage(JSON.stringify(result.data));
        }).catch((error)=>{
            setMessage(error);
        });
    };
    const deleteRecord=()=>{
        serv.deleteData(100).then((result)=>{
            setMessage(JSON.stringify(result.data));
        }).catch((error)=>{
            setMessage(error);
        });
    };
    const getresponse=()=>{
        serv.getData().then((result)=>{
            setDepts(result.data.data);   
       }).catch((error)=>{
           setMessage(error);
       });
    };




    return (
        <div className="container">
            <h1>Demo useEffect</h1>
            <div className="btn-group-lg">
                 <input type="button" value="Get Data" className="btn btn-primary"
                 onClick={getresponse}/>  
                 <input type="button" value="Post Data" className="btn btn-success"
                 onClick={save}/>  
                 <input type="button" value="Put Data" className="btn btn-warning"
                 onClick={update}/>  
                 <input type="button" value="Delete Data" className="btn btn-danger"
                 onClick={deleteRecord}/>   
            </div>
            <br/>
            <div className="container">
                <strong>
                    {message}
                </strong>
            </div>
            <hr />
            <DataGridComponent dataSource={departments}></DataGridComponent>
        </div>
    );
};

export default DepartmentComponent;