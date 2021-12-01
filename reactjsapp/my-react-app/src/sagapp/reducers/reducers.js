// a Single Reducer Function
const reducers = (state = [], action) => {
  switch (action.type) {
    case "GET_DEPARTMENTS":
      return { ...state, message: "The Get departments Request is Initiated" };
    case "GET_DEPARTMENTS_SUCCESS":
      return {
        ...state,
        departments: action.departments,
        message: action.message,
      };
    case "GET_DEPARTMENTS_FAILED":
      return { ...state, departments: [], message: action.message };
    case "ADD_DEPARTMENT":
      return { ...state, message: "The Save department Request is Initiated" };
    case "ADD_DEPARTMENT_SUCCESS":
      return {
        ...state,
        department: action.department,
        message: action.message,
      };
    case "ADD_DEPARTMENT_FAILED":
      return { ...state, department: {}, message: action.message };
    default:
      return state;
  }
};

export default reducers;
