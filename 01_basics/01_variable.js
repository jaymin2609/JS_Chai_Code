console.log("Hello JP")

const accountId = 1

let accountEmail = "abc@abc.com"
/*
Do not use var 
becasuse of issue in block scope and functional scope
*/
var accountPassword = "12345";

accountCity = "Ahmedabad"

let accountState;

// accountId =2 // Not allowed

accountEmail = "xyz@abc.com"

accountPassword = "1111"

accountCity = "Tokiyo"

console.log(accountId);
console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

