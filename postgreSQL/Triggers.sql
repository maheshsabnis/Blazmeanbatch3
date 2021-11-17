-- Creating Triggers
-- Firts Create Table for Audit
 

Create Table Employee_Audit(
  id Serial Primary Key,
  EmpNo integer not null,
  TransactionDate Date Default Null,
  action varchar(50) Default Null
);
 -- Create a Function that will be
 -- having return type as the Trigger
 -- This will be used by the Trigger
 -- To Exercute when the trigger is fired
Create Function sp_Insert_Employee_Audit()
Returns Trigger
Language plpgsql
As $$
Begin
	Insert Into Employee_Audit (EmpNo, TransactionDate, action)
Values (OLD.EmpNo, Now(), 'Update');
return New; -- return the new record
End;
$$

-- Create a Trigger
Create trigger before_employee_update
Before Update On Employee
For Each Row 
 Execute Procedure sp_Insert_Employee_Audit();
 
 Select * from Employee_Audit;
 
 Select * from Employee Where EmpNo = 101;
-- Update record in  Employee
Update Employee 
Set Salary = 500000 where EmpNo = 101;
