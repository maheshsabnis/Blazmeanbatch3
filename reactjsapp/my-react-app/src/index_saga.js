import React from "react";
import ReactDOM from "react-dom";
// import bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import redux and react-redux objects
// applyMiddleware: Used to configure the SAGA Middleware (OR THUNK if used instead of Saga) with store
// compose: The parameter enhancer for Store to Enhance Store using the Middleware Object and the REDUX-DEVTOOLS
import{createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
// import reducers
import reducers from "./sagapp/reducers/reducers";
// import RootSaga
import rootSaga from "./sagapp/sagas";
// import 'createSagaMiddleware()', this will be used to configure
// the Saga N=Middleware at application scope so that
// all actions dispatched will be monitored by it along with the reducer
import createSagaMiddleware from 'redux-saga';

import reportWebVitals from "./reportWebVitals";
import MainSagaComponent from "./sagapp/mainsagacomponent";

// Build a Middleware Platform which will be used by store in createStore() method
const appSagaMiddleware = createSagaMiddleware();
// define a parameter enhancer that is an input parameter to the createStore()
// the compose() method will make sure that that 'parameterEnhancer' will
// be having addition set of properties in it
const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;


// create a store using the createStore() method by passing reducers and parameter-enhancer
 // the appSagaMiddleware is passed to the store so that any component under the store
 // when it dispatch any action the Saga Will monitor is along with reducer` 
// let store = createStore(reducers,
//    parameterEnhancer(applyMiddleware(appSagaMiddleware)));

let store = createStore(reducers, applyMiddleware(appSagaMiddleware));   

// keep the saga middleware running at application level
appSagaMiddleware.run(rootSaga);    

// integrated the react-with-redux by using Provider
// all react components will be executed under the redux object model
// the 'store' property will continue executing the 'reducer' in global scope
// so that 'any-action' dispatched either from View or from action-creator
// will ne monitored by the reducer to update store accordingly 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainSagaComponent></MainSagaComponent>
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
