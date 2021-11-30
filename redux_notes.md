# Redux Apps
1. Store
    - A State container for managing 'state' or 'data' for entire application
    - Views (Components) of the application will subscribe to the state to read (or query) the data
    - Store contains 'schema' of the data that is required by various views
    - Singleton object for an entire application
2. Action
    - A Method that will be executed based on User's interaction
    - The action may or may not have input parameters
    - The action always returns an object that contains following two properties
        - type: the output-action to be dispatched when the action method is executed (Mandatory property in return value)
        - payload: the output data generated when an action is executed. (Optional property)
    - If action is synchronous, the output object will be as follows
        - {type: 'OUTPUT_ACTION', payload: [SOME-DATA]}
    - If the action is asynchronous then the separate 'Middleware' is needed. The output will be
        - {type: 'ACTION_SUCCESSFUL', payload: [SUCCESS-DATA]}
        - OR If Action Failed
        - {type: 'ACTION_FAILED', payload: [empty], error: [ERROR-DATA]}         
3. Reducer
    - A JavaScript Pure function
    - It accepts following two parameters
        - state: Initial State
        - action: The output action
    - The Reducer update the state in 'store' based on 'payload' received from output action
    - IMP: Do not write complex logic in reducer e.g. AJAX Calls, Date Based Operations, etc.
    - The reducer is 'ALWAYS-EXECUTING' in Global Scope of the application and will continuously monitor actions 

# Using redux Technically
1. Packages
    - redux
        - npm install --save redux
        - The Redux Object Model for state Management
        - The 'store' object
            - created using 'createStore()' method
            - This method accepts following parameters
                - The 'reducer' object
                - The 'Parameter-Enhancer'
                    - The object that is composed with multiple parameters
                        - The 'compose()' method, is also available in 'redux' package
                        - This method accepts
                            - The Middleware
                                - Created using 'applyMiddleware()' method, this is also available in 'redux' package 
                            - The Redux-Dev-Tools (Simulation of Redux in Browser. Used only in Development)
        - The 'combineReducers()' method
            - This is a method that accepts multiple reducers into a single object
            - These multiple reducer functions will be used to read/write data from and to store         
            - e.g.
                - function reducer1(state,action) {..... update the store ....};
                - function reducer2(state,action) {..... update the store ....};
                - function reducer3(state,action) {..... update the store ....};
            - combineReducers({reducer1, reducer2,reducer3....});    


    - react-redux (V 4.0+)
         - npm install --save react-redux    
        - A Bridge between Redux Object Model and React Application
        - The 'Provider' object
            - A Component that is used to manage the Lifecycle of all React components inside it under the Redux Store
                - <Provider store={redux-store}>
                    <React-Component></React-Component>
                - </Provider>
                - The 'store' property of the 'Provider' will manage teh subscription of all React-Components so that these components will be notified data from 'store' 
        - The 'useDispatcher()' Hook
            - Hook that is used to dispatch an action from the View (aka React Component)        
            - let dispatch = useDispatcher();
                - dispatch(action-method(INPUT-PARAMETERS));
        - The 'useSelector()' Hook
            - Use to subscribe to the store to query to the store to read data
            - useSelector(state-query);
                - state-query is the mechanism using which data will be read from the store   

        - Older react-redux object for Action Dispatch and Selector
        - The 'connect(p1,p2)' method
            - p1, the parameter known as 'mapStateToProps'
                - The 'mapStateToProps', is an object that map the 'props' for the component from the latest 'state' from the store
                    - const mapStateToProps = state=>({props_name: state.schema});
                        - The 'props_name', is the 'props' property passed to the component
                        - The state.schema, is the data received from the 'store'
                    - The 'useSelector()' is a replacement for 'mapStateToProps'  
            - p1, the parameter known as 'mapDispatchToProps'
                - Dispatch an action from the view
                - The 'props' will contains a reference of event raised on UI
                - Dispatch, means the action that will be dispatched
                - e.g.
                    - const mapDispatchToProps = {
                        props_name:action_name
                    };                  
                    - props_name, the reference of an event raised on UI
                    - action_name, the action that will be dispatched  
        - connect (mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);
            -  COMPONENT_NAME, will be subscribed to the store for dispatching actions and reading the current or latest state from store            


