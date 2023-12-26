// Q1) What is the purpose of the map function in JavaScript?
/* 
    - The 'map' function in JS is used to transform each element of an array by applying a provided function to it. 
    - It returns a new array containin gthe results of applying the function to each element of the original array
    - cannot modify original array
*/

// Q2) What are the parameters of the 'map' function
// map parameters - callback
// callback parameters - currentValue, currentIndex, array

// let arr2 = arr1.map(callback);

// Q3) Double each element using map 
let arr = [1, 2, 3, 4, 5, 6];
let doubleNums = arr.map((num) => num*2 );
console.log(doubleNums); // Output: [ 2, 4, 6, 8, 10, 12 ]

// Q4) Create new array of strings using map
let stringArr = arr.map((num) => String(num));
console.log(stringArr); // Output: ['1', '2', '3', '4', '5', '6]

// Q6) Extract specific property from an array object
const users = [
    {id: 1, name: "Ram"},
    {id: 2, name: "Arnav"},
    {id: 3, name: "Laxman"}
]
let userIds = users.map((item) => item.id);
console.log(userIds); // Output: [1, 2, 3]

// Use map with the index parameter to create a new array of squared indices?
let sqIndices = arr.map((ele, index) => index**2);
console.log(sqIndices);

