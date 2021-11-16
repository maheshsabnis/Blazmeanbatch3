# JavaScript Assignments
# Date: 01-11-2021

1. Create a Simple Calculator like Windows Calculator
2. Create an Array of Departments as [{DeptNo:,DeptName:''}]. Also CReate an Array of Employees as  [{EmpNo:0,EmpName:'', DeptNo:, Salary:''}]
    - Generate a Dropdown using the Departments array
    - Generate a HTML table based on Data in Employees Array
    - When a DeptName is selected from the Dropdown the table should show only Employees from the Employee Array
        - Iterate over the Employee array and Evaluate the 'if' condition in it to select

# Date: 02-11-2021
1. Create a Reference Function Object that will contains following Operations on the following string 

'The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd, and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.'

- Add Following functions in Reference function
    - getBlankSpaces(), must return count of blank spaces in above string (Today)
    - getStatements(), must return count of statements in above string (Today)
    - convertToTitleCase(), must convert first chaqracter of each word in upper-case in above string
    - getCommas(), must return count of comma in above string (Today)
    - getVowels(), must return count and postion of each vowel in above string
    - getWordCount(), must return count of words in above string
    - countSpecificWord(word), this function will accept a word as input parameter and return how many times the word occured in above string. E.g. if word=and, then the method must return the frequency of 'and' in above string
2. (Today) Modify the UIGenerator class mto generate list of radio button and list of checkboxes
    - Note: To select a single redion button, set 'name' attribute of each radio button to same value
    - e.g.
        - <input type="radio" name="r"> <input type="radio" name="r"><input type="radio" name="r"><input type="radio" name="r">       
        - Since the name is same for each radio button, it will form group of radio buttons

# Date 03-Nov-2021
1. Create an Application for Employee Information System for storing the following Information for Employee  (Now)
    - EmpNo: Number
    - EmpName: String
    - DeptName: String
    - Salary: number
    - Designation: String 
- Perform Following Operations on UI (Now)
    - Accept the Information from End-USer with following Validations
        - All Entries are Mandatory
        - EmpNo MUST not be repeated
            - Check it in 'change' event
        - EmpName must be string and strats from Uppercase character. It Must not have digit or special character
        - Select DeptName and Designation from Dropdown list. Generate this dropdown list dynamically
            - Make sure that one DeptName and Designation is selected
    - Save Employee Data in indexedDB (Now)
    - Show data in table from IndexedDB (Now)
        - Generate table dynamically
    - When a row is selected from the table, the selected employee info Must be displayed  in Employee Textboxes and DropDown. This infromation can be edited except EmpNo
    - Make sure that, the Data displayed in Table is shown in following ways based in User's selection
        - Show data in Table Group by DeptName
            - Arange data in table group by DeptName 
        - Show data in Table Group by Designation
        - When a column EmpNo is clicked, the data can be sorted or reversed by EmpNo
    - MAke sure that each row of the tbale has Delete button, when this button is clicked make sure that the record is deleted from indexedDB.                     

# Date: -8-Nov-2021
1. Create a list using ul.li (Today)
    - Each List Item MUST show the Product with its price
    - Let the use drag the li and drop it in other div.
        - When the Drop takes place, the div must add a textbox and a button where and end-user will enter the quantity in textbox. When the button clicked the quantity and price wil b multiplied to show the total dropped Product bill. Likewise, the end-use can select multiple products and finally the Total price of all products will be shown at the botton of the target div.
            - IMP: 
                - Make sure that  one li containing product can be dragged only once.
                - On the target div, the Button must be appended next to the dropped li so that the dropped li can be deleted
                - When the dropped li is removed from the target div, the price must be reduced
            - Reference: https://www.dotnetcurry.com/aspnet-mvc/1039/drag-drop-html5-aspnet-mvc-jquery
2. Apply style on table in such way that when a mouse is hover on a table-row, the background-color, font-size, font-weight, font-family must be changed. When move leave the  table row the style must be removed (Today)
3. Self-Study: Explore ::before, ::after, opacity, Combinators e,g,
    - div > p
        - all paragraphs those are children of div
    - z-index    

# Date: 09-11-2021

NOTE: All TAsks from 1 and 2 MUST be done today

1. Define an array of Employees with 40 Records in it. Each record will have following schema
    - {EmpNo, EmpName, DeptName, Salary, Designation}
2. Generate a Table based on the Employees array. Below the table show a Pagination for numbering 1 to 8. The Table for each Page will show 5 records (8 pages * 5 records per page = 40)
    - Generate Pagination Numbers Based on Number of records in the array
    - When a Page Nummber is clicked, the next bunch of 5 records must be loaded into the table
    - The Pagination Must have 'First' and 'Last' Page
        - First 1 2 3 4 5 6 7 8... Last
        - If you are at Last Page the 'Last' Must be disabled the same effect must be shown for 'First' page
3. Each row of the table MUST contain an 'Edit' button. When this button is clicked, the selected Employee details for the row must be shown in 'Modal-Dialog'. The End-user can now be able to Modify the Employee Details. Once the 'Save' button in the Modal dialog is clicked, the Modal dialog must be dismissed and updated values MUST be shown back in the table (If possible then today, else MUST be completed by 12-Nov-2021)                     

# Date: 10-11-2021
1. Create an Array of Products as (Today)
    - ProductId:string, ProductName:string, CategoryName:string, Price:string, Manufacturer:string
    - The Array MUST contain 50 records
    - Display all records in a table
    - Above the table add Radio Buttons for
        - CategoryName, Manufacturer
    - When a specific Radio button is clicked, the table should show record in a group by the selected Radio Button
    - On the Top of the Table add a Text Element and when either CategoryName or ProductName or Manufacturer value is entered in this Text element, the table MUST show records matching with the search value entered into the Text Element (Possible today else Max by Friday)         

# Date: 11-11-2021 (1 to 3 all to be done today)
1. Create a HTML page that will have two Date Pickers and two Time Pickers. 
    - Form Date [Date Picker] From Time [Time Picker]
    - To Date [Date Picker] To Time [Time Picker]
2. Add button below the Date and Time pickers. 
3. When From Date, From Time and To Date and To Time is selected and the button is Clicked, show the Date Difference as follows
    - x Years x Months x Days x Hours x Minutes x Seconds 
- Algorithm
    - If Months Difference is greater than and equal to 12, the add 1 in year
    - If Days Difference is greater than 30/31 (based on month) add 1 to Month
    - If the year is Leap Year then for February, 29 days Must be used else use 28 days
    - If Hours difference is greater than or equal than 24, then add 1 in days
    - If Minutes difference is greater than or equal 60, then add 1 in hours
    - If Seconds difference is greater than or equal 60, then add 1 in minutes
- Use Math objects, especially use Math.abs() function

4. Create a Map() that wil be used to store Employees information received from the UI and then perform following operations on the Employee data from Map() (Possible on Today or else max by Friday [12-11-2021])
    - Print Sum of Salary per Department
    - Print Max and Second Max Salary Per Department
    - Print Tax for each Employee as 30% for Salary More than Rs 5Lakh and 25% Less than or equal to 5Lakh.
    - Delete an Employee based on EmpNo received from the UI

# Date: 12-11-2021
1. Complete the application in 'application' folder of es6app folder with UI and Logic
# Date: 15-11-2021, 
1. start the table creation based on the Problem Statement given in ProjectStatement.md

# Date: 16-11-2021

1. Create a Database Called as Ecom with Following tables (Today from Task 1 to 4)
    - Category Table
        - Category
            - CategoryId, Varchar (30)  Primary Key,
            - CategoryName varchar (100) Not Null
            - Manufacturer Varchar (100) Not Null
    - Product Table
        - ProductRowId, Identity Key Primary Key,
        - ProductId varchar(100) Unique Not Null,
        - ProductName varchar(100) Not Null,
        - Price int Not Null,
        - QuantityAvailable int not null,
        - CategoryId Varchar(30) Not Null Foreign Key
    - Customer
        - CustomerId int Primaty Key,
        - CustomerName varchar(200) Not null    
    - Order
        - OrderId int Primary Key,
        - ProductId int Not Null Foreign Key
        - OrderedDate datetime not null,
        - QuantityOrdered int not null,
        - TotalPrice int Not Null
        - CustomerId int Not null Foreign Key

2. Insert data into Category and Product Tables
3. Create a Stored Procedure to Create an Order for Product
    - Customer can place order
    - Make sure that, the QuantityAvailable for the product is deducted when an Order is placed for the ProductId successfully.
    - If the Order Placing is failed, then the Update in QuantityAvailable for the ProductId Must be Rolled Back
    - Calculate the TotalPrice for the order
4. Create a Stored Procedure that will return orders placed by the Customer as follows3 
    - CustomerId, CustomerName, ProductName, CategoryName, OrderedDate, TotalPrice
                    




