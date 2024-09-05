class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createdId() {
        return `123`
    }
}

const jaymin = new User("Jaymin")
console.log(User.createdId());
// console.log(jaymin.createdId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());
// console.log(iphone.createdId());

