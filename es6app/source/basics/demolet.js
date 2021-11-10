
function MyFunction(x){
    if(x) {
        let y = 0;
        console.log('In If Statement y = ' + y);
    }
    y++;
    console.log('Out of If Statement y = ' + y);
}

MyFunction(true);
MyFunction(false);

for (let index = 0; index <10; index++) {
     console.log('In for..loop index = ' + index);
}

index++;
console.log('Outside of for..loop index = ' + index);
