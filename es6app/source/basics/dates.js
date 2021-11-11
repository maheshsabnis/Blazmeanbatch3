let dt = new Date();
console.log(`Full Year = ${dt.getFullYear()}`);
console.log(`Month = ${dt.getMonth()}`); // starts from 0, 0 is January
console.log(`Date = ${dt.getDate()}`);
console.log(`Hours = ${dt.getHours()}`);
console.log(`Minutes = ${dt.getMinutes()}`);
console.log(`Seconds = ${dt.getSeconds()}`);
console.log(`MilliSeconds = ${dt.getMilliseconds()}`);

// The Date Static Methods
console.log(`Date with 'now' ${Date.now()}`); // return Milliseconds from mid-night

// Setting an explicit value for Date
//                 yyyy, mm,dt,hh,min,ss 
let dt1 = new Date(2020,8,11,20,30,11);

console.log(`Full Year = ${dt1.getFullYear()}`);
console.log(`Month = ${dt1.getMonth()}`); // starts from 0, 0 is January
console.log(`Date = ${dt1.getDate()}`);
console.log(`Hours = ${dt1.getHours()}`);
console.log(`Minutes = ${dt1.getMinutes()}`);
console.log(`Seconds = ${dt1.getSeconds()}`);
console.log(`MilliSeconds = ${dt1.getMilliseconds()}`);

let dt2 = new Date();

dt2.setFullYear(2020);
dt2.setMonth(10);
dt2.setDate(12);

console.log(`Year ${dt2.getFullYear()} Month = ${dt2.getMonth()} Date ${dt2.getDate()}`);

// Using the Date Formats (Warning Browser's support)
// If a browse does not support the format the NaN will be returned
// yyyy-mm-dd
let dt3 = new Date('2021-11-11');
console.log(`dt 3 = ${dt3}`);

// ISO format date yyyy-mm
dt3 = new Date('2021-11');
console.log(`dt 3 = ${dt3}`); // print  first day of the month
// ISO Dates for year
dt3 = new Date('2021');
console.log(`dt 3 = ${dt3}`); // return first day of the year

// setting time
dt3 = new Date('2021-11-11T15:12:56'); // date and time  , T is time separator from the Date
console.log(`dt 3 = ${dt3}`);


// short dates mm/dd/yyyy
dt3 = new Date('11/11/2021');
console.log(`dt 3 = ${dt3}`);

// not browser friendly date yyyy/mm/dd
dt3 = new Date('2021/11/11');
console.log(`dt 3 = ${dt3}`);

// Long Dates
// e.g. Nov 11 2021 (Month and day can be in any order)
dt3 = new Date('Nov 11 2021');
console.log(`dt 3 = ${dt3}`);

dt3 = new Date('11 Nov 2021');
console.log(`dt 3 = ${dt3}`);

dt3 = new Date('November 11 2021');
console.log(`dt 3 = ${dt3}`);


let d1 =  new Date('11/11/2021');
let d2 =  new Date('11/11/2020');

console.log(`${d1} and ${d2}` );

// get an absolute difference in milliseconds
let diff = Math.abs(d2-d1);
console.log(`Absolute difference ${diff}`);
// generate Seconds, Hours, Days from the milliseconds
// 1000*60*60*24
// (1000*60) Seconds, (1000*60*60) Minutes, (1000*60*60*24) Hours

// Use the Math.ceil() to round to the nearest up integer

let dayDifferences = Math.ceil(diff/(1000*60*60*24));
console.log(`Day Difference is = ${dayDifferences}`);

