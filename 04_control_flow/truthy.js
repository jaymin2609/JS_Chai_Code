console.log("Thuthy");

const userEmail = "abc@abc.com"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have email");
}

// Falsy Values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

// if (false==0) {
//     console.log("fasle == 0");
// }
// if (false=="") {
//     console.log('fasle == ""');
// }
// if (0=="") {
//     console.log('0 == ""');
// }

// Nullish Coalescing Operato (??) : null, undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);


// Terniary Operator

// condition ? true : false

const icePrice = 100

icePrice <=80 ? console.log("less than 80") : console.log("more than 80");



