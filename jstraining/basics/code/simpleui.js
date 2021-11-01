// File Contains Logic

function add(x,y){
    return x+y;
}
function mult(x,y){
    if(x == 0 || y ==0) {
        return 'In Multiplication, the non-zero value is only allowed';
    } 
    return x*y;
}
function sub(x,y){
    return x-y;
}
function div(x,y){
    if(y ==0) {
        return 'The denominator cannot be 0';
    }
    return x/y;
}