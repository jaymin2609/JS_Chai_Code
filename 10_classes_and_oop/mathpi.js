const desc = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desc);


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

// const mynewObj = Object.create(null)
const chai = {
    name: 'Orage chai',
    pirce: 500,
    isAvl: true,

    orderCHai: function () {
        console.log("Chai nahi bani");

    }
}

console.log(chai);


const descChai = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descChai);

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: true,

})

const descChai2 = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descChai2);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} - ${value}`);
    }
}



