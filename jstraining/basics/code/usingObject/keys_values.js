var Employee = {
    EmpNo:101, EmpName:'Mahesh', Salary: 200000, DeptName: 'IT'
};

// Read all Keys (Properties of Employee)

var properties = Object.keys(Employee);
console.log('====================================');
console.log(properties);
console.log('====================================');

var values =  Object.values(Employee);

console.log('====================================');
console.log(values);
console.log('====================================');