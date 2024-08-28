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
console.log(loginUserMessage());


