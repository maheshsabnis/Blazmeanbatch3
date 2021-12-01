import {useState} from 'react';
import {connect} from 'react-redux';
import {getDepartments} from './../actions/actions';

import DataGridComponent from './../../components/reusablecomponents/datagridcomponent';
const ListDepartmentsComponent=(props)=>{
    const getRow=()=>{};
    

    const getDataFromService=()=>{
        props.getData();
    };
    
    return(
        <div className="container">
            <h1>List of Departments</h1>
            <input type="button" value="Get Data" className="btn btn-danger"
             onClick={getDataFromService}/>
            <br/>
            {props.message}
            <br/>
            <DataGridComponent dataSource={props.departments} ></DataGridComponent>
            
        </div>
    );
};
// dispatch an action from View
const mapDispatchToProps={
    // props: action method
    getData: getDepartments
};

// subscribe to the store to get the data
// and use it in component
const mapStateToProps=state=>({
    departments: state.departments,
    message: state.message
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDepartmentsComponent);

// export default ListDepartmentsComponent;