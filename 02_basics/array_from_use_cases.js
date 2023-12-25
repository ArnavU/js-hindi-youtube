// ------------------- Array.from() -- use cases -------------------

// 1. Converting NodeList to Array:
// const nodeList = document.querySelectorAll('p');
// const arrayFromNodeList = Array.from(nodeList);

// console.log(arrayFromNodeList); // An array containing all <p> elements

// 2. Creating Arrays from Strings:
const str = 'Hello';
const charArray = Array.from(str);

console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

// 3. Mapping Function over Iterable:
// Example: Use a mapping function with Array.from()
const numbers = [1, 2, 3];
const squaredNumbers = Array.from(numbers, num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9]

// 4. Range of Numbers:
// Example: Generate an array of numbers in a given range
const rangeArray = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(rangeArray); // Output: [1, 2, 3, 4, 5]

// 5. Copying an Array:
// Example: Shallow copy an existing array
const originalArr = [1, 2, 3];
const copiedArr = Array.from(originalArr);

console.log(copiedArr); // Output: [1, 2, 3]

// 6. Working with Set:
// Example: Convert a Set to an Array
const set = new Set([1, 2, 3]);
const arrayFromSet = Array.from(set);

console.log(arrayFromSet); // Output: [1, 2, 3]

// 7. Handling Arguments Object:
// Example: Convert the arguments object to an array
function exampleFunction() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

exampleFunction(1, 'hello', true); // Output: [1, 'hello', true]

// 8. Customizing Behavior with a Mapper Function:
// Example: Use a mapper function to double each element
const originalArray = [1, 2, 3];
const doubledArray = Array.from(originalArray, num => num * 2);

console.log(doubledArray); // Output: [2, 4, 6]