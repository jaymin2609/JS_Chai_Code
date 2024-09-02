function addUser(num) {
    return num + num
}

addUser.power = 2

// console.log(addUser(5));
// console.log(addUser.power);
// console.log(addUser.prototype);


function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);

}

// const chai =  createUser("chai", 25)
// const tea =  createUser("tea", 55)

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 55)

console.log(chai.printMe());
console.log(chai.increment());
console.log(chai.printMe());

