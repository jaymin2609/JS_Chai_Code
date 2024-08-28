const name = "jaymin"
const repoCount = 50

// console.log(name + repoCount + " Hello");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('jaymin-patel')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));


const data = gameName.substring(0,4)

console.log(data);

const data2 = gameName.slice(-8,4)

console.log(data2);

const newString = "    abc    "
console.log(newString);
console.log(newString.trim());

const url = "https://jaymin-patel.com/hitesh%20abc"
console.log(url.replace('%20','-'));

console.log(url.includes('jaymin'));


const dataArray = gameName.split('-')
console.log(dataArray);









