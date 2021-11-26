import {useEffect, useReducer, Fragment} from 'react';

import axios from 'axios';


// define an initialState

const initialState ={
    loading:'', // call in progress
    error: '', // call is failed
    data: [] // call is successful
};

// define a state transition logic based on the ajax calls
// lets write a custom Hook that will take case of state transition based on ajax calls

const useReduceToUpdateStateAsync=(url)=>{

    // data, is an actual state property that will be updated
    // dispatch, the action type (a function) that will be executed to define state update
    // the state will be updated as follows

    // if action is success, store data
    // if action is in progress, set empty data
    // if action fails then add error

    // the 'reducer' function will read 'action.type' from the 'type' used by 'dispatch' 
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        // dispatch the progress action, current is started
        // type: is a stage of execution
        dispatch({type: 'DATA_FETCH_STARTED'});
        axios(url)
            .then((response)=>{
                if(response.status !== 200) {
                    throw new Error(`Error Occurred while receiving response ${response.statusText}`);
                }
                // receive the response
                return response.data;
            }) // received the response
            .then((data)=>{
                // dispatching teh success action with received data
                dispatch({type: 'DATA_FETCHED_SUCCESS', payload: data.data});
            }) // process the response
            .catch((error)=>{
                dispatch({type: 'DATA_FETCHED_FAILED', payload: error.message});
            }); // failed check
    },[]);
    // return the final data
    return data;
};



// define a reducer function, this will be used to 
// detect actions and accordingly 
// perform the state transition

// state: initial state (data from useReducer() )
// action: the action that will be dispatched (action from useReducer())
const reducer=(state, action)=>{
   switch(action.type){
     case "DATA_FETCH_STARTED":
         return {...state, loading: 'call Started', error:''};
     case "DATA_FETCHED_SUCCESS":
         return {...state, loading: 'call completed successfully', error:'', data: action.payload};
     case "DATA_FETCHED_FAILED":
          return {...state, loading: 'call completed with error', error: action.payload};       
     default:
        return state; // return an initial state as it is 
   } 
};


const UseReducerComponent=()=>{
    const state = useReduceToUpdateStateAsync("http://localhost:7013/api/departments");
    return(
        <Fragment>
            {JSON.stringify(state)}
        </Fragment>
    );
};

export default UseReducerComponent;