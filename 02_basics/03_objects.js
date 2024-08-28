// Singleton
// Object.create()

// object literals
const mySy = Symbol("key1") //IMPORTANT

const jsUser = {
    name:"Jaymin",
    "full name":"Jaymin Patel",
    [mySy]:"val1",
    age:32,
    location:"Ahmedabad",
    email:"abc@abc.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser["email"]);
console.log( jsUser[mySy]);

jsUser.email = "abc@com"
// Object.freeze(jsUser)
// jsUser.email = "aaa@com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


