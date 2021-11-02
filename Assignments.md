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