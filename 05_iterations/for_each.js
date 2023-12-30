// Q1) What is the purpose of the forEach loop in JavaScript?
/* 
    - The forEach loop in JavaScript is used to iterate over elements in an array, set, or other iterable objects. 
    - It allows you to perform a specified action for each element without the need for an explicit loop counter.
    - forEach loop cannot break prematurely
*/

// Q2) What are Parameters of forEach() method
// arr.forEach(callback) 

// callback parameters - 
// value, index, array

// ------------------------ forEach() on array ------------------------
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index, array) {
  console.log(`Index ${index}: ${number}`);
});

// 3) Applications ?
/*
    arrays
    sets
    map -- first convert the iterable (myMap.keys()) into array using Array.from()
*/

// ------------------------ forEach() on Map ------------------------
let myMap = new Map([
    ["fname", "Arnav"],
    ["lname", "Umakrar"],
    ["age", 20],
    ["city", "Wardha"]
]);

console.log("\nMap keys: ");
Array.from(myMap.keys()).forEach((key) => {
    console.log(key);
})

console.log("\nMap Entries");
Array.from(myMap.entries()).forEach((entry) => {
    console.log(entry);
    
})

// ------------------------- forEach() on Set -------------------------
let mySet = new Set([10, 20, 30]);

console.log("\nSet Values: ");
mySet.forEach((val)=> {
    console.log(val);   
})

console.log("\nArray values: ");
let newArr = [1, 2, 3, 4, 55];
newArr.forEach((ele, index, arr) => {
    // if(ele === 3) { // => not possible
    //     break;
    // } 
    console.log(ele);
})

console.log("\n"+ newArr);
