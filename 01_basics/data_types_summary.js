// Primitive

// 7 Types : String, Number, Boolean, Null, Bigint, Undefined, Symbol

const score = 100
const scoreVal = 100.3

const isLoggedIn = true
const outTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 24142343523523523525n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","hanuman","doga","krish"];


let myObj = {
    name:"Abc",
    age:32
}

const myFun = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-premitive)

let myYoutubeName = "abc.com"

let anotherName = myYoutubeName

anotherName = "chai-code"

console.log(anotherName);
console.log(myYoutubeName);

let user1 = {
    email:"abc@gmail.com",
    upi:"abc@ok"
}

let user2 = user1

user2.email="xyz@gmail.com"
console.log(user1);
console.log(user2);



