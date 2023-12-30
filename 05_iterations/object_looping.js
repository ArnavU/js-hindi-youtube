


// 1. for...in Loop:
/*  
    - The for...in loop iterates over all enumerable properties, including inherited ones. 
    - It's important to use hasOwnProperty to filter out inherited properties.
*/
console.log('for...in loop');
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
}

// 2. Object.keys():
/*
    - The Object.keys() method returns an array of a given object's own enumerable property names. 
*/
console.log("\nforEach() on Object.keys()");
Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

// 3. Object.values():
/*
    - The Object.values() method returns an array of a given object's own enumerable property values.
*/
console.log("\nforEach() on Object.values()");
Object.values(person).forEach(value => {
    console.log(value);
});

// 4. Object.entries():
/*
    - The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs.
*/
console.log("\nforEach() on Object.entries()");
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
})

// 5. Object.getOwnPropertyNames():
/*
    - The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object.
*/
console.log("\nforEach() on Object.getOwnPropertyNames()");
Object.getOwnPropertyNames(person).forEach((key) => {
    console.log(key, person[key]);
})
console.log();

/*
Non-enumerable Properties:

    - Non-enumerable properties are not included when iterating over the properties of an object using for...in or methods like Object.keys().
    - Some built-in properties of objects (e.g., prototype methods) are often non-enumerable.
*/
const myObject = {
    prop1: 'value1',
    prop2: 'value2'
};

// Making prop2 non-enumerable
Object.defineProperty(myObject, 'prop2', {
    enumerable: false
});

for (const key in myObject) {
    console.log(key); // Output: prop1
}

console.log(Object.keys(myObject)); // Output: ['prop1']