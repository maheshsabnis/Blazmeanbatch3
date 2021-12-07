import React from 'react';

import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

// import the component being tested

import HelloTestComponent from '../componentfortest/HelloTestComponent';

// define a Test Suit and Test Cases
describe('The Test Suit for the HelloTestComponent',()=>{
    // declare a DOM Container, that will contain all the DOM rendering in it
    let DOMContainer = null;

    // Make sure that before every Test case the DOMContainer is initialized with
    // <div> tag in it
    beforeEach(() => {
        // lets create a div element
        DOMContainer = document.createElement('div');
        // append this DOMContainer in the DOM body in memory that is created by Jest
        document.body.appendChild(DOMContainer); 
    });

    // the test case
    it('should render the component without props',()=>{
        // act
        act(()=>{
            // not passing any props
            render(<HelloTestComponent/>, DOMContainer);
        });
        // assertion
        expect(DOMContainer.textContent).toBe('Hello, Mr. Unknown');
    });

    it('should render the component with props',()=>{
        // act
        act(()=>{
            // not passing any props
            render(<HelloTestComponent message={'Mahesh'}/>, DOMContainer);
        });
        // assertion
        expect(DOMContainer.textContent).toBe('Hello, Mr. Mahesh');
    });

    // Make sure that after each test unmount the Component from DOM and 
    // release it from memory
    // to free the memory
    afterEach(()=>{
       // UNMOUNT the Component from the DOMContainer
       unmountComponentAtNode(DOMContainer);
       // Free it from the Memory
       DOMContainer.remove();
       // reset the Container
       DOMContainer = null;

    });
    
});
