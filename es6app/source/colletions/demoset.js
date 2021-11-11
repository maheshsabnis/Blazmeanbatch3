let setValues = new Set();
// add data

setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add(60);
setValues.add(70);
setValues.add(10); // duplicate
setValues.add("10");

// print the size of the set
console.log(`Size of Set is = ${setValues.size}`); // 8 (duplicate numeric 10 is omitted )
// read all entries
console.log(`Entries ${setValues.entries()}`); // iterator, a collection that represents all data from Set
// ES 7 Iterator Method for reading keys and values both
for (const iterator of setValues.entries()) {
    // 0 is Key and 1 is value from the Iterator
    // the 'entries()' method is used to read Keys and Values both
    console.log(` ${iterator[0]} ${iterator[1]}`);
}


// verify if a record is present into the set
console.log(`Is 80 present ${setValues.has(80)}`); // false
// lets iterate over all keys and values (keys and values are same)
// keys are internal to check the duplicate entry, whereas value is 'value' of the 'key'
console.log();
console.log('Keys');
for (const record of setValues.keys()) {
    console.log(`Key = ${record}`);
} 
console.log();
console.log('Values');
for (const record of setValues.values()) {
    console.log(`value = ${record}`);
} 
