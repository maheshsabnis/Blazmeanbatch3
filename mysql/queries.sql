Use Business;

-- UnNecessary usae of Column
select EmpNo, EmpName, Designation, Salary,DeptNo from Employee where DeptNo = 10;

-- Print uses for specific Department
select EmpNo, EmpName, Designation, Salary from Employee where DeptNo = 10;
-- Generating a Computed COlumn
select EmpNo, EmpName, Salary, Salary * 0.06 as Tax  from Employee where DeptNo = 10; 
-- Retrive count of Employees
select count(*) from Employee;
select count(*) from Employee where DeptNo =20;
-- Select Max Salary
select max(Salary) from Employee;
-- Select minimum salary
select min(Salary) from Employee;
-- USing a Column and The Scalar function
select EmpName, Count(*) from Employee; -- Avoid This
-- retrieving the count of employeed fir specific DeptNo
select DeptNo, Count(*) from Employee where DeptNo=10;
-- Use group key to evaluate the select statement with the scalar functon
select DeptNo, Count(*) from Employee group by DeptNo; 
-- Display MAx Salary Per Department
select DeptNo, max(Salary) as MAX_SALRY from Employee Group by DeptNo;
-- Second Max Salary
 select DeptNo, max(Salary) as MAX_SALRY from Employee where Salary < (Select MAx(Salary) from Employee);
 -- second max salary per department
select DeptNo, max(Salary) as MAX_SALRY from Employee where Salary < (Select MAx(Salary) from Employee) group by DeptNo;
-- Sum of salary for all Employee
select Sum(Salary) From Employee;
-- Sum Salary by DeptNo
 select Sum(Salary) From Employee group by DeptNo;
 
 -- Listing all Employees Order by Salary
 Select * from Employee Order By Salary;
 
 Select * from Employee Order By    Salary DESC;
 
 

 






















