-- Creating a User Role for Creating Database 

Create Role maheshadmin With Login PASSWORD 'P@ssw0rd_';
ALTER ROLE maheshadmin CREATEDB;

-- Create database
Create Database Business;

-- Create Table
Create Table Department (
  DeptNo smallint Not Null,
	DeptName varchar(100) Not Null,
	Location varchar(100) Not Null,
	PRIMARY KEY (DeptNo)
);

-- Adding New Column

Alter Table Department Add Column Capacity smallint not null; 

-- Modify the Datatype of the column
Alter Table Department Alter Column DeptNo Type integer;

-- Modify the Table by Adding an unique constraint
Alter table Department Add Constraint DeptNameUniqueConstraints Unique(DeptName); 

-- Create a Simple Table and Add Primary Key with Alter table command
Create table Users(
 UserName char(10) Not null,
 Password varchar(16) not null	
);
-- Mofifying the table for adding Primary key

Alter Table Users
Add Constraint UserNamePrimaryKey Primary Key (UserName);

-- Drop the Constraint 
Alter Table Users
Drop Constraint UserNamePrimaryKey;

-- Drop the table
Drop Table Department;

-- Creating Employee Table with the ForeignKey as DeptNo from the Department Table
-- Rastblish One-to-Many Relationship
Create Table Employee (
 EmpNo integer Not Null,
 EmpName varchar(200) Not Null,
 Designation varchar(200) Not Null,
 Salary integer Not Null, 
 DeptNo integer Not null,
 Primary Key (EmpNo),  -- Primarty Key
 Foreign Key (DeptNo)  References Department(DeptNo) -- Foreign Key	
);






