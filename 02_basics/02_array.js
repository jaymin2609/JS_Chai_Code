const marvelHeros = ["Thor","Iron Man","Spider Man"]
const dcHeros = ["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const simpleArr = anotherArr.flat(Infinity)
console.log(simpleArr);

console.log(Array.isArray("Jaymin"));
console.log(Array.from("Jaymin"));
console.log(Array.from({name:"abc"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
