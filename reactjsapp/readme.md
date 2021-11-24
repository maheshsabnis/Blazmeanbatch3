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
        - Events
          - These are the JSX parsed attributes those are used to bind functions defined inside the component to HTMl elements using standard JavaScript event-names
            - <input type="button" value="click me" onClick={function-name}>
              - function-name, is the name of the function defined inside the Component 
    - AJAX Calls
        - Hooks
- Hooks
    - Standard JavaScript Functions those are having Pre-defined behavior to perform while working with React's Functional Components. All these hooks are available from 'react' package         
        - useState()
            - Used to define a local state property for Component
        - useContext()
            - Used to share data across components
            - USed to maintain the state of data across components 
        - useEffect()
            - Used to perform Long-Running Operations
            - Used to Subscribe and Unsubscribe events
        - useReducer()
            - Used for State Transition
            - Manage State updated from initial-State-to-final-state 
        - useMemo()
            - use for Caching for performance improvement
        - useRef()
            - Used tgo refer HTML element for Data Read/Write operations
            - May br deprecated in future
    - We can create custom hooks 
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

- Routing
- Hight-Order-Component
- Error Handling
- LazyLoading
- Application State Management    