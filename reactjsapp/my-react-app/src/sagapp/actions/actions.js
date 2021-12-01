// The action-creator, a method that will be dispatched from the view
// All these are INIT_INPUT_ACTIONS
export const getDepartments=()=>{
    return {
        type: 'GET_DEPARTMENTS'
    };
};

export const addDepartment=(department)=>{
    return {
        type: 'ADD_DEPARTMENT', 
        department  // the payload the data to be posted
    };
};
