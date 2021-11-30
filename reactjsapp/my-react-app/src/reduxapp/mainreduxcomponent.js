
import AddDepartmentComponent from "./components/adddeptcomponent";
import ListDepartmentsComponent from "./components/listdeptscomponent";

const MainReduxComponent=()=>{
    return (
        <div className="container">
            <h1>The Main React-Redux Component</h1>
            <AddDepartmentComponent></AddDepartmentComponent>
            <br />
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};  

export default MainReduxComponent;