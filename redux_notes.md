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
# Redux with SAGA
1. redux-saga
    - Provides an object Model for managing an Async Calls dispatched from UI
    - Async Methods
        - redux-saga/effects module
            - all()
                - This will accept an array of all 'generator functions' those are executed based on action dispatched from UI and once they are executed, the all() will make sure that the reducer will take an action on the promise completion.  
                - The all() function will make sure that, the SAGA is running in root/global scope of React-Redux application  
            - take()
                - A Method that is used monitor an action dispatched from UI
                - This will be used to join an input action with an output action using 'generator functions'
            - takelatest()
                - Like 'take()', it also listen to the most recent action dispatched from UI
                - This uses 'generator function' to map input action to output action  
            - put()
                - Once the Promise is completed (resolved,rejected), the put() method will dispatch an output action so that 'reducer' will listen to it and update store accordingly
            - call()
                - Method used to initiate an async call to REST APIs
                - This will provide a subscription to the Promise Object
                - If there are parameter passed by UI along with the dispatched actions, the call() will read them using 'payload' object
2. Defining Actions
    - Action MUST be having following two implementation
        - INIT_INPUT_ACTION
            - These are dispatched from UI
            - These actions may have input parameters
        - SUCCESS_OUTPUT_ACTION
            - This is dispatched by the SAGA
            - There will be Success return 
        - FAILED_OUTPUT_ACTION  
             - This is dispatched by the SAGA
             - There will be Error Return
3. Define SAGA that will be used to Monitor the Input Actions with the help of Reducer and then start Asynchronous calls
    - The SAGAS will be dispatching Output actions those are mapped with input actions
    - Install SAGA
        - npm install --save saga redux-saga             




