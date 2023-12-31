const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    let str = "some string"; // private to this function cannot be accessed  outside || used for internal processing
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // => no need || by default "this" is returned
}

// if new keyword is not used both the variables will point, use and modify the same instance
// and "this" will refer to the global object (window object)
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

function newfunc() {
    let fname = "Arnav";
    this.lname = "Umarkar";

    console.log(fname, this.lname);
    // no need of explicit "return this"
}
let func = new newfunc(); // func contains the context of the new instance "this"

// console.log(func.lname);


// ######################

// method to ensure that new instance is always created
function Person(username) {
    // Check if 'this' is an instance of User
    if (!(this instanceof Person)) {
        return new Person(username);
    }

    this.username = username;
}

let  person1 = Person("Abcd")
console.log(person1);