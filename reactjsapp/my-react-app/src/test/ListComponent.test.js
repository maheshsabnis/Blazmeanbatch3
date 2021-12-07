import React from 'react';

import {shallow,mount} from './../../enzyme';

import ListComponent from '../componentfortest/ListComponent';

describe('Component Testing Using Enzyme',()=>{
    it('should render ListComponent when an array is passed to it',()=>{
        // arrange for data
        const names = ['Ajay', 'Bjay', 'Cjay', 'Djay'];
        // work on DOM Tree
        const componentTree = shallow(<ListComponent names={names}/>);
        // lets print the Rendered component
        console.log(componentTree.debug());
        // check if the Component tree contains an element having class as 'names'
        expect(componentTree.find(".names").exists()).toBe(true);

    });

    it('should render ListComponent with empty class in DOM when array is empty',()=>{
        // arrange for data
        const names = [];
        // work on DOM Tree
        const componentTree = shallow(<ListComponent names={names}/>);
        // lets print the Rendered component
        console.log(componentTree.debug());
        // check if the Component tree contains an element having class as 'empty'
        expect(componentTree.find(".empty").exists()).toBe(true);

    });

    it('should render ListComponent with the child component DOM that contains "li"',()=>{
        // arrange for data
        const names = ['Ajay', 'Bjay', 'Cjay', 'Djay'];
        // work on DOM Tree
        // drill-down to the DOM tree and scan over it to check each DOM element in it
        const componentTree = mount(<ListComponent names={names}/>);
        // lets print the Rendered component
        console.log(componentTree.debug());
        // check if the Component tree contains the li element 

        expect(componentTree.find("li").exists()).toBe(true);

    });
});