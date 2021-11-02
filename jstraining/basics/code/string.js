var strData =  "I am the string data type in JavaScript";

console.log('=================Upper Case===================');
console.log(strData.toUpperCase());
console.log('====================================');
console.log('================Lower Case====================');
console.log(strData.toLocaleLowerCase());
console.log('====================================');

console.log('====================================');
console.log(strData.indexOf('in'));
console.log('====================================');

console.log('====================================');
console.log(strData.lastIndexOf('va'));
console.log('====================================');

console.log('====================================');
console.log(strData.substr(5,10));
console.log('====================================');
// // read every character 
// for(var s in strData) {
//     console.log(strData[s]);
// }

var names = ["Sean Connary", "George Luznaby", "Roger Moore", "Tromthy Dalton", "Pierce Brosnon", "Daniel Craig"]; 
// print string having length more than 17
for(var n in names){
    if(names[n].length >12) {
        console.log('====================================');
        console.log(names[n]);
        console.log('====================================');
    }
} 
