console.log("Three");
// For of loop

const myArr = ["1","2","3","4","5","6"]

for (const element of myArr) {
    // console.log(element);
}
const greetings = "Hello world"
for (const element of greetings) {
    if (element==" ") {
        continue
    }
    // console.log(`Each character is ${element}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")
map.set('JP',"Japan")
// map.set('IN',"BHARAT")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,' : ',value);
    
}

const myObject = {
    'game1':"NFS",
    'game2':"FIFA",
    'game3':"Cricket"
}

// for (const [key,value] of myObject) {
//     console.log(key,' : ',value);
// }

