import React from "react";
import ReactDOM from "react-dom";
// import bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EventTestComponent from "./componentfortest/EventTestComponent";
import HelloTestComponent from "./componentfortest/HelloTestComponent";
import ListComponent from "./componentfortest/ListComponent";
import "./index.css";

// the component is imported

import reportWebVitals from "./reportWebVitals";

const message = "Mahesh";
const names = ['Ajay', 'Bjay', 'Cjay', 'Djay'];

ReactDOM.render(
  <React.StrictMode>
     <ListComponent names={names}></ListComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
