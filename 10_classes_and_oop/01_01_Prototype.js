/*
    - In JavaScript, the prototype is an internal object that every object has, and it's used to implement inheritance and shared properties and methods among objects. 

    - Every object in JavaScript is associated with another object called its prototype. 
    - This forms a chain of objects, known as the prototype chain.

    - Functions in JavaScript have a special property called prototype. 
    - When you create an object using a constructor function with the new keyword, the newly created object inherits from the constructor function's prototype.
*/


function Animal() {
    this.sound = "Animal Sound";
}

Animal.prototype.makeSound = function(){
    console.log(this.sound);
}

function Dog() {
    this.sound = "Woof";
}

Dog.prototype = new Animal();
let myDog = new Dog();

myDog.makeSound();
console.log(Animal.prototype);
console.log(Dog.prototype);
console.log(myDog.__proto__);
console.log(myDog.prototype);


// function Person(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// }

// Person.prototype.getFullName = ()=> {
//     console.log(this.fname, this.lname);
// }

// Person.prototype.type = "human";

// let person1 = new Person("Arnav", "Umarkar");


// // ###################### console.logs
// console.log("Person.prototype =>", Person.prototype);
// console.log("person1.__proto__ =>", person1.__proto__);
// console.log();

// console.log("person1.__proto__.type = 'superhuman'");
// person1.__proto__.type = "superhuman"; // => .__proto__ can change the prototype properties of the constructor function
// console.log("person1.__proto__ =>", person1.__proto__);

// console.log("person1.type =>", person1.type);
// // console.log(Person.type); // instead use Person.prototype.type
// console.log("Person.prototype.type =>", Person.prototype.type);

// console.log();
// // person1.__proto__.type = "inhuman";
// console.log('Object.setPrototypeOf(person1, {type: "inhuman"})');
// Object.setPrototypeOf(person1, {type: "inhuman"}); // => overwrites the inherited prototype from constructor function || limited to the instance (does not affect the constructor function's prototype)
// console.log("person1.type =>", person1.type);
// console.log("Person.prototype.type =>", Person.prototype.type);

// console.log();
// console.log("person1.__proto__ =>", person1.__proto__);
// console.log("Person.prototype =>", Person.prototype);
