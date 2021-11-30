import React from "react";
import ReactDOM from "react-dom";
// import bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MainReduxComponent from "./reduxapp/mainreduxcomponent";

 
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
     <MainReduxComponent></MainReduxComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
