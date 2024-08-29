console.log("Scopes");

// var c = 3000
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "jaymin"

    function two(){
        const website = "bookeventnow"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "jaymin"
    if (username==="jaymin") {
        const website =" bookeventnow"
        // console.log(username+website);
        
        
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++ Interestin ++++++++++
console.log(addOne(5));
function addOne(num){
    return num+1;
}
// addTwo(5)


const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5));




