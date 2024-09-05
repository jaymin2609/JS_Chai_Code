// E6

class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc1234`
    }

    userNameCapital() {
        return `${this.userName.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@chai.com", "123")

// console.log(chai.encryptPassword());

// console.log(chai.userNameCapital());


// Behind the scene

function UserFun(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;

}

UserFun.prototype.encryptPassword = function () {
    return `${this.password}abc1234`
}
UserFun.prototype.userNameCapital = function () {
    return `${this.userName.toUpperCase()}`
}

const tea = new UserFun("tea", "tea@tea.com", "123")

console.log(tea.encryptPassword());

console.log(tea.userNameCapital());
