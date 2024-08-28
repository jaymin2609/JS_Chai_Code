const score = 400

const balance = new Number(100.12745)

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 123.8966
console.log(otherNum.toPrecision(3));

const data1= 1000000
console.log(data1.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);


// +++++++++ Maths ++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,2,5,8));
console.log(Math.max(4,3,2,5,8));
console.log(`Random ${Math.random()}`);
console.log(`Random ${(Math.random()*10) + 1}`);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) ) + min);








