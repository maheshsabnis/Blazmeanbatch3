# Testing Apps
1. Test-Driven-Development (TDD)
    - Make Sure that there exists Test Case for Every Use Case
    - Availability of Test Data
    - Write Unit Test for 'Each Unit' of the Source Code
        - Take a Method /  Function
            - If  function has input parameters and if a function is validating these parameters, then there MUST exist test for the validations
            - If there exists if statements for Logic Execution, then 'one test for if' and 'one test for else' is required
            - For loops write test
            - Test for output parameters (this MUST be a part of parameters tests and if-else tests)
    - If test fails, then make sure that the data source is providing data accurately
        - Make sure that the User-Story and Test-Case matches with each other
        - Think of Code-Refactoring to make Test Work
            - The Refactoring MUST satisfy the USer-Story
2. Unit Testing for Application
    - Arrange
        - Collect the Resource objects to be tested
        - Get Hold of all dependencies
        - Collect all test Data
        - Arrange for Expected Result
    - Act
        - Write code to Make sure that the Dependencies and the Function to be tested are called and Test Data is passed to it
        - Get the actual result
    - Assertion
        - Compare the Actual result with expected result
            - Equal to, greater-than, less-than, not-equal-to, same types, etc.
3. Server-Side or Client-Side Code Unit testing
    - Use Simple Unit Testing Libraries or Frameworks
4. Server-Side REST APIs
    - Use the Unit Testing Object Model, those who are having HTTP request Caliber with Async Execution
5. Front-End Test 
    - Use JavaScript and HTML DOM Testing without Browser dependency
    - The JS and HTML MUST be Created in-memory and all properties, and events MUST be testing in-memory                          

# Unit Testing Object Models
    - Jasmine, a JavaScript Behavior-Driven-Test Library to Test JS Code
    - Chai, a Assertion Library that is sued to test code based on Various types of Assertion
        - Equal to, greater-than, less-than, not-equal-to, same types, etc.
    - Jest
        - The In-Memory Testing Framework for JavaScript UI Apps e.g. React, Angular, etc.
    - Enzyme
        - Specially designed for React Apps
    - Mocha
        - A Framework that executes 'chai' tests in Server
    - npm install -g mocha
    - npm install --save mocha chai
    - the filename that contains code for test MUST be
        - [File-Name].test.js
        - Mocha will understand the '.test.js' 

# Writing the Test
- Create a 'test' folder and add test file in it 
- The filename that contains code for test MUST be
        - [File-Name].test.js
        - Mocha will understand the '.test.js'                             
- Import 'chai' and then import the code which is to be tested

- Create a test-suit using
    - describe()
    - Under the 'describe()' create a test case
        - 'it()'
            - Arrange
            - Act
            - Assert
        - The TestCase Name MUST be unique    
- To make a HTTP request to REST API use the 'request' package
    - npm install --save request
        - The 'request' is a Promise base package             
- Code-Coverage Policy
    - The Code-Coverage Guarantees that the maximum code in the source is successfully tested
    - The 'nyc' tool for code coverage  
        - npm install -g nyc
        - npm install --save nyc
    - nyc mocha
        - Command to generate code coverage
        - nyc --reporter=html --reporter=text mocha
            - The command will be executing the mocha for running tests and generate an HTML file with report in 'coverage' (--reporter=html) folder and the text based report on the console (--reporter=text)    
    - The Code-Coverage report MUSt be More than 80% for each Code File that is covered under Test     
    - The Production Ready Code is an average for more than 95%