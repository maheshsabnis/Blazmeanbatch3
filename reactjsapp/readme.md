# Web Component

    - This is a JavaScript Object that provides following benefits
        - UI Reusability
        - Easy distribution
    - technical definition  of Web Component aka Component
        - It is a JS Object that contains
            - UI
            - Data to Generate UI dynamically
            - Events to Manipulate UI
                - Events are used to accept data from End-User
                - Manipulate UI
                - Generate UI Dynamically

# React.js

- JavaScript Xml Enhancer aka JS Xml Syntax Parser
  - JSX Parser, it is a new Syntax for Compiling and Validating React Component
  - Each HTML element is JSX HTMLElement object
    - input, HtmlInputElement
    - div, HtmlDivElement
    - button, HtmlButtonElement
  - Each Element will be compiled for its properties
    - id, name, style, className (instead of class), etc. are compiled attribute properties of React JSX Element System
  - JSX makes Html elements as Case Sensitive
  - All Events of HTML elements are event-properties of JSX
    - onclick, onchange, onblur, etc.

# Creating React Application

    - Production Ready React Apps
        - The 'create-react-app' CLI
            - Read-To-Use CLI Command that creates Production-Ready React Application
            - Integrated testing Environment Configuration
            - Integrated Settings for Compile, Build, test, Run the Application
            - Support for an integration for third-party CSS and JavaScript
                - Bootstrap, jQuery, etc.
    - React Application Configuration from Scratch
        - Use 'webpack'
            - A Module Bundler for JavaScript Apps
        - Create webpack.config.js file with settings for
            - Reading the React Apps Entry File
            - Install and use Various Module Loaders
                - css-loaders
                - style-loaders
                - file-loaders
            - Install and use HTML Plugin
                - USed for Compiling the HTML file
                - Generating DOM
        - webpack.config.js Flavours
            - webpack.common.js
                - Common File for Development, testing, Build and execution
            - webpack.dev.js
                - merged with the webpack.common.js
                - Only Additional development settings
            - webpack.prod.js
                - merged with the webpack.common.js
                - Contains Production Settings

- Important Mandatory Packages for React App
  - react
    - Provides Component class
    - Provides Hooks
  - react-dom
    - Provides mechanism for compilation and rendering (DOM) generation of the React App
- Components
  - Foundation Object of React Application
  - Two Types of Components
    - Class Components
      - Class derived from the 'Component' base class
      - Class components are available from Beginning
      - React 16.0+, React Team have suggested to use 'Functional' Components rather than class components
      - The 'Component' class
        - Base class for Class Component
        - The 'state' property for defining the 'local data properties' for component
        - The 'render()' method
          - This method contains the HTML DOM (using JSX)
          - This DOM is bound with 'state' properties to Read/Write data
          - Each editable DOM element (input, select, etc.) can update the 'state' property using their events e.g. onchange
          - Button elements can update the 'state' using 'onclick' event
        - Lifecycle methods
          - 'constructor()'
            - Used to define local state properties
          - componentDidUpdate()
            - Invoked when the state property is changed
            - this will result into updating the DOM
          - componentDidMount()
            - invoked after the render() method is called
            - this method is sued to perform heavy load operations
              - e.g. AJAX calls
          - componentWillUnMount()
            - This will be called when the component is removed from DOM
    - Functional Components
      - A standard JavaScript function
      - This returns HTML DOM
      - The Functional Component uses 'Hooks' those introduced from React 16.8 (Production Version) and Hooks are used for following
        - State Management
        - Handling Long Running Execution e.g. Ajax Calls
        - Managing Event Subscription and DeSubscription
        - Memory Management
        - State Transition
  - The 'state' for the component
    - Either Data passed from Parent-Component to Child-Component or Child-to-Parent
      - This data is passed using 'props' from parent-to-child or child-to-parent
      - The 'props' is the JavaScript Object literal, that contains properties and its values those are passed across components
        - this.props = {KEY:VALUE};
          - KEY: Property name or Method
          - VALUE: The value (primitive-tye) or Function
    - OR The Locally defined properties inside the component
      - These local properties are scoped only inside the component
      - In class component, the state is define inside constructor as
        - this.state={KEY:VALUE};
      - In functional component, the state is defined using 'useState()' Hook function(?)
  - React is 'Compositional' in Nature means the UI to be rendered is composed of 'On-or-more' components
    - The 'Compositional' means, One Parent-Component can have one-or-more children components
    - Components can communicate with each other using
      - The 'props'
      - The 'context'
    - Components can be designed as
      - Specific UI Layout and functionalities
        - e.g. Customer CRUD Component
        - This component is not re-usable
        - OR we can re-use it only when Customer's operations are performed
      - Re-Usable Utility component by defining generic properties and events for input and output communication
        - e.g. DataGrid Component that accepts 'dataSource' property and generate HTMl table with data
    - Components are used as custom-html-element
      - <MyComponent></MyComponent>
- Create react app
  - npm install -g create-react-app
    - Install the React CLI
  - create-react-app <APP-NAME>
    - This will create a React project
- The package.json

```javascript
"@testing-library/jest-dom": "^5.11.4", /* JEST Integration for Testing */
    "@testing-library/react": "^11.1.0" , /* react object model testing DOM, events, etc. */
    "@testing-library/user-event": "^12.1.10", /* react object model testing for user events, e.g. onclick, onchange, etc */
    "react": "^17.0.2", /* base library */
    "react-dom": "^17.0.2", /* DOM rendering */
    "react-scripts": "4.0.3", /* Libraries used by create-react-app used for Compile, Build, test and execution*/
    "web-vitals": "^1.0.1" /* Manage the Build Optimization and  Dev. Time Hosting */

      "scripts": {
    "start": "react-scripts start",  /* Execution of React app, npm run start */
    "build": "react-scripts build", /* Build creation of React app, npm run build */
    "test": "react-scripts test", /* testing of React app, npm run test */
    "eject": "react-scripts eject" /* clean the React app, npm run eject, unload all used modules and clear the process */
  },
```
- The 'src' folder, this contains the application source code (Logic, components and test-scripts)
    - index.js
        - The Entry-Point of the Application
        - Load the Component and 'mount' (pin) and 'render' the component on Browser's DOM
            - ReactDom.render() method call
             - The Component will be mounted on the HTML element present on index.html in the public folder
        - Load all css (internal and external) so that they can be used by all components in the application
    - App.js
        - A Functional Component (provided as default by create-react-app)
    - setupTests.js
        - The Test Setup file    
- The 'public' folder, that contains all public resource those will be rendered in index.html                   

# ================================================================================================

# Programming With React.js
- Creating Components
    - Create a Separate JavaScript file for separate component
    - The component name Must be Pascal Case 
    - We can export 'only-one-component' from a JavaScript file
    - Functional Component Syntax
      - The JavaScript Function
        - export default function [FUNCTION-COMPONENT-NAME](props) {
              .... define State Properties
              .... define initialization operations e.g. Ajax Calls, Events Subscription
              .... logical functions
              .... instances of external classes 
              return (
                <HTML-DOM>
              )
        }
        - The JavaScript Constant Function Expression (Mostly-used by ES 6 developers)
          - const [FUNCTIONAL-COMPONENT-NAME]=(props)=>{
              .... define State Properties
              .... define initialization operations e.g. Ajax Calls, Events Subscription
              .... logical functions
              .... instances of external classes 
              return (
                <HTML-DOM>
              )
          }
          export default [FUNCTIONAL-COMPONENT-NAME];
        - The Constant Expression that has the HTML Placeholders
          - const [FUNCTIONAL-COMPONENT-NAME]=(props)=>(
            <HTMl-DOM>
          );  
      - The 'props' is the data received from the parent-component of the current 
      component
      - IMP****, The <HTML-DOM> can have 'only-one' container HTML element e.g. <div> or <table>     
    - State
        - Hooks
    - Parent Child Communication
        - props
        - context
    - Data Binding
        - State
          - Properties and its Values either received from Parent-to-child
            - the 'props'
              - The 'immutable' object that is always 'live' across components
              - This is read-only object
              - The value from the object is accessible using following
                - props.[PROPERTY-NAME]
          - Properties and its Values used local to component
            - Local Variable (NOT-STATE-PROPERTIES)
              - <input type="text" value={VARIABLE}>
              - To update the value of the 'local variable' of functional component 'what if we use the 'onChange' event'
                - IMP** This won't update the UI because the 'local-variable' of functional component is not 'state' object 
          - What is 'State'?
            - It is an object or value of the local component that will be used to bind with HTML elements so that these elements can show the state property value while rendering.
            - The state property value is updated based on events raised on HTML elements and its causes the HTML element to re-render if they are using the state property that is being updated.        
            - How to define a 'State' in functional component?
              - Use the 'useState()' hook
        - Events
          - These are the JSX parsed attributes those are used to bind functions defined inside the component to HTMl elements using standard JavaScript event-names
            - <input type="button" value="click me" onClick={function-name}>
              - function-name, is the name of the function defined inside the Component 
        - Controller Component
          - The component that uses the 'state' property bound with HTML elements  
          - Based on Events on HTML elements the state will be updated
        - UnControlled Component
          - The HTML elements will us State property
          - Instead of using event to update the state property, the 'ref' or 'useRef() hook' is used to read an element explicitly with the updated value
            - just line document.getElementById()      
    - AJAX Calls
        - Hooks
- Hooks
    - Standard JavaScript Functions those are having Pre-defined behavior to perform while working with React's Functional Components. All these hooks can be invoked at functional component level only. They cannot be invoked in any other child function inside the functional component. All these hooks are available from 'react' package from version 16.8         
        - useState()
            - Used to define a local state property for Component
            - Syntax: Destructuring
              - const [statePropertyName, Action-to-update-State-Property] = useState(initial-value-of-state-property);
                - statePropertyName:
                  - The property name bound with HTML Elements. Based on this the rendering of HTML will takes place
                  - The type can be primitive type (number, string, boolean, date, array) or can be object ({}) 
                    - This type will be decided based on initial-value-of-state-property
                - Action-to-update-State-Property:
                  - The method that will be used to update the state property-value from initial-value to new-value based on an 'Action-Dispatched' (aka Event) on HTML element
                - initial-value-of-state-property:
                  - The initial value of stateProperty    
              - if the state property is of the type array [], and if this array is used to dynamically generate HTML elements, e.g. <select> with <options> OR <table> with <tr>, <th>, <td>, then these dynamically generated elements must be assigned with 'key' property which is unique     
        - useContext()
            - Used to share data across components
            - Used to maintain the state of data across components 
            - Instead of props, the Context is more useful because the ParentComponent (aka SenderComponent aka Provider) have a knowledge of the ChildComponent (aka ReceiverComponent aks Consumer ) about what data properties are provided to and will be consumed by ChildComponent
              - The 'createContext()' method from 'react' package, this is used to define a context object for sharing data across components
                - e.g. 
                  - const DataContext = createContext(initialValue);
              - The 'Context' object (in our case DataContext)  has following objects
                - Provider
                    - Used by Sender Component to Pass/Provide data to ChildComponent
                      - <DataContext.Provider value={}>
                         <ChildComponent/>
                      </DataContext.Provider>
                    - The 'value' is a complex object that is state to be shared across components
                      - value = {array} OR value = {{array, callback}}, etc.
                        - array is data to be provided
                        - callback is the function callback from Received/Consumer/Child component to parent
                - Receiver / Consumer
                  - Use  'useContext()' hook to subscribe to the 'Context' object (in our case DataContext)
                    - let data = useContext(DataContext);
                      - useContext() will call <DataContext.Consumer> behind the scene          
        - useEffect()
            - Used to perform Long-Running Operations e.g. AJAX Calls
              - All ajax calls are Promise based
              - React suggests to use 'axios' library for handling external Http calls
              - The 'axios' is Promise based ES 6 library for handling external HTTP Communication
              - Installed using 
                - npm install --save axios
              - The 'axios' methods
                - get(), post(),put(),delete()
                  - These methods returns promise object 
                - axios(), constructor  
              - The is a Standard ES6 'fetch()' object is also available for HTTP calls     
         
            - useEffect() syntax
              - useEffect(()=>{initializationProcess}, return =>{cleaningProcess}, [dependency-parameter-array]);
                - initializationProcess
                  - a Logic that will be executed the when the component is loaded and rendering is done
                  - This could be AJAX call
                  - Could be any such code that will take time to execute e.g. processing large array or string asynchronously
                  - Attaching Global Windows Events to the Component e.g. MouseEvents, Keyboard Events
                - cleaningProcess (Logic that will be executed when the component is unloaded from DOM)
                  - The logic to release all heavy objects those may reduce performance of the component or may result into memory leak
                  - release the Global Windows Events
              - Like any other Hook, the useEffect() will be executed at functional Component level, and this will be continue executing with logic written in the 'initializationProcess'. The 'initializationProcess' may update the 'state' property of the component, if useEffetc() updates the state property, then the useState() dispatch action will be executed 'only-once' and receive data from useEffect(). The React Lifecycle, will be informed by useState() that the state is change once and rendering based on the updated state value will be done once.     But 'initializationProcess' will not be able to stop an execution of useEffect(). In this case the useEffect() will continue executing.   
                - To inform the useEffect() about the state update and rendering based on state update, pass the 'dependency-parameter' to the useEffect() as a second parameter. This is the parameter that will be auto-notified by React's Lifecycle for State update that has completed rendering to useEffect() that, 'Hay!! useEffect(), I am done with rendering based on state update so now you can stop'.
                - The dependency-parameter MUST be an empty array (this represents 'any' state property that is updated by 'initializationProcess' logic in useEffect())      
          
          - Used to Subscribe and Unsubscribe events  
            - Attach Global Events to Component
            - UnLoading the Component from DOM MUST make sure that all of its Events Subscriptions and any-other global references e.g. the AJAX Reference, MUST be released or unsubscribed     
                
          - Class Components Lifecycle Methods
              - First Load of class Component
                - constructor(), getInitProps(), getInitState(), render(), componentDidMount()
                     - componentDidMount()
                          - Method executed after render() and contains long-running-process e.g. Ajax
                          - Subscribe Events
                          - Execute the Complex Performance intensive logic 
              - The 'props' Change (updated valued received from parent)
                - shouldComponentUpdate(), if this is true, render(), componentDidUpdate()
                    - componentDidUpdate()
                        - Indicates that after 'props' changes, the rendering is successful
              - The 'state' change based on events
                - shouldComponentUpdate(), if this is true, render(), componentDidUpdate()
                   - componentDidUpdate()
                        - Indicates that after 'state' changes, the rendering is successful
              - Un Mounting Component
                - componentWillUnMount()    
                    - This will be executed when component is unloaded /removed from DOM
                    - Used to release events and any other subscriptions 
              - componentDidCatch()
                - Used when any child component throws an exception       
          - The 'useEffect()', is a combination of 'componentDidMount()'  and 'componentWillUnMount()'        

        - useReducer()
            - Used for State Transition
            - Manage State updated from initial-State-to-final-state 
            - The Hook similar to useState() but provides a structured way of state updates with systematic approaches 
              - PURE FUNCTION: The function that has input and output parameter as same objects
              - useReducer(reducer, initialState)
                - reducer: A JavaScript 'PURE FUNCTION', that accepts following two parameters
                  - parameter 1: state, the initial state 
                  - parameter 2: an action, based on which the state transition will takes place from initial (or old) state to new state
                    - The 'action' will be dispatched either from UI or by some condition so that the state will be updated
                    - This action will contain a custom logic that will be executed before the state is updated 
                - initialState
                  - Initial value in state object (like userState(), initial value)    
              - e.g.
                - departments is a state that is to be updated based on Ajax call
                  - if the call is in progress (means not completed yes), then set departments as 'undefined' 
                  - Check the success response, if yes, then sort the data from response (custom logic) and update the state    
                  - If the call failed then add a invalid entry in departments
                    - write custom logic for invalidation
        - useMemo()
            - use for Caching for performance improvement
        - useRef()
            - Used tgo refer HTML element for Data Read/Write operations
            - May br deprecated in future
    - We can create custom hooks 
      - Provide a custom Functionality for by creating a 'JavaScript-Function' that will act as a Custom Hook
      - Use Cases
        - Encapsulation over AJAX call and State Update
          - When we need to makes an AJAX call on Component load and update the state in the component, it is better to create a custom hook and encapsulate a logic for Ajax call and state update and use this logic across various functional components
        - Create a custom hook for validating the State against validation rules loaded dynamically
            -  function useSelfValidator(stateObject, validationRuleSource){
                -- stateObject, is  state to be validated
                --  validationRuleSource, is the custom validation rule that will be used to validate the state object
            }
      - Custom Hooks can use standard hooks in it      
          

- The Application Compilation and Execution
  - create-react-app CLI
    - This will internally use 'WebPack' module loader and bundler to perform following
      - Load the index.js
        - Read index.js for all 'imports'
        - All imported resources (.js, .css, etc.) will be loaded using 
          - file-loader (load .js and .css files)
          - style-loader and css-loader
            - Compile the .css and style files
            - All styles will be loaded in output build using JS objects for CSS     
        - All the dependencies imported in index.js will be compiled and merged into 'main.chunk.js'
        - bundle.js
          - Transpilation and merging of Standard React libraries into a single file
        - vendors~main.chunk.js the final Build of the Application loaded and executed in browser  
- Using React App for Line-of-Business (LOB) apps
  - The UI
    - Use Forms with Validations on Client-Side (Mandatory)
      - HTML 5 Validations
        - All Editable elements and form MUST have 'name' attribute
        - Best Practice recommendations
      - Custom Validations 
        - While implementing Custom Validations for Form, make sure that each element and its state property is validated separately 
    - Plan for the Component Re-usability      
      - Plan for UI of the Component
      - Data to be passed to the component
        - Input values passed to the component by its parent
        - These are 'props' properties to be passed from parent-component to child-component  
      - Data to be received from the Component
        - Values to be received from child-component by its parent based on 'event' raised in child-component 
      - In the child / reusable component make sure that each 'props' property is evaluated against 'undefined', 'null' so that the UI rendering crash is prevented, if these properties has 'undefined', 'null' values then render a fallback UI.   
    - Handling External Http Calls      
  - Lifecycle Management
    - Plan for most suitable approach for External Http calls
    - Implement Secure communication based on the offering from the Server (REST) 
      - Make sure that the identity Information received from server e.g. Token MUST be stored in SessionStorage  

- Routing
   - defining a Single-Page-App (SPA)
   - An experience to the end-user for providing 'no-post-back' or 'no-page-refresh' experience 
   - Instead of refreshing  whole DOM, the part of the DOM is refreshed (or reloaded) based on routes OR query-staring
   - SPA, is an approach to divide the UI of the application in small-chunks (components) and load then based on route based navigation or based on query-string  
   - The 'react-router-dom' package  version 6.0+
    - Creating SPA for React Apps
      - npm install --save react-router-dom
      - Object Model
        - BrowserRouter
          - Container for Routing
          - Manages navigation across components
          - Manages global props types to share data across components
        - Route Object
          - Used to define a route table
          - Properties
            - element, the component to navigate to
            - path, the URL for navigation
            - exact, the URL matcher to match the route URL and execute navigation  
        - Redirect (Removed) in V6.0+
          - Used to redirect to specific Route path
          - Property
            - 'to', accept the URL to navigate to
        - Switch (removed) by Routes in V 6.0+
          - Object used to contains the Route Table
        - Link
          - define a route link
          - The 'to' property that accepts the Route URL. This is used to query to the route table for Navigation aka routing
  - The 'next' framework by 'Vercel' for developing production-ready react apps          
- Class Components
  - Component<P,S> base class
    - P, props
    - S, state      
- Higher-Order-Component
  - A Mechanism to extend an existing component with the new features 
  - It is a design pattern
  - Factory Method, that accepts component as input parameter and return the component as output parameter
  - A PURE FUNCTION
  - The Existing COmponent's functionality can be enhanced based on new properties used by the PURE Function
    - function HoC(MyInputComponent, data){
        // write some logic
        // process data
        return (<MyInputComponent data>);
    }
- Error Handling 
  - It is a process of rendering a fallback UI when the component is throwing an exception while updating the state that causes rendering 
  - Use the Class Component for Managing the Errors to render the fallback UI so that the Component Tree will not crash.
  - Use the  'compoenntDidCatch()' method to handle the error and the 'getDerivedSateFromError(error)' static property that will listen to the error (or exception)  
    - The static property will be contineously listing to the error`  
 - The ErrorBoundaryComponent will contain various children component and will keep listening error /  exception thrown by these children
 - IMP NOTE: ****, when react app is created using 'create-react-app', there is a default 'iframe' that is used to render a default exception message for any DOM exception. To supress th iframe modify the index.css by adding a new style as 'iframe: {display:none}'   
- LazyLoading
  -  Code-Splitting
    - Dividing the code into reusable  modules
      - It is a process of creating re-usable utilities so that multiple components in the application can access it by importing
        - import {} from [FILE-NAME]
          - the compile time module loading
          - this is synchronous
          - if the module takes time to load the code that is using the module will delay the execution 
        - Instead ofg synchronous module loading use async module loading
          - import('[FILE-PATH]').then((module)=> success).error((error)=> fail);   
    - using 'lazy-loading'
      - React.lazy(()=>import([FILE-PATH]));
      - The 'Suspense' component
        - This will load the fallback UI till the module is not loaded completely

- Application State Management    
- The 'next' framework
  - Native Routing (Main default feature)
  - The Server-Side Rendering (Default)
  - Inbuilt Support for CSS and Styles
  - The ease of REST API calls to update the UI (no useEffect required) 
  - Support for Authorization (experimental)