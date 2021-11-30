import {useDispatch, useSelector} from 'react-redux';
import AddDepartmentComponent from "./components/adddeptcomponent";
import ListDepartmentsComponent from "./components/listdeptscomponent";
// import an action-creator that will be dispatched
import addDepartment from './actions/actions';
const MainReduxComponent=()=>{
    // define a dispatch object
    let dispatch = useDispatch();
    // subscribe to the store to read the current or latest state from store
    const depts = useSelector(state=>state.listDepartmentsReducer);
    console.log(`Data from store = ${JSON.stringify(depts)}`);
    return (
        <div className="container">
            <h1>The Main React-Redux Component</h1>
            {/* When the AddDepartment() is executed by the 'AddDepartmentComponent', the 
               'department' object will be received from it. This 'department' object
               is passed as input parameter to the 'addDepartment()' action-creator
               using 'dispatch()' object 
            */}
            <AddDepartmentComponent
             AddDepartment={(department)=> dispatch(addDepartment(department))}
            ></AddDepartmentComponent>
            <br />
            {/* The 'depts' is the data received from 'store' using the 'useSelector()' subscription
               is passed to the 'ListDepartmentsComponent' using 'departments' props
            */}
            <ListDepartmentsComponent
              departments={depts}></ListDepartmentsComponent>
        </div>
    );
};  

export default MainReduxComponent;