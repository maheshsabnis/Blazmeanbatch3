-- A Simple Stored Procedure that returns records from Employee Table

use Business;

DELIMITER //
create procedure getEmployees()
BEGIN
	select * from Employee;
END //
DELIMITER ;

-- Execute the stored Procedure
call GetEmployees();
-- Stored Procedure with input Parameter

DELIMITER //
create procedure getEmployeesByDesignation(
  IN desig varchar(50)
)
BEGIN
	select * from Employee where Designation = desig;
END //
DELIMITER ;

Call getEmployeesByDesignation('Manager');
-- Removing the Procedure
Drop Procedure getEmployeesByDesignation;

-- Lets create a Stored Procedure that accepts Multiple Parameters and perform Insert Operation

DELIMITER //

create Procedure sp_CreateDepartment(
  IN DeptNo int,
  In DeptName varchar(200),
  In Location varchar(100),
  In Capacity int
)
Begin
	Insert Into Department (DeptNo, DeptName, Location, Capacity)
    Values
    (DeptNo, DeptName, Location, Capacity);
End  //
DELIMITER ;

CALL sp_CreateDepartment(70, 'WH', 'Pune', 300);

-- SP using Scalar Function
-- SP to Calculate SUM of Salaries
DELIMITER //
create procedure sp_GetSumSalaryByDeptNo(
  IN dno int
)
Begin
	select sum(Salary) from Employee where DeptNo=dno;
End //

DELIMITER ;
-- Using Scalar function in SP provide an 'IMPLICIT RETURN VALUE' from SP
Call sp_GetSumSalaryByDeptNo(30);

-- Using an Explicit Return
DELIMITER //
create procedure sp_GetSumSalaryByDeptNoReturn(
 IN dno int,
 INOUT sumsal bigint 
)
Begin
 select sum(Salary) into sumsal from Employee where DeptNo=dno;
End //
DELIMITER ;

-- Call the SP by passing the parameter as input and receive it as output parameter (?)
-- the INOUT is input and output parameter, so MySQL using @<PARAMETER-NAME> syntax for INOUT and OUT parameters
Call sp_GetSumSalaryByDeptNoReturn(10, @SumSalary);
Select @SumSalary;

-- Write a SP with IF- Statement
-- Its is Hightly recommended that the parameter name Should Start from 'p'
-- The 'SET' is the Operator in MySQL to assign a default value or a new Calculated value to variable / parameter
DELIMITER $$
create procedure  getCountOfEmployeesByDeptNo(
  IN pDeptNo int,
  OUT pCount int
)
BEGIN
	IF pDeptNo > 0 THEN
		select count(*) as pCount from Employee where DeptNo=pDeptNo;
	ELSE
		set pCount = 0;
    end if;
   -- select @pCount;  -- return the value when the Procedure called
END $$
DELIMITER ;

drop procedure getCountOfEmployeesByDeptNo;

Call getCountOfEmployeesByDeptNo(-40, @pCount);
select @pCount;


select count(*) from Employee where DeptNo=20;


-- Perforing the trsanctions in Stored Proc
-- DECLARE a keyword that is used to declared lcoal variable 
DELIMITER $$
create procedure sp_TableTransactions()
BEGIN
	-- Create an Exception Listener for SQL Exception so that the transaction will rolled back when an exception is thrown
    -- if an sqlexception is occured then the exception will be handled for rollbacking transactions and the control 
    -- will exit the SP
    DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK;
	-- Create a Transaction Bundler, means inform the MYSQL Engine that 
    -- SQL statements are the part of DB Transactions
    START TRANSACTION;
		Insert into Department (DeptNo, DeptName, Location,Capacity) values (90, 'Test1', 'Pune', 900);
		Insert into Employee (EmpNo, EmpName, Designation,Salary, DeptNo) values (301, 'Ajay', 'Manager', 23000, 50);
	-- if all statements are executed successfully, the COMMIT else rollback 
    COMMIT;     
END $$
DELIMITER ;

Call sp_TableTransactions();









