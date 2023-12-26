// Q1) What is the purpose of 'reduce' function in JS?
/* 
  The reduce function in JavaScript is used to iterate over an array and accumulate a single result by applying a provided callback function on each element of the array 
  - cannot modify original array 
*/

// Q2) Parameters of reduce function? 
// array.reduce(callback, initialValue);

// Q3) Parameters of callback? 
// accumulator, currentValue, currentIndex, and array.

// Q4) sum of array elements using reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = arr.reduce((acc, currVal) => acc+currVal, 0)
console.log(sum);

// Q4) creating seperate callback function for reduce
let sumFunc = (acc, currVal) => acc+currVal;
let sum2 = arr.reduce(sumFunc);
console.log(sum2);

// Q5) concat strings using reduce
let arr2 = ['Hello', ' ', 'world', '!'];
let str = arr2.reduce((acc, currVal) => acc+currVal, "");
console.log(str);

// Q6) find max in an array using accumulator
let max = arr.reduce((acc, currVal) => acc > currVal ? acc : currVal, arr[0])
console.log(max);




