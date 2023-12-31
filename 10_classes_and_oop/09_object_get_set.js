const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value+'abc'
    }
}

const tea = Object.create(User)
// tea.email = "t@123"
console.log(tea.email);