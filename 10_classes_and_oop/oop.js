const user = {
    userName: "Jaymin",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function () {
        // console.log(`User name is : ${this.userName}`);
        console.log(this);
    }
}



// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function UserNew(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);

    }
    return this;
}

const userOne = new UserNew("Jaymin", 12, true)
const userTwo = new UserNew("Chai aur code", 11, false)

console.log(userOne.constructor);
console.log(userOne.greeting());
// console.log(userTwo);



