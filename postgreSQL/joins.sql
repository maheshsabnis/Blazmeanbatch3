-- Using Joins
-- Cross Join
	-- Matches every row of the firsdt table with 
	-- every row of the second table
	-- If t1 if first table and t2 is second table
	-- then cross join will be t1+t2 that will generate
	-- a large dataset (record) as reasult
Select EmpNo, EmpName, DeptName, Designation, Salary
From Employee Cross Join Department;

-- INNER JOIN, Return only Match Records from 
-- First Table to Second Table
Select EmpNo, EmpName, DeptName, Designation, Salary
From Employee INNER Join Department 
On Employee.DeptNo = Department.DeptNo;


-- Left Outer Join
Select EmpNo, EmpName, DeptName, Designation, Salary
From Employee Left Outer Join Department 
On Employee.DeptNo = Department.DeptNo;
-- Right Outer Join 
Select EmpNo, EmpName, DeptName, Designation, Salary
From Employee Right Outer Join Department 
On Employee.DeptNo = Department.DeptNo;

-- Full Outer Join

Select EmpNo, EmpName, DeptName, Designation, Salary
From Employee Full Outer Join Department 
On Employee.DeptNo = Department.DeptNo;





