// 'Map' Object ==> allows to store key-value pair
//              ==> order is maintained
//              ==> iterable


// Creating an empty map
const myMap = new Map();

// Initializing a Map with key-value pairs
const fruitMap = new Map([
    ['apple', 5],
    ['banana', 3],
    ['orange', 7]
]);
console.log(fruitMap);

// Adding and Retrieving Values
fruitMap.set('grape', 4);
fruitMap.set('grape', 4); // no effect allows unique values
console.log(fruitMap);

// Checking for Key Existance
console.log(fruitMap.has('apple'));
console.log(fruitMap.has('kivi'));

// Deleting a key
fruitMap.delete('banana');
console.log(fruitMap);

// iterating over map

// Iterating over entries
for(const [key, value] of fruitMap.entries()) {
    console.log(`${key}: ${value}`);
}

// Iterating over keys
console.log("");
for(const key of fruitMap.keys()) {
    console.log(key);
}

// Iterating over values
console.log();
for(const value of fruitMap.values()) {
    console.log(value);    
}

// Size of the Map
console.log();
console.log("Size: " + fruitMap.size);


