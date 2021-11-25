import { useState } from "react";
import DropdownComponent from "../reusablecomponents/dropdowncomponent";
import DataGridContextEventComponent from "../reusablecomponents/datagridcontexteventcomponent";
// import the Data Context
import { DataContext } from "./../datacontext";
const EmployeeFormValidationComponent = () => {
  const [employee, setEmployee] = useState({
    empno: 0,
    empname: "",
    designation: "",
    salary: 0,
    deptname: "",
  });
  const [employees, addEmployee] = useState([]);
  const [designations, setDesig] = useState([
    "Manager",
    "Clerk",
    "Operator",
    "Engineer",
  ]);
  const [departments, setDepts] = useState(["IT", "HR", "TR", "SL", "AC"]);
  const [isEmpNoValid, setEmpNoValidations] = useState(true);
  const [isEmpNameValid, setEmpNameValidations] = useState(true);
  const [isSalaryValid, setSalaryValidations] = useState(true);
  const [isFormValid, setFormValidation] = useState(true);
  const [validationSummary, setValidationSummary] = useState([]);
  // clear all HTML Editable elements
  const clear = () => {
    setEmployee({
      empno: 0,
      empname: "",
      designation: "",
      salary: "",
      deptname: "",
    });
  };

  const save = () => {
    addEmployee([...employees, employee]);
  };

  const getSelectedDesignation = (value) => {
    setEmployee({ ...employee, designation: value });
  };

  const getSelectedDeptName = (value) => {
    setEmployee({ ...employee, deptname: value });
  };

  const handleOnChange = (evt) => {
    if (evt.target.name === "empno") {
      setEmployee({ ...employee, empno: parseInt(evt.target.value) });
    }
    if (evt.target.name === "empname") {
      setEmployee({ ...employee, empname: evt.target.value });
    }
    if (evt.target.name === "salary") {
      setEmployee({ ...employee, salary: parseInt(evt.target.value) });
    }
    validateForm(evt.target.name, evt.target.value);
  };

  const validateForm = (name, value) => {
    if (name === "empno") {
      if (parseInt(value) <= 0) {
        setEmpNoValidations(false);
        setFormValidation(false);
        setValidationSummary([...validationSummary, "EmpNo is invalid"]);
      } else {
        setEmpNoValidations(true);
        setFormValidation(true);
        setValidationSummary([...validationSummary, validationSummary.pop()]);
      }
    }
    if (name === "empname") {
      if (value.length === 0) {
        setEmpNameValidations(false);
        setFormValidation(false);
        setValidationSummary([...validationSummary, "EmpName is invalid"]);
      } else {
        setEmpNameValidations(true);
        setFormValidation(true);
        setValidationSummary([...validationSummary, validationSummary.pop()]);
      }
    }
    if (name === "salary") {
      if (parseInt(value) <= 0) {
        setSalaryValidations(false);
        setFormValidation(false);
        setValidationSummary([...validationSummary, "Salary is invalid"]);
      } else {
        setSalaryValidations(true);
        setFormValidation(true);
        setValidationSummary([...validationSummary, validationSummary.pop()]);
      }
    }
  };

  return (
    <div className="container">
      <h1>The React Form Custom Validations</h1>
      <form name="frmEmp">
        <div className="form-group">
          <label>EmpNo</label>
          <input
            type="text"
            value={employee.empno}
            name="empno"
            className="form-control"
            onChange={handleOnChange}
          />
          <div className="alert alert-danger" hidden={isEmpNoValid}>
            EmpNo is Not Valid
          </div>
        </div>
        <div className="form-group">
          <label>EmpName</label>
          <input
            type="text"
            value={employee.empname}
            name="empname"
            className="form-control"
            onChange={handleOnChange}
          />
          <div className="alert alert-danger" hidden={isEmpNameValid}>
            EmpName is Not Valid
          </div>
        </div>
        <div className="form-group">
          <label>Designation</label>

          <DropdownComponent
            dataSource={designations}
            valueProperty={employee.designation}
            getSelectedValue={getSelectedDesignation}
          ></DropdownComponent>
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            value={employee.salary}
            className="form-control"
            name="salary"
            onChange={handleOnChange}
          />

          <div className="alert alert-danger" hidden={isSalaryValid}>
            SalaryName is Not Valid
          </div>
        </div>
        <div className="form-group">
          <label>Department Name</label>

          <DropdownComponent
            dataSource={departments}
            valueProperty={employee.deptname}
            getSelectedValue={getSelectedDeptName}
          ></DropdownComponent>
        </div>
        <div className="btn-group-sm">
          <input
            type="button"
            value="New"
            className="btn btn-primary"
            onClick={clear}
          />
          <input
            type="button"
            value="Save"
            className="btn btn-success"
            disabled={!isFormValid}
            onClick={save}
          />
        </div>
      </form>
      <br />
      <div className="alert alert-danger" hidden={isFormValid}>
        {JSON.stringify(validationSummary)}
      </div>
      <hr />
      {/**
       Provide the data to the DataGridContextComponent using the DataContext.Provider object
      */}
      <h6>Using Context</h6>
      {/* <DataContext.Provider value={employees}>
          <DataGridContextComponent></DataGridContextComponent>
      </DataContext.Provider>     */}


 {/**
       Provide the data and the event callback action to the DataGridContextEventComponent
        using the DataContext.Provider object. The event callback action will be used 
        to receive data from DataGridContextEventComponent
        Note: The 'value' is a single object, so to pass multiple values using Context
        make sure that the 'value' accepts data using Complex object e.g. value={{}}
      */}
      <DataContext.Provider value={{employees, setEmployee}}>
        <DataGridContextEventComponent></DataGridContextEventComponent>
      </DataContext.Provider>
    </div>
  );
};

export default EmployeeFormValidationComponent;
