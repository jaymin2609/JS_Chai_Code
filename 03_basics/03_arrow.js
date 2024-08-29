console.log("Arrow");

const user = {
    username:"jaymin",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to BookEventNow`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jaymin"
//     console.log(this.username);
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "jaymin"
//         console.log(this.username);
// }

// chai()


const chai = ()=>{
    let username = "jaymin"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2)=>{
// return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"jaymin"})


console.log(addTwo(3,4));



