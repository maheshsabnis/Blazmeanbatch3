-- Create view for specif data from specific Columns from Department and Employee Table

Create View DeptEmp
As
Select EmpNo, EmpName, Designation, Salary, DeptName, Location
From Employee, Department
Where Employee.DeptNo = Department.DeptNo;

select * from DeptEmp;

insert into Employee Values (302, 'Neeta', 'Manager', 123400, 10);