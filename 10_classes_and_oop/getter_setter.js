class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get password() {
        return `${this._password}jaymin`
    }
    set password(val) {
        this._password = val
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(val) {
        this._email = val
    }
}

const jaymin = new User("abc@abc.com", "12as3")
console.log(jaymin.password);
jaymin.password = "34fa"
console.log(jaymin.password);
console.log(jaymin.email);
