import React from "react";
import ReactDOM from "react-dom";
// import bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// the component is imported
import App from "./App";
import SimpleCalculator from "./components/statefulcomponent/simpleCalculator";
import EmployeeFormComponent from "./components/formcomponent/employeeformcomponent";
import reportWebVitals from "./reportWebVitals";

// the ReactDOM.render() method will mount and render the component
// in HTML eleemnt with id as 'root' in index.html present in 'public' folder
// currently  React.DOM.render() is parent of 'App' component
const message = "The Message from the Parent";
const obj = { a: 1 };
ReactDOM.render(
  <React.StrictMode>
    {/* Using Component as Custom-HTMl-Element */}
    {/* The JSX parser allows us to add properties in 'props' dynamically
    in this is 'msg' is a JSX property defined for 'App' component 
    props={msg:message} */}
    <EmployeeFormComponent></EmployeeFormComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
