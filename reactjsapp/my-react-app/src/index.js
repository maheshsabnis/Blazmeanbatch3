import React from "react";
import ReactDOM from "react-dom";
// import bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import redux and react-redux objects

import{createStore} from 'redux';
import {Provider} from 'react-redux';

import reducres from "./reduxapp/reecuers/reducers";

import MainReduxComponent from "./reduxapp/mainreduxcomponent";

import reportWebVitals from "./reportWebVitals";

// create a store using the createStore() method by passing reducers and parameter-enhancer
// window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__, is the browser extension for
let store = createStore(reducres, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// integrated the react-with-redux by using Provider
// all react components will be executed under the redux object model
// the 'store' property will continue executing the 'reducer' in global scope
// so that 'any-action' dispatched either from View or from action-creator
// will ne monitored by the reducer to update store accordingly 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <MainReduxComponent></MainReduxComponent>
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
