// reduce function of arrays

// sum of array elements using reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = arr.reduce((acc, currVal) => acc+currVal, 0)
console.log(sum);

// creating seperate callback function for reduce
let sumFunc = (acc, currVal) => acc+currVal;
let sum2 = arr.reduce(sumFunc);
console.log(sum2);

// concat strings using reduce
let arr2 = ['Hello', ' ', 'world', '!'];
let str = arr2.reduce((acc, currVal) => acc+currVal, "");
console.log(str);

// find max in an array using accumulator
let max = arr.reduce((acc, currVal) => acc > currVal ? acc : currVal, arr[0])
console.log(max);




