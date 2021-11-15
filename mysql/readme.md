# MySQL
- Importance of Queries
    - It is used to for Controlling an access of the data from table
    - Provide list of columns for which data is to be retrieved
        - Avoid using 'Select * from table'
            - This will generate a Cursor (aka ResultSet with RowSets in it)
            - The Application Server (Web Servers e.g IIS, Node+Express, etc.) MUST save this in memory
        - It is better to provide column Names and possibly a where condition to reduce the amount of data fetched
            - Avoid using Unnecessary columns          
        - If Possible Generate Column(s) while processing select statement if the column is required only for specific transactions     
            - e.g. If Tax is to be calculated against the Salary only for specific transaction, then generate a 'Tax' column field only for that select statement transaction    
                - e.g. select EmpNo, EmpName, Designation, Salary, Salary * 0.08 as Tax from Employee;
        - Use Scalar Functions when required
            - Scalar Functions are functions those  are used to retrieve a single value from the table
            - This internally scans all records based on condition (if any)
                - All Records are scanned with their values for a specific column or columns
            - The performance of scalar functions  cannot be predicated easily because they are dependent on the volume of records in table        
            - If the Scalar function is used along with the Column name e.g. Count(*) is to be used along with the column name, then make sure that the column is having some impact to generate the result for Count(*) based on with 'where' condition or groups      
    - When Reading data from Multiple Tables Make sure about the following
        - If there is relationship across tables then establish a join or column value match for both table to optimize the query, Otherwise all records from all tables used in query will be read        
        - Simple Join aka Inner Join
        - Left Join
        - Right Join
- In Most of the cases, operations performed on each table needs the Audit e.g. when the record is inserted, updated, deleted, etc.
    - To monitor the auditing, it is recommended that, the triggers are created
        - CREATE Trigger [NAME]
            {BEFORE | AFTER} {INSERT|UPDATE|DELETE}
            on [TABLE-NAME] FOR EACH ROW
            [Trigger-Body]        
        - The Trigger Body  uses an MySQL Object known as 'OLD'
            - This is used to referring OLD values for rows in the table on which the trigger is fired
            - Trigger Event     OLD
                - Insert        Not Available
                - Update        Available
                - Delete        Available
        - Like OLD the 'NEW' object is also available and it is used INSERT and UPDATE                   