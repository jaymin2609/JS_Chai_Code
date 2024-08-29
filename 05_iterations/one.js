console.log("one");



for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(i);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i+'*'+j+' = '+i*j);
        
    }
}

const myArr = [1,2,3,4,5,6]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

// Break and Continue

// for (let i = 1; i <= 20; i++) {
//     if (i===5) {
//         console.log("5 is here");
//         break;
//     }
//     console.log(i);
// }
for (let i = 1; i <= 20; i++) {
    if (i===5) {
        console.log("5 is here");
        continue;
    }
    console.log(i);
}



