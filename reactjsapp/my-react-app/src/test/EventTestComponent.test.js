import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// import the component being tested

import EventTestComponent from "./../componentfortest/EventTestComponent";

// define a Test Suit and Test Cases
describe("The Test Suit for the HelloTestComponent", () => {
  // declare a DOM Container, that will contain all the DOM rendering in it
  let DOMContainer = null;

  // Make sure that before every Test case the DOMContainer is initialized with
  // <div> tag in it
  beforeEach(() => {
    // lets create a div element
    DOMContainer = document.createElement("div");
    // append this DOMContainer in the DOM body in memory that is created by Jest
    document.body.appendChild(DOMContainer);
  });

  // the test case
  it("should detect the button click event", () => {
    // render the component
    act(() => {
      render(<EventTestComponent />, DOMContainer);
    });

    // lets look for the <button> element
    const button = document.querySelector("button");
    // lest look for an element with className as '.dv'
    const div = document.querySelector(".dv");
    // check if the innerHTML of the button is 'Save'
    expect(button.innerHTML).toBe("Save");
    // check if the innerHTML of div is false
    expect(div.innerHTML).toBe("false");

    // lets deal with the event dispatch
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    // check if the innerHTML of the button is 'Save'
    expect(button.innerHTML).toBe("Update");
    // check if the innerHTML of div is false
    expect(div.innerHTML).toBe("true");
  });

  // Make sure that after each test unmount the Component from DOM and
  // release it from memory
  // to free the memory
  afterEach(() => {
    // UNMOUNT the Component from the DOMContainer
    unmountComponentAtNode(DOMContainer);
    // Free it from the Memory
    DOMContainer.remove();
    // reset the Container
    DOMContainer = null;
  });
});
