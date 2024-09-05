function SetUserName(userName) {
    this.userName = userName
    console.log("called");
}

function createUser(userName, email, password) {
    // SetUserName(userName)
    SetUserName.call(this, userName)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@chai.com", "1234")
console.log(chai);
