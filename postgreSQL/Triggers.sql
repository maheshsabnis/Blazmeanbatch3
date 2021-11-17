-- Creating Triggers
-- Firts Create Table for Audit

Create Table Employee_Audit(
  id Serial Primary Key,
  EmpNo integer not null,
  TransactionDate Date Default Null,
  action varchar(50) Default Null
);
