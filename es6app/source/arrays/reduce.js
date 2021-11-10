let values = [10,20,30,40,50,60,70,80,90,100];

let sum = 0;
// Using forEach
values.forEach((n,i)=>{
    sum+=n;
});
console.log(`Sum = ${sum}`);


// Using Array.reduce();

// Case 1: Summation of records in Array
// previousValue: The Result of previous iteration, if the 0th iteration then this is 'Undefined '
// currentValue: The current record being processed
// currentIndex: The current position in Array
// array: The Array being processed 
var resSum = values.reduce((prevSum,currentVal, index, val)=>{
    console.log(`prevSum = ${prevSum} currentVal = ${currentVal} index = ${index} vall = ${val}`);
    return prevSum + currentVal;
});

console.log(`Using array.reduce() sum = ${resSum}`);

// Case 2: Finding out a frequency of a record in array

let records = ['A', 'B', 'C', 'D', 'E', 'D', 'C', 'A', 'D', 'B', 'A', 'E', 'F', 'D', 'A', 'C','D', 'B', 'A', 'E', 'C'];

// the prevRec will be the final state of the array that stores the result with frequency 
let frequency = records.reduce((prevRec,curRec)=>{
    console.log(`preRec = ${JSON.stringify(prevRec)} and curRec = ${curRec}`);
    // 'in' operator for if statement is same as iteration till end-of-records in collection 
    if(curRec in prevRec) {
        // if prevRec matches with curRec then the result will be stored in prevRec array
        prevRec[curRec]++; // if the match found of prevRec with curRec then increment  
        console.log(`In if True ${JSON.stringify(prevRec)}`);
    } else {
        prevRec[curRec] = 1; // the frequency is 1
    }
    // the final state of the array that will show frequency of each record in array 
    return prevRec; 
},{}); // the second parameter is 'initialValue' i.e. the array on which iteration will takes place 

console.log(`Frequency Per Record in Array is = ${JSON.stringify(frequency)} `);

// Case 3: Create a group of records from a complex array based on group property

let Employees = [
    {eno:1,ename:'A',dname:'D1'},
    {eno:2,ename:'B',dname:'D2'},
    {eno:3,ename:'C',dname:'D3'},
    {eno:4,ename:'E',dname:'D1'},
    {eno:5,ename:'F',dname:'D2'},
    {eno:6,ename:'G',dname:'D3'},
    {eno:7,ename:'H',dname:'D1'},
    {eno:8,ename:'I',dname:'D2'},
    {eno:9,ename:'J',dname:'D3'},
    {eno:10,ename:'K',dname:'D1'},
    {dname:'D4'}
];

// records: Array on which group will be created
// property: The name of the property based on which group will be created  
function crateEmployeeGroupByDname(records,property){
    // groupResult: Initial State {}
    // record: The current record to be read
    let result = records.reduce((groupResult, record)=>{
        console.log(`Current State ${JSON.stringify(groupResult)} and current record ${JSON.stringify(record)}`);
        // read the key on which the group will be created on the current record
        let key = record[property]; // currentRecord[dname] this will be value of the property for the record
                                    // key will be D1, D2, D3
        console.log(`Key of the record = ${key}`);

        // match each record with the previous record key in the groupResult state
        // because groupResult has the resultant records
        if(!groupResult[key]){ 
            groupResult[key] = []; // if the match does not found based on key makes the resultant as empty
        }
        // if found then add the matched record in the resultant state
        groupResult[key].push(record);
        console.log(`After match found for push state is = ${JSON.stringify(groupResult)}`);
        // return the final group state
        return groupResult;

    },{});

    return result;
};

let group = crateEmployeeGroupByDname(Employees, 'dname');
console.log(`Group by Property is = ${JSON.stringify(group)}`);