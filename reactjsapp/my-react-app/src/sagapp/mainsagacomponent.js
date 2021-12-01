 
import AddDepartmentComponent from "./components/adddeptcomponent";
import ListDepartmentsComponent from "./components/listdeptscomponent";
// import an action-creator that will be dispatched
import addDepartment from './actions/actions';
const MainSagaComponent=()=>{
   
    return (
        <div className="container">
            <h1>The Main React-Redux-SAGA Component</h1>
           
            <AddDepartmentComponent></AddDepartmentComponent>
            <br />
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};  

export default MainSagaComponent;