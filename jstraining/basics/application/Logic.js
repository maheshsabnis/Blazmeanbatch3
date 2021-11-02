function Logic(){
   var Employees=[];
    // private function that returs Departments
    function getDeps(){
        var departments = ['IT', 'HR', 'SL', 'AC'];
        return departments;
    }
    function getEmployees(){
        return Employees;
    }
    function addEmployee(emp){
        Employees.push(emp);
        return Employees;
    }
    return {
        getDepartments: getDeps,
        getEmployees: getEmployees,
        addEmployee: addEmployee
    };
}