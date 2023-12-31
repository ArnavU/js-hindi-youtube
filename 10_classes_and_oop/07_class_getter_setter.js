class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // using _email avoids recursion as "this.email = email; fff f " is calling set()
    }

    get password(){
        // return `${this._password}hitesh`
        return `You cannot access the password sorry`;
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);