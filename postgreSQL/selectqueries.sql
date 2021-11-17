-- Using Select Queries
-- Using Simple Where Clause
Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where DeptNo=10;

-- Using Order By
Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where DeptNo=10 Order By EmpName;

-- Order By Descending
Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where DeptNo=10 Order By EmpName desc;

-- Using Where Clause with Logical Operators AND, OR

Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where Salary >= 100000 AND Salary <= 500000;

-- Listing all Employees from all Departments except DeptNo 10 
-- Not in (Range of Values)

Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where DeptNo NOT in (10);

-- List Employees onle for specific DeptNos

Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where DeptNo  in (10,20,30);

-- List all Employees Those are having Salary between 50000 to 90000

Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where Salary Between 50000 AND 90000;

-- Using Like Expression in Wheer Caluse

-- Listing all Employees have name starts with 'A'

Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where EmpName Like 'A%';

-- 'Ab%', Reads all records Matches with column  values for a column starts with 'Ab'
-- '%ed%', Reads all records Matches with column  values having 'ed' anywhere in it
-- '_00%', Reads all records Matches with column  values having '00' in the second and third poasition
-- the '_' is the value index e.g. 2___3, the total length of value is 5 where ___ are 2,3,4 indices in value
-- '%6', start with 6
-- [Column-Name]::[DataType] is the Type-Casting e.g. Salary:text, to execute the query the Salary is type casted to text
Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where Salary::text Like '6%';
-- Read all records having slaary with 5 digits and thet starts from 2 and ends with 3
Select EmpNo, EmpName, Designation, Salary,DeptNo from Employee Where Salary::text Like '2___3';

-- Using Group By

Select DeptNo, Sum(Salary) from Employee Group by DeptNo Order By DeptNo;

-- Display Sum of Salary for each DeptName
Select  DeptName, Sum(Salary) from Employee,Department where Employee.DeptNo = Department.DeptNo
Group by DeptName Order By DeptName;

select * from Employee;

-- Printing Specific Limit of Recodrs from Employee Table
-- Use 'Limit' Operator, this will always starts from the top

Select EmpName, Designation, Salary from Employee Limit 4;

-- Read records from the Employee Table from a specific Index
-- E.g. Read records from the 3rd row to next 4 records
-- use 'offset' to set the number of records tio skip from the first record and start reading
Select EmpName, Designation, Salary from Employee Limit 4 Offset 2;

-- Use Distinct Clause to read records 

select Distinct EmpName from Employee;




