let score = "hitesh"
console.log(typeof null); // => object --> historical mistake || it is quirk
console.log(typeof undefined); // => undefined

//console.log(typeof score);
//console.log(typeof(score));

console.log("A");
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("A");

console.log(typeof NaN); // => number
/*
                                                        ----exceptions----
typeof NaN --> number

parseInt() - cannot convert true and false to numbers whereas Number() can
Number() - cannot convert "33abc" into number whereas parseInt() can
*/

// typeof()
// null => object || but null is a datatype || quirk
// undefined => undefined
// NaN => number

console.log("Number(null)")
console.log(Number(null));
console.log(Number(undefined))

// Number()
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

// parseInt()
// "33" => 33
// "33abc" => 33
// true => NaN; false => NaN

console.log("");
console.log(parseInt("33abc"));
console.log(parseInt(true));

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); => true

// boolean()
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); => -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// null is treated as a number 0
console.log(isNaN(undefined)); // => true
console.log(isNaN(null)); // => false
console.log(isNaN(1)); // => false