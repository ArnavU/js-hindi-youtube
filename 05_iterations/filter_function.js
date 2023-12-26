// Q1) What is the function of 'filter' function in JS
/* 
    - The filter function in JavaScript is used to create a new array containing elements that satisfy a provided condition. 
    - It filters out elements that do not pass the specified test and returns a new array with only the elements that meet the criteria.
    - cannot modify original array
*/


// Q2) What are the parametrs of the 'filter' function
// let arr1 = arr2.filter(callback);
// currentValue, currentIndex, and array.

// Q3) Using 'filter' get even numbers from an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = arr.filter((num) => num%2 == 0);
console.log(evenNums); // Output: [2, 4, 6, 8, 10]

// Q4) Use 'filter' to get strings with more than 5 characters from an array of words?
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
let longWords = words.filter((word) => word.length > 5);
console.log(longWords);

// Q5) Use filter to extract objects with a specific property value from an array of objects
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'phone', price: 500 }, 
    { id: 3, name: 'Tablet', price: 300 }
];

const affordableProducts = products.filter((product) => product.price < 600);
console.log(affordableProducts);
// Output: [{ id: 2, name: 'Phone', price: 500 }, { id: 3, name: 'Tablet', price: 300 }]

// Q6) Get elements with even indices from an array?
const numbers = [10, 20, 30, 40, 50];
let evenIndices = numbers.filter((number, index) => index%2===0);
console.log(evenIndices);