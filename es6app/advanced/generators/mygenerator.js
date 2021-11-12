// the generator function
function* dataGenerator(start=0,end=Infinity,step=1){
    // define logic
    // the variable that will be used to maintain
    // the record of entries read and processed from the 
    // input collection
    let iterationCount = 0;

    // use a loop for reading entries from the collection
    for(let i = start; i<=end; i+=step){
       // increment the iteration count
       console.log(`Iteration Count ${iterationCount} `);
       iterationCount++;
       console.log(`Sequence Record ${i} `);

       // yield the record
       yield i;  
    } 
    // return the iteration value
    return iterationCount;
};

// define a input collection
let numbers =  [10,20,30,40,50,60,70,90];

let objArray = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'}
];

// define a sequence generation on input collection
// Start from record at 0th index i.e. 10
// go upto the end of array i.e. last index 70
// start reding entries by adding 20 
let generator = dataGenerator(numbers[0], numbers[numbers.length - 1], 5);
// start an iteration
let dataReader = generator.next(); // Check if the resultant generator Sequence is non-Empty
// start iterating over the sequence using generator
// the while loop will execute the 'next()' based on the 'for..loop' used by
// the generator function
// start reading till the end is not reached 
while(!dataReader.done){
    // dataReader.value, use and process the current record generated from teh sequence
    console.log(`The Current value read-precessed-returned is = ${JSON.stringify(dataReader.value)}`);
    // move to the next
    dataReader = generator.next();
}