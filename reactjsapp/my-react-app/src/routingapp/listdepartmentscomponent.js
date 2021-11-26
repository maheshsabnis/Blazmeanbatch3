import {useEffect, useState} from 'react';
import DataGridComponent from './../components/reusablecomponents/datagridcomponent';
import DepartmentHttpService from '../services/departmentservice';

const ListDepartmentsComponent=(props)=>{
    const [departments, setDepartments] = useState([]); 
    const [message,setMessage] = useState('');
    const serv = new DepartmentHttpService();
    useEffect(()=>{
        serv.getData().then((response)=>{
           setDepartments(response.data.data); 
        }).catch((error)=>{
            setMessage( `Some Error Occured while reading Departments Data`);
        });
    },[]);

    const getRow=(row)=>{
        // navigate to the EditComponent
        props.history.push(`/edit/${row.deptno}`);
    };
    return(
        <div className="container">
            <h1>List of Departments</h1>
            <div className="container">
                <strong>
                    {message}
                </strong>
            </div>
            <DataGridComponent dataSource={departments}
             getSelectedRow={getRow}></DataGridComponent>
        </div>
    );
};

export default ListDepartmentsComponent;