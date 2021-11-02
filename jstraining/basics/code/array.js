var values = [];  // Empty Array Declaration
// Push Data in Array
values.push(10);
values.push(20);
values.push(30);
values.push(40);
values.push(50);
// iterate over the array
for (var i in values) {
    console.log('Value at ' + i + 'th location is = ' + values[i]);
}

// remove last record from array
console.log('Removed value from array = ' + values.pop());
// iterate over the array
for (var i in values) {
    console.log('Value at ' + i + 'th location is = ' + values[i]);
}
var data = [1, 11, 12, 42, 21, 32, 81, 97, 76];
console.log('Data in Array ' + data);
// adding recordat the last position in Array
data.push(56);
console.log('Data in Array afetr adding data at the end' + data);
// removing first record from array
console.log('Removed First Element from Array ' + data.shift());
console.log('Data in Array afetr Removing the FIrst Element  ' + data);
// adding value at the first position in the array
data.unshift(100);
console.log('Data in Array after Adding record at the start   ' + data);
console.log();
// sort the array
console.log('==============SORT======================');
console.log(data.sort()); // default to ASCII Arrangements
console.log('===============END SORT=====================');
console.log();
// The Array.sort(Callback), the 'Callback' function is used to sort the 
// array based on the custom logic passed to it

// Sorting on Ascending Order of the numeric values in the 'data' array
// The callback function will iterate over the array
// the a,b representes records from array to compare
// if a-b is +ve, then a is greater than b
// if a-b is -ve, then a is less than b
// is a-b is =, then bothe are same
data.sort(function (a, b) { return a - b; });
console.log('===============SORT BY NUMERIC VALUES=====================');
console.log(data);
console.log('================END SORT====================');

// Reverse the contents of the data array

data.sort(function (a, b) { return b - a; });
console.log('===============REVERSE BY NUMERIC VALUES=====================');
console.log(data);
console.log('================END REVERSE====================');

// Extract a position of the specific recors in array
var mydata = [11,12,34,43,56,78,11,33,4,56,98,76,78];
// indexOf(), scans array from the begining and if the match found
// thye 0 based position of the matched record is returned, if not found the -1
// will be returned
console.log('================FIRST INDEX OF 56====================');
console.log(mydata.indexOf(56));
console.log(mydata.indexOf(561));
console.log('=================END FIRST INDEX===================');

// using the 'lastIndexOf'

console.log('====================================');
console.log(mydata.lastIndexOf(56));
console.log('====================================');
console.log();
// using slice(p1,p2), to divide an array into 2 seperate arrays
// p1: The STart position to read data from array
// p2: The End Position to which data is read from array
console.log('===============USING SLICE=====================');
var firstArray = mydata.slice(0,5);
console.log(firstArray);
var secondArray = mydata.slice(6, mydata.length);
console.log(secondArray);
console.log('====================================');


// The 'splice(p1,p2)'
// p1: The start position from which the array will be started scan
// p2: The delete count for the number of records to be deleted
// return an array of deleted items
console.log('=================USING SPLICE===================');
console.log(mydata.splice(3,5));
console.log('Remaining array ' + mydata);
console.log('====================================');// Remove record from Array using the 'splice()' method





