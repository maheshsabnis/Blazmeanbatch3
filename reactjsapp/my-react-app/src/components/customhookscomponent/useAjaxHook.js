import {useState, useEffect} from 'react';

import axios from 'axios';

// the Custom Hook is passed with the URL as input parameter
// this custom hook makes an AJAX call using useEffect(), and 
// if call is successful the state will be set with data else with error  
export const useAjax=(url)=>{
    const [state, updateState] = useState([]);

    useEffect(() => {
        axios.get(url).then((response)=>{
            updateState(response.data);
        }).catch((error)=>{
            updateState([...state, error.message]);
        });
    },[]);
    // the state will be returned immediately the customHook is loaded by the
    // component, once the custom hook updates the state
    // the component using this custom hook will be provided with data
    return state;
};
