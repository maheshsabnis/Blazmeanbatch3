-- using Joins
select * from Department, Employee; -- Performs recording reading in such a way that for one record from CHild Table all recodrs of parent are read
select * from Employee, Department;  -- Performs recording reading in such a way that for one record from CHild Table all recodrs of parent are read

-- USing Inner Joing, a mechaniosm of joining tables based on the relaship key
select EmpNo, EmpName, DeptName, Designation, Salary, Location
From Department inner join Employee
Where Department.DeptNo = Employee.DeptNo;

-- Left Join
-- REad all data frim Left Side table that match and does not match with data frim Right table
-- IN this case Left table is Department and Right table is EMployee

select EmpNo, EmpName, DeptName, Designation, Salary, Location
From Department Left join Employee
on Department.DeptNo = Employee.DeptNo;

-- Right Join is apposit of Left Join

select EmpNo, EmpName, DeptName, Designation, Salary, Location
From Department Right join Employee
on Department.DeptNo = Employee.DeptNo;
