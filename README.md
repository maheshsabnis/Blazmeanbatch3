# The JavaScript Programming
- Integrated Development Environment (IDE)
    - Microsoft Visual Studio Code (VSCode)
    - Free IDE from Microsoft for Application Development
    - Cross Platform
    - https://code.visualstudio.com
    - This is based on 'Electron'
- Runtime as Node.js
    - Server-Side JavaScript Apps
    - https://www.nodejs.org

# ===================================================================================================================

# JavaScript (JS)
1. TypeSystem
    - DataTypes
        - Primitive Types
            - Number
                - integer or float
            - String
                - we can use "" or ''
            - Boolean
            - Date
                - new Date(year, month, day, hour, mins, seconds, milliseconds);
                    - month starts from '0', 0 is January
            - any
        - Complex Types
            - Object
                - var x = {k1:100}; // the JavaScript Object Notation (JSON)
                - The JSON object can store data using Key:Value pair
                    - Key is always a string
                    - Value can be any of the following type
                        - number, string, date, boolean
                        - object
                        - array
                        - function
                    - To access values of keys from object use the following
                        - ObjectIdentifier.[Key]
                        - e.g. x.k1
                    - All keys are publically accessible using the ObjectIdenttifier
                - To read all key:value pairs in a single statement use 
                    - JSON.stringify(ObjectIdentiffier);
                        - JSON is standard JS Object
                        - stringify() is a standard function of JSON Object   
                - The JSON is a widely used mechansim for DATA-COMMUNICATIONS in REST APIs             

            - Array
                - Defined using [] 
                - We can add any datatype in the array
                - Array.length
                    - This will return length of array
    - Variable Declarations
        - The 'var', is a keyword that is used to declare a variable
            - e.g. var x;
        - VERY IMP****
            - The Datatype of the variable is set based on its initial value (No explicit datatype declarartion)
                - The default DataType is 'any'
        - Each Datatype is derived from the 'Object'   
        - Since each of the Datatype is Object, every datatype has a 'Standard Function'     
2. Functions
    - This is also a Object Type
    - 3 Types of Functions
        - Close Type Functions aka a Regular Function Body
            - function xyz(parameters){........}
        - Reference Functions
            - Stores a function reference into an object
                - var x = function(Parameters){.........}   
        - Immediately Invokable Function Expression (IIFE)
            - Self-Invokable function
            - This function need not be called explicitely instaed it will be immedtaly executed when a JavaScript is loaded
            - Syntax
                - (function(){............})();          
3. Output Statements
    - The 'Console' class (same as System.Out)
        - Console.log(); Console.error(), Console.print(), etc. 
4. The JavaScript Object Model [JSOM] used by Browser
    - JS is a language of Browser
    - Loaded in Browser, Parsed in Browser and Executed in the Browser
        - The JS code is parsed and then executed per statement one-by-one
    - Following 2 Important Objects are responsible to Manage the JS in Browser
        - The 'window' object
            - Represents the Current Instance of Browser Window
            - Manage all browswer resources
                - Loading, Parsing and Executing JavaScript
            - Contains Global Events Objects
                
                - load
                    - onload()
                - close     
                    - onclose()
                - histroy
                    - Manages the history    
            - Objects
                - location
                - localStorage (HTML 5)
                - sessionStorage (HTML 5)
                - indexedDB (HTML 5)     
            - Object Methods
                - alert(), dialog box
                - prompt(), dialog box to accept value from end-user
                - atob(), base64 string encoding
                - btoa(), encodes a string in base64
                - print()       
            - Contains some Global Device Events
                - e.g. Mouse Events, Keyboard Events, etc.
        - The 'document' object
            - Represents a Document Object Model (DOM) aka a Static HTML UI Loaded in the browser
                - HTML UI
                    - input
                        - TextBox, <input type="text"/>
                        - Button, <input type='button"/> or <button></button>
                        - Radio, <input type="radio"/>
                        - CheckBox, <input type="checkbox"/>
                    - layout
                        - <div>, <table>, <p>
                    - lists
                        - <ul>, Un-Ordered List
                            - <li>, the list item
                        - <ol>, Ordered List          
                            - <li>
                        - <select> <option></option></select>
                            - Dropdown List       
            - The 'document' Object is used to query to DOM Tree to extract HTML element based on following Criterias
                - document.getElementById('[ID-OF-HTML-ELEMENT]');     
                    - <input type="text" id="txt"/>
                    - document.getElementById('txt');
                        - a Single DOM element is extracted from the DOM Tree
                - document.getElementsByTag('[TAG-OF-HTML-ELEMENT]');
                    - document.getElementByTag('input');
                        - Read all input elements from the DOM Tree 
                        - Return an Array of DOM Elements    
                - document.getElementsByClass('[CLASS-ATTRIBUTE-OF-HTMOL-ELEMENT]') 
                    - <input type="text" class="c1"/> <input type="button" class="c1"/>    
                    - document.getElementsByClass('c1');
                        - Return all elements those are having class attribute value as 'c1'
                        - Return an Array of DOM Elements   
                - document.querySelector('[HTML-ELEMENT-SEARCH-CRITERIA]') 
                    - class name, tag name, etc.
                    - Retuns a single DOM ELement object   
                - document.querySelectorAll('[CRITERIA]');
                    - Return array of elements
            - The 'document' object is also used to attach events to DOM Elements
                - doucment.addEventListener('event', Callback Function, boolean);
                    - The 'event'
                        - click, mouseenter, mouseleave, blur, keyup, change, etc.
                - e.g.
                    - <input type="button" id="btn">
                    - Extrct element based on 'id'
                        - var btn = document.getElementById('btn');
                    - Attach an event
                        - btn.addEventListener('click', function(){......}, false);
                            - When the Button is clicked the function will be executed
                            - The 'false' means the event will be release from the DOM 
        - TO load the HTML page in browser, install the 'LiveServer' plougin or extension of the VSCode                     
5. The JavaScript Programming Constructs
    - Conditional Statements
        - if(Condition){...} statement
        - if(Condition){...}else {......}
        - if(Condition){.....} else if(condition) {......}
    - Switch-Case
        - switch(condition){ case '':..... break; ........ default: ......}
            - The 'default' is mandatory

    - Loops
        - for() loop
        - for...in loop
            - Simplification of for loop (NOT forEach loop)
6. JavaScript Operators
    - Basic Math
        - +,-,*,/
            - IMP***, The '+' is default for String Concatination
            - if any operand of + expression is string, then the concatination will takes place 
        - +=, -=    
        - =, the assignment
        - ==, the value comparision
        - ===, the deep comparision  aka 'deep equavality' or 'deep type check' 
        - !==, not equal
        - >,<, >=, <=
        - ||, OR
        - &&, AND
        - !, nor or not                
7. If one JSON object is assigned to other JSON object then both objects will point to same memory store. Hence to create a seperate clone of the object with same structure using 'Object' functions
    - var obj1 = {x:10};
    - To create a clone of obj1
        - var obj2 = Object.assign(target, source);
            - The first parameter 'target' is a newly created empty object
            - The second parameter 'source', is the objected of which structure (and values) will be cloned in the target object
                - e.g.
                    - var obj2 = Object.assign({}, obj1);
8. Using the Type Parsing methods
    - parseInt('[STRING]') 
    - parseFloat('[STRING]')      
    - parseXXX methods are responsible for parsing striong from Left-to-Right, till the first string is not found     
9. Using Eventing for 'input:text' elements
    - The 'value' attribute /  property used for Read/Write values for input element
    - The 'change' and 'blur' events those will be fired when the value is changed or 'tab' is pressed respectively

    - if an HTML element is subscibed to an event and the value entered in that element is used in its callback function, then the HTML element will be referred inside its event's callback using 'this' object 
        - the 'this' object represents the current object scope menas represent an object itself

10. Using Arrays with the HTML Dropdown
    - Array is a collection of values
    - Dropdown wil be used to populate 'options' from the array  
    - The select element has the 'change' event. We can extract the value of selected option using
        - select.options[select.selectedIndex].value                         

