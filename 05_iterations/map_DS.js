// 'Map' Object ==> allows to store key-value pair
//              ==> order is maintained
//              ==> iterable

// Map can be iterated using -
// 1) for...of loop
// 2) for..in loop -- after using Array.from()
// 3) forEach() -- after using Array.from()

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


// ---------------- Iterating using forEach() and for...in ----------------
// iterate using forEach()
console.log("\nIterate using forEach()");
// Array.from(fruitMap.keys()).forEach((key) => {
//     console.log(key);
// })

fruitMap.forEach((value, key) => {
    console.log(key);
})

// Iterating using for...in
console.log("\nIterate using for...in");
let entryArr = Array.from(fruitMap.entries());
for(let ind in entryArr) {
    console.log(entryArr[ind]);    
}

console.log("\nfruitMap.entries()");
console.log(fruitMap.entries());

console.log("\nArray.from(fruitMap.entries())");
console.log(Array.from(fruitMap.entries()));


