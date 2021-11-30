import DataGridComponent from './../../components/reusablecomponents/datagridcomponent';
const ListDepartmentsComponent=(props)=>{
    const getRow=()=>{};
    return(
        <div className="container">
            <h1>List of Departments</h1>
            <DataGridComponent dataSource={props.departments}
             getSelectedRow={getRow}></DataGridComponent>
        </div>
    );
};

export default ListDepartmentsComponent;