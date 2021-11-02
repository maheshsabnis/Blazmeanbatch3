"use strict"

// Global Declaration
var val = 10;
console.log('Val = ' + val);
function changeValFirst(){
    val++;
    console.log('in First function Val = ' + val);
}


 changeValFirst();

 function dodido(){
     val = val * val;
 }
 dodido();
 val =undefined;

 for(var i = 0; i <= 5; i++){
     console.log('In loop i  = ' + i);
 }
i = undefined;
 console.log('Outside of loop i  = ' + i);
 i++;
 console.log('Outside of loop after increament  i  = ' + i);
