// create  reducer functions (PURE JS Function) that will accept 'state' and 'action' as input
// parameters and return state by updating the store

// Two Syntaxes toi create reducers
// 1. create functions for separate actions
    // if creating multiple functions then we need 'combineReducers()' to combining all functions
    // in single object 
    // one reducer can be invoked by other reducer function (as on when required)
// 2. create a single function with switch-case  


import {combineReducers} from 'redux';

// action, the action (either action dispatched from View OR output action dispatched by action-creator)

export const addDepartmentReducer=(state,action)=>{
    console.log(`Monitoring reducer is "addDepartmentReducer" with initial state ${JSON.stringify(state)} `);
    switch(action.type) {   
        case 'ADD_DEPARTMENT':
               return {
                   department: action.department // payload received from output action
                                                 // see action.js                
               }; 
        default:
            return state;  // return the default state            
    }
};

export const listDepartmentsReducer=(state=[], action)=>{
    console.log(`Monitoring reducer is "listDepartmentsReducer" with initial state ${JSON.stringify(state)} `);
    switch(action.type) {   
        case 'ADD_DEPARTMENT':
                // call other reducer function and received the state from it
                // this state will be mutated in existing state object
               return [...state, addDepartmentReducer(undefined, action)]; 
        default:
            return state;  // return the default state            
    } 
};

// create a combine reducer by aggregating the reducer functions 
// listDepartmentsReducer: the reducer that will update the store with latest state
// listDepartmentsReducer, reducer will also be used for querying to read current or latest data
// from store  
const reducres = combineReducers({listDepartmentsReducer});

export default reducres;