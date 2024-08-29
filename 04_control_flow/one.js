console.log("controll flow");

// const isUserLoggedIn = true
// const temp = 52

// if (temp<50) {
//     console.log("less than 50");
// }else{
//     console.log("temp is greater than 50");
// }

// const score = 200

// if (score>100) {
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// console.log(`user power ${power}`);

const balance = 1000

// if (balance>500) console.log("Test"),console.log("Test2"); // comma is not good

// if (balance<500) {
//     console.log("Less than 500");
// }else if(balance<750){
//     console.log("Less than 750");
// }else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const isUserLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy products");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Able to accesss with login");
    
}
