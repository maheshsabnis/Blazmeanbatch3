-- Creating Stored Procs
Create Procedure sp_InsertDepartment
(
  p_DeptNo integer, 
  p_DeptName varchar(50),
  p_Location varchar(50),
  p_Capacity integer
)
Language plpgsql
As $$
Begin
	If p_DeptNo <=0 OR p_Capacity <= 0 Then
		Raise 'Pleasse make sure that the DeptNo and Capacity are positive Values';
	End If;
	Insert into Department(DeptNo, DeptName, Location, Capacity)
	Values
	(p_DeptNo, p_DeptName, p_Location, p_Capacity);
End;
$$

-- Call the Stored proc
Call   sp_InsertDepartment(60, 'Dept_60', 'Chennai',900);

Select * from Department;

-- Simple Conditional Transaction Management
-- Not You can use If-Statement to Prevent  
-- an Insert Statement from execution
Create Procedure sp_InsertDepartmentTx
(
  p_DeptNo integer, 
  p_DeptName varchar(50),
  p_Location varchar(50),
  p_Capacity integer
)
Language plpgsql
As $$
Begin
	Insert into Department(DeptNo, DeptName, Location, Capacity)
	Values
	(p_DeptNo, p_DeptName, p_Location, p_Capacity);
	 If p_Capacity <=0 Then
	 	RollBack;
	 Else
	 	Commit;
	 End If;		
End;
$$
Call   sp_InsertDepartmentTx(80, 'Dept_80', 'Chennai',-900);

-- Creating a Procedure for managing DML Operations 
-- under the transactions


 
Create Procedure sp_TableTransaction()
Language plpgsql
As $$
BEGIN
    
	Insert into Department (DeptNo,DeptName,Location,Capacity)
    Values (100, 'System1', 'Pune', 800);
    Insert into Employee (EmpNo, EmpName, Designation,Salary,DeptNo)
    Values (201, 'Neema', 'Manager', 12000, 10);
	 
	Commit;
  
END; 
$$

Call sp_TableTransaction();


Select * from Department;
Select * from Employee;





