let myName = "Jaymin       "

// String.prototype.trueLength = function () {
//     return this.trim.length()
// }

console.log(myName.length);
// console.log(myName.trueLength());

let myHeros = ["Thor", "Ironman", "Spiderman"]

let herPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpderPower: function () {
        console.log(`Spidy power is ${this.getSpderPower}`);
    }
}

Object.prototype.hitesh = function () {
    console.log("Hitesh is all");
}

Array.prototype.heyHitesh = function () {
    console.log("Hello from jaymin");

}

// herPower.hitesh()

myHeros.hitesh()
myHeros.heyHitesh()
// herPower.heyHitesh()


const User = {
    name: "chai",
    email: "chai@chai.com"
}
const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvl: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

// teacher.__proto__ = User

// moder syntax
Object.setPrototypeOf(teachingSupport, teacher)


let anothetUseName = "chai        "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);


}

console.log(anothetUseName.trueLength());
"jaymin".trueLength()
"ice tea".trueLength()
