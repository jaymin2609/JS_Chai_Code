const myObj = {
    js:"javascript",
    cpp:"C++",
    rb:"rubby",
    swift:"Swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")
map.set('JP',"Japan")

for (const key in map) {
    // console.log(key);
}

