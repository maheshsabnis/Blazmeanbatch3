# Programming with HTML 5

1. New Input Elements
    - number, date, time, month, range, color, email, tel.
    - Properties for Input Elements
        - placeHolder, the watermark in input elements
        - min, max, the range of values for 'number' and 'range'
        - Validation Properties
            - required
            - pattern
            - minlength
            - maxlength
2. New Form Elements
    - datalist
    - article
    - API based Form Elements
        - canvas
        - svg, scalabale vector graphics
        - audio
        - video
3. Storage aka Web Storage APIs
    - localStorage
    - sessionStorage
    - indexedDB
4. APIs
    - Drag-Drop
    - Geolocation
    - Web Socket
    - Web Worker

# HTML 5 based Media Libraries for Charts
    - d3js, c3js, highcharts, dimplejs
        - uses svg internally
    - HTML 5 based audio and video in youtube.com
        - Works on Media Server and Strreaming    
# Active Users of HTML 5
    - Angular, React, Vue, Ember, Material UI Libraries, etc.        

# HTML 5 as a Techonology
    - HTML 5 is a enhancement in
        - HTML Tags
        - With Inline JavaSctipt
        - With inlibe CSS
    - input:number
        - only for number from min to max values restrictions
    - input:range
        - a slider for min to max with step
            - default step is 1        
    - HTML 5 Advantages
        - In-built Support for the Validations using nattive inline attributes   
        - required, minlength, maxlength, pattern     
        - These validations will work only for HTML form  
        - Each Form element which is supposed to be validated MUST have 'name' attribute
        - The Form MUST have the 'submit' button 

    - HTML 5 API Programming
        - Storage APIs
            - sessionStorage
                - The Data is available for the page which is loaded from the same Server-Url each time
                    - e.g. if Server-URL is : https://www.myserver.com/person.html
                    - The localStorage will be available for person.html only when it is responded from https://www.myserver.com  
                        - This is called as 'SAME ORIGIN POLICY'
                - Store data in Key:Value pair
                - Key is string, Value can be string, number, date, array, object
                - Volatile Storage
                    - If the browser is closed the data is cleared from the storage
                - methods
                    - sessionStorage.setItem('KEY', value);
                    - sessionStorage.getIterm('KEY'); , this will return value of key
                    - sessionStorage.clear(); remove all data from sessionStorage
                    - sessionStorage.removeItem('KEY'); , the value will be removed for the key
                    - sessionStorage.length, property for count of records in sessionStorage    
                    - sessionStorage.key('KEY'), chekc if the key is available
                - Advantages
                    - Use this to store data for the page, and work with it without posting data back to server again and again    
            - localStorage
                - Same as sessionStorage, except that data is not removed even the browser is closed
                - This alos uses the 'SAME ORIGIN POLICY'
                - If the page is loaded from the same origin, the previous created localStorage will be reloaded with data
            - Both localStorage and sessionStorage can store max 5mb of data
            - The 5 mb is larger tha the max size of data stored in cookie    
        - indexedDB
            - Browser's Database
                - window.indexedDB
                    - The object that will be used to create database and Tables in browser    
                    - 'open()' 
                        - a method that will create an indexedDB  is not exists and if exists, the indexedDB is open for transactions
                    - Event Callbacks
                        - onupgradeneeded
                            - Used to create ObjectStore (aka Table) in indexedDB
                        - onsuccess
                            - If the indexedDB is created, opened successfully and upgraded, then this will be executed
                                - OnSuccess Event object, returns a Transaction Object  to perform transactions on Object Store 
                                     - add()
                                        - To Add
                                     - put()
                                        - To Update
                                     - delete()
                                        - To delete
                                     - get()
                                        - To Read   
                                     - openCursor()
                                        - LIke a database reader to read all records from the ObjectStore from first-to-last 

                        - onerror
                            - if an error occured for created, opened successfully and upgraded operations
                - ObjectStore
                    - An Object of the type IObjectStore. This contains the Table with schema
                    - The Object Store is created using  createObjectStore() method of indexedDB reference inside the 'onupgradeneeded'
                    - The 'createIndex()' method of ObjectStore is used for defining schema for the ObjectStore         
                - General Steps for performing Transactions
                    - Open IndexedDB
                    - Set the Transaction Object
                        - readwrite
                        - write
                        - read
                    - Call Transaction method on the ObjectSTore
                        - add(), put(), delete(), get()
                    - SUbscribe to the event
                        - onsuccess, onerror                      
