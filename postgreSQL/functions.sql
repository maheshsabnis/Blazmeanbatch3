-- Creating Function 
-- The Parameter Name MUST start from 'p_[ACTUAL-COLUMN_NAME]' if the input parameter is referring to column name
Create Function GetSumofSalarybydeptNo(p_DeptNo integer) Returns BigInt
Language plpgsql -- Language
As
$$ -- delimiter
Declare 
	sum_salary bigint; -- local variable
Begin
  -- The function body
  		Select Sum(Salary) into sum_salary From Employee
		Where DeptNo = p_DeptNo;	
		return sum_salary;
End;
$$ -- Delimiter

-- Use or Execute the Function

select * from GetSumofSalarybydeptNo(20);

-- Creating Utility Functions
-- use inout for input and output parameters
Create or Replace Function xchange(inout a integer, inout b integer)
Language plpgsql
As 
$$
Begin
	Select a,b into b,a;
End;
$$

select * from xchange(100,200);

-- A Functionwith Logic

Create Function GetSumofSalarybyDeptNoWithParameters(p_DeptNo integer) Returns BigInt
Language plpgsql -- Language
As
$$ -- delimiter
Declare 
	sum_salary bigint; -- local variable
Begin
  -- The function body
  
  		If p_DeptNo <= 0 Then
			-- raise an exception
			raise 'Parameter Cannot be 0';
	    End If;		
			Select Sum(Salary) into sum_salary From Employee
			Where DeptNo = p_DeptNo;	
		If sum_salary = 0 Then
			raise 'May be No Employee for the DeptNo is not found';
	    End If;		
		return sum_salary;
End;
$$ -- Delimiter
 -- Executing / calling function 
Select GetSumofSalarybyDeptNoWithParameters(-10);

-- We can write a function that is returning Table

Create or Replace Function Get_EmployeesView(p_DeptNo integer)
returns table (
  Emp_EmpNo integer, Emp_EmpNam varchar(200), Emp_Designation varchar(200), Emp_Salary integer
)
Language plpgsql
As
$$
Begin
  -- the return query informs to execution engine that the resultant table will
  -- be generated from the Result of following query
  return query
	Select EmpNo, EmpName, Designation,Salary
	From Employee
	Where DeptNo = p_DeptNo;
End;
$$
select * from Get_EmployeesView(10);


select * from Employee Where DeptNo =10;

-- Lets create a function that will insert a record
create or replace  function insertDepartment(p_DeptNo integer, 
											  p_DeptName varchar(50),
											 p_Location varchar(50),
											 p_Capacity integer) 
											 returns smallint
Language plpgsql											 
As
$$
declare record smallint;
Begin
	Insert into Department(DeptNo, DeptName, Location, Capacity)
	Values
	(p_DeptNo, p_DeptName, p_Location, p_Capacity);
	select count(*) into record from Department
	where DeptNo = p_DeptNo;
	return record;
End;
$$

select * from insertDepartment(70, 'Dept_70', 'Indore', 78);
											 
Select * from Department;

Select * from Employee;

-- Update Employees
  Update Employee Set Salary = Salary +(Salary * 0.03);

-- Function to Update Records from a table 
-- and return No. of records Updated

-- Lets create a function that will insert a record
create or replace  function UpdateEmployee() 
returns smallint  -- void (for no return value)
Language plpgsql											 
As
$$
declare record smallint;
Begin
	Update Employee Set Salary = Salary +(Salary * 0.1);
	return record;
End;
$$

select * from UpdateEmployee();




