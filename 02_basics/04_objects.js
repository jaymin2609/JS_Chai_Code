// Singleton

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "samm"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email:"abc@abc.com",
    fullName:{
        userFullName:{
        fName:"abc",
        lName:"xyz"
        }
        
    }
}

// console.log(regUser.fullName.userFullName.fName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLog'));

const course ={
    courseName:"js in hindi",
    price:"999",
    instructor:"hitesh",

}

const {instructor:ins} = course

console.log(ins);

// {
//     "name":"jaymin",

//     "courseName":"JS in Hindi",
// }




