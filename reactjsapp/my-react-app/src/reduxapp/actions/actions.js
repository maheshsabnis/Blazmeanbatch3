const addDepartment=(department)=>{
    // some logic here
    department.deptname = department.deptname.toUpperCase(); 
    return {
        type: 'ADD_DEPARTMENT', // output action dispatched
        department  // the payload
    };
};