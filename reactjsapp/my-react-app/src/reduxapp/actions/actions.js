// The action-creator, a method that will be dispatched from the view
const addDepartment=(department)=>{
    console.log(`The Action diapatch request is received with data = ${JSON.stringify(department)}`);
    // some logic here
    department.deptname = department.deptname.toUpperCase(); 
    department.location = department.location.toUpperCase();
    // The output action and a payload, that will be listened by the reducer
    return {
        type: 'ADD_DEPARTMENT', // output action dispatched
        department  // the payload
    };
};

export default addDepartment;