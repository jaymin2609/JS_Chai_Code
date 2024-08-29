function sayMyName(){
    console.log("J");
    console.log("a");
    console.log("y");
    console.log("m");
    console.log("i");
    console.log("n");
}

// sayMyName()

// Params
// function addNumbers(num1,num2){
    
//     console.log(num1+num2);

// }
function addNumbers(num1,num2){
    let result = num1+num2
    return result
}

// Args
const result = addNumbers(2,5)
// console.log("Result : ",result);

function loginUserMessage(userName="sam"){
    // if (userName===undefined) {
    //     console.log("please enter username");
    //     return
    // }
    if (!userName) {
        console.log("please enter username");
        return
    }

    return `${userName} just logged in!`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1;

}

console.log(calculateCartPrice(3,4,5,100,200));

const user = {
    userName:"jaymin",
    price:100
}

function handleObject(anyObject){

    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

// console.log(handleObject(user));
console.log(handleObject({
    userName:"sam",
    price:200
}));

const myNewArr = [200,400,100,600]

function returnSecondVal(getArry){
    
return getArry[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([100,200,3,5,6]));





