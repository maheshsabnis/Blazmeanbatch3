import {useState} from 'react';
import DataGridComponent from './../../components/reusablecomponents/datagridcomponent';
const ListDepartmentsComponent=(props)=>{
    const getRow=()=>{};
    let dataSource = [];

    for (const record of props.departments) {
        dataSource.push(record.department);    
    }

    
    return(
        <div className="container">
            <h1>List of Departments</h1>
           
            <DataGridComponent dataSource={dataSource} ></DataGridComponent>
            
        </div>
    );
};

export default ListDepartmentsComponent;