-- Make sure that the Statement is terminated using ;
Create Database Business;
-- Choose the database for the DDL and DML Operations
use Business;

-- Create tables
Create Table Department (
 DeptNo int Primary Key,
 DeptName varchar(200) Not Null,
 Location varchar(100) Not Null
);

-- Modify the table by adding a new column in it
-- Alter Table [TABLE-NAME]  Add Column  [NEW-COLUMN] [Data-Type] [CONSTRAINTS];
Alter Table Department  Add Column  Capcity int not null;
-- Modify the column Name
-- Alter Table [TABLE-NAME]  Change  [OLD-COLUMN-NAME] [NEW-COLUMN-NAME] [Data-Type] [CONSTRAINTS];
Alter Table Department Change Capcity Capacity int not null; 

-- Insert Data in Department Table
insert into Department Values(10, 'IT', 'Pune', 400); 
insert into Department Values(20, 'HR', 'Pune', 8); 
insert into Department Values(30, 'TR', 'Pune', 5); 
insert into Department Values(40, 'SL', 'Pune', 15); 
insert into Department Values(50, 'AC', 'Pune', 25); 
insert into Department Values(60, 'AD', 'Pune', 6); 
-- See all records from table
select * from Department;

-- Delete Query
delete from Department where DeptNo = 50;

-- Adding Employee Table
Create Table Employee (
   EmpNo int Primary Key,
   EmpName varchar(100) Not null,
   Designation varchar(200) Not null,
   Salary int Not Null,
   DeptNo int Not Null,
   Constraint FK_DeptNo -- COnstraint Name
			-- Column from Current Table references the Parent-Table (Column-from-parent-table)
   Foreign Key (DeptNo) references Department (DeptNo)		      		
);

-- Insert data in Employee Table
Insert into Employee Values(101, 'Mahesh', 'Manager', 910000, 10);
Insert into Employee Values(102, 'Tejas', 'Lead', 810000, 20);
Insert into Employee Values(103, 'Vivek', 'Clerk', 710000, 30);
Insert into Employee Values(104, 'Satish', 'Manager', 610000, 40);
Insert into Employee Values(105, 'Mukesh', 'Lead', 510000, 50);
Insert into Employee Values(106, 'Sandeep', 'Clerk', 410000, 10);
Insert into Employee Values(107, 'Vinal', 'Manager', 310000, 20);
Insert into Employee Values(108, 'Tushar', 'Lead', 210000, 30);
Insert into Employee Values(109, 'Kaustubh', 'Clerk', 110000, 40);
Insert into Employee Values(110, 'Ram', 'Manager', 190000, 50);

-- Creating Trigger
-- auto_increment: The Identity Key
-- Default is used to assign default value
Create Table Employee_Audit(
  id int auto_increment Primary Key,
  EmpNo int not null,
  TransactionDate DateTime Default Null,
  action varchar(50) Default Null
);

-- Creating a Trigger before an update takes place in Employee Table
Create trigger before_employee_update
 before update on Employee -- before an update operatyion takes place
 For Each Row	-- the operation will be executed for each row 
	Insert into Employee_Audit
    Set action = 'update',
    EmpNo = OLD.EmpNo,
    TransactionDate = Now();


-- Update Employee
Update Employee Set Salary = Salary + (Salary * 0.002) where EmpNo = 101;


Create trigger after_employee_insert
 After Insert on Employee -- before an update operatyion takes place
 For Each Row	-- the operation will be executed for each row 
	Insert into Employee_Audit
    Set action = 'insert',
    EmpNo = NEW.EmpNo,
    TransactionDate = Now();

Insert into Employee Values(111, 'Ramesh', 'Manager', 990000, 10);
 







