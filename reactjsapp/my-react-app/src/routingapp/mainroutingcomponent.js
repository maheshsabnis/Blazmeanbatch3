import {Link, Route, Switch,Redirect} from 'react-router-dom';
import CreateDepartmentComponent from './createdepartmentcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';
const MainRouterComponent=()=>{
    return(
        <div className="container">
            <h1>The Single Page App  using react-router-dom</h1>
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            {/* Query to Route under Routes */}
                            <Link
                             to="/">
                              List Department
                            </Link>
                            
                        </td>
                        <td>
                        <Link to="/create">Create Department</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Define a route table */}
            <Switch>
                <Route exact path="/"  component={ListDepartmentsComponent}></Route>
                <Route exact path="/create" component={CreateDepartmentComponent}></Route>
                {/* Routing for the Edit based on the parameter */}
                <Route exact path="/edit/:id" component={EditDepartmentComponent}></Route>
                <Redirect to="/"></Redirect>
            </Switch>    
        </div>
    );
};

export default MainRouterComponent;