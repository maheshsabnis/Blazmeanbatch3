let firstName = "Mahesh";
let middleName = "Rameshrao";
let lastName = "Sabnis";

// traditional concatenation
// \n the next line
let fullName1 =  firstName + ' \n ' + middleName + ' \n ' + lastName;
console.log('====================================');
console.log('Traditional Concatenation ' + fullName1);
console.log('====================================');

// Using ES 6 String Interpolation or Template String
// the Template string maintains the 'state' of string object e.g. new-line on
// pressing 'enter'
let fullName2 = `The First Name ${firstName} 
                 The Middle Name ${middleName} 
                 The Last Name ${lastName}`;
console.log('====================================');
console.log(`Using Template String ${fullName2}`);
console.log('====================================');