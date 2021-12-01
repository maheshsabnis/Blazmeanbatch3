// define sagas and calls to REST APIs using DepartmentService

import DepartmentHttpService from "./../../services/departmentservice";

// import effects to implement SAGAS
import { takeLatest, call, put, all } from "redux-saga/effects";

// define functions to call the REST APIs from the service
function getDepartments() {
  let serv = new DepartmentHttpService();
  // make sure that the async call is made and async promise result will be subscribed
  const response = serv.getData().then((result) => result.data);
  // resolve the Promise response so that the caller of the current
  // method will be able to read data from it
  return Promise.resolve(response);
}

function postDepartment(dept) {
  let serv = new DepartmentHttpService();
  let response = serv.postData(dept).then((result) => result.data);
  return Promise.resolve(response);
}

// define Input and Output SAGA Generators

function* outputActionGetDepartments() {
  console.log("Monitoring The Saga for Get Departments Success");
  // Call the function that is return the Promise Object
  // Parameters
  // P1: A Function Callback that is returning the Promise Object
  // P2: (Overloads), the input parameters required by the Function Callback
  try {
    const response = yield call(getDepartments);
    console.log(
      `Received response $in Output Generator ${JSON.stringify(response.data)}`
    );
    // dispatch the output action
    yield put({
      type: "GET_DEPARTMENTS_SUCCESS", // output action type
      departments: response.data, // payload
      message: 'Successfully Received Departments'
    });
  } catch (e) {
    yield put({
      type: "GET_DEPARTMENTS_FAILED", // output action type
      message: `Failed to read departments ${e.message}`, // payload
    });
  }
}

function* inputActionGetDepartments() {
  console.log("Monitoring The Saga for Get Departments");
  // Listen to an input Action Dispatched from the View that is executing under the store
  // Parameters
  // P1: The Action Type that is dispatched
  // P2: The Action Creator Worker that will be executed when an action is dispatched
  // The Action Creator is a Generator Function
  yield takeLatest("GET_DEPARTMENTS", outputActionGetDepartments);
}

// the 'action' is an object, that represents
// the return value from the dispatched action
function* outputActionPostDepartment(action) {
  console.log("Monitoring The Saga for Post Department Success");
  // read the payload of the input dispatched action
  const dept = action.department;
  console.log(`Received data fro Post is = ${JSON.stringify(dept)}`);
  try {
    // call the method
    const response = yield call(postDepartment, dept);
    console.log(`Response after POST is = ${JSON.stringify(response)}`);
    yield put({
      type: "ADD_DEPARTMENT_SUCCESS",
      department: response.data,
      message: 'New Department is Added Successfully'
    });
  } catch (e) {
    yield put({
      type: "ADD_DEPARTMENT_FAILED",
      department: `Add  new department is failed ${e.message}`,
    });
  }
}

function* inputActionPostDepartment() {
  console.log("Monitoring The Saga for Post Department");
  // the takeLatest when listen to the dispatched action
  // it read is payload and this payload is used for Processing the data
  yield takeLatest("ADD_DEPARTMENT", outputActionPostDepartment);
}

// define the Root Saga that will be connected to store
// The rootSaga will be connected to the store using the Middleware
// This will be executed along with the reducer
export default function* rootSaga(){
    console.log(`Root SAGA is Executing and will monitor all dispatched actions`);
    yield all([inputActionPostDepartment(), inputActionGetDepartments()]);
} 
