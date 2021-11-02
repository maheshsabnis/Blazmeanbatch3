# Using GitHub
- Created a Repository with Readmefile, .gitignore, License
    - https://github.com/maheshsabnis/Blazmeanbatch3.git
- MUST have the Git Sign Up
    - git config  --gobal user.name "user.name"  
    - git config --global user.email "falana.dhimkana@timkana.com"
- Clone the repository
    - git clone https://github.com/maheshsabnis/Blazmeanbatch3.git    

- Commit
    - git commit -m "firstcommit"
-Push
    - git push [REMOTE-URL]

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

11. Using JavaScript for Application Development
    - Plan for The Data Structures
        - Variable Declaration with Scope of the variable
            - Using 'val' is a function level scope or the JS file level scope,. if it declared globally in the file
            - This will result into possibility of Dirty Read and Dirty Write
                - We have to take care of Resetting the 'var' or setting it to undefined
            - To prevent tye dirty read and dirty writes for 'var', make use of 'use strict' in JavaScript file so that all 'var' declarations will be 'scopped to the current file '    
            - But the factn is the 'var' declararion will be accessible from its declaration onwards to the other statemenets. So make sure that the 'var' declaration is set to 'undefined'
        - Using Collection Types i.e. Array
            - The only 'collection' in Vanilla JavaScript
            - Array is cross Technology collection
            - This is a Complex Object that is used to store large amount of values in browser
            - Methods
                - push(), pop(), shift(), unshift(), sort() the vanilla JS Methods for Array
            - Property
                - length
            - Array Iteration
                - Use for..loop or for..in loop        

        - Using a Textual Data i.e. String  
            - A Array of Characters
            - Most of the methdos are same as Array
            - toUpperCase(), toLowerCase()
            - substring()
    - Write Logic
        - Create seperate functions for resuable set of coding. e.g. Collection Operations, Generating UI repetedly, etc.
            - Functions: They are code-block, those are used for following 
                - Re-Usable Logical Statement Execution
                - Used to provide a 'Class-like' coding experience to the application
                    - Following are 3 syntaxes to create function in JavaScript
                        - Reference Functions
                            - Store a Function in 'var'
                                - var myObject = function(){...} 
                            - All publically accessible members (i.e. Variables, functions) of this function will be pre-fixed using 'this.'
                                - var myObject = function {
                                    this.fn1 = function(){.....};
                                    this.fn2 = function(){.....}
                                }
                                - fn1, fn2 are public functions exposed from 'myObject'
                                - Access the Publically exposed members using following syntax
                                - Create an instance of the function
                                    - var obj = new myObject();
                                - Access the public members
                                    - obj.fn1(); 
                            - The Reference Function can be extended using using the 'prototype' object of JavaScript
                                - The 'prototype' can be used to enhance the original Reference Function Object by adding new functions in it
                                    - e.g. If myObject is the Reference Function then used following syntax to add the Prototype
                                        - myObject.prototype.fn3 = function(PARAMETERS){.......} ;
                                        - The 'prototype' is used to create a new Object which is be enhenced with new function added in it   
                                - Generally, it is used in case, when the 'third-party' JS library or code, needs to be enhanced without modifying the original code from the library   
                                    - In 'prtototype' function, the private function from the original Reference funciton can-not be accessed
                        - Close-Type Fucntion or a JavaScript Function, that returns a JSON Object
                            - function MyFunction(){    return { Key:Value, Key:Value };  };       
                                - Whatever is returned using the JSON Object is Public
                                - e.g.
                                    - Key, can be a property, function-Name
                                        - K1: 10 OR K1: function(PARAMETERS){.........}
                                    - Everything that not inside the return block is 'private'      
                                - To Access the Public Members , create an instance using 'new' and access members
                                    - var obj =  new MyFunction();
                                    - obj.Key(); for access function OR obj.Key to read property value    
                            - VERY IMP****
                                - Close Function does not have prototype         
    - Load the code on UI to make the UI Functional

