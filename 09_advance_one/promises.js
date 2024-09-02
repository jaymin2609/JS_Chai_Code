
const promiseOne = new Promise((resolve, reject) => {
    // Do an sync task
    // DB calls, Cryptography, Network Call, 
    setTimeout(() => {
        // console.log('Async Task is Done');
        resolve("Data from Promise One")
    }, 1000)
})


promiseOne.then((data) => {
    // console.log("Promise Consumed", data);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async Task 2");
        resolve("Data from Async Task 2")

    }, 1000)
}).then((data) => {
    // console.log("Async Task 2 Then : ", data);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async Task 3");
        reject("No data found in Async Taks 3")
    }, 1000)
}).then((data) => {
    // console.log("Async Task 3 Then : ", data);
}).catch((data) => {
    // console.log("Async Task 3 catch : ", data);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async Task 4");
        resolve("Fetching Data from Async Taks 4")
        // setTimeout(() => {
        //     console.log("Fetching again");

        //     resolve("Data from Async Taks 4")
        // }, 1000)
    }, 1000)
}).then((data) => {
    // console.log("Async Task 4 Then : ", data);
}).catch((erro) => {
    // console.log("Async Task 4 catch : ", erro);
}).finally(() => {
    // console.log("Async Task 4 finally : ");
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let erro = false
        if (!erro) {
            resolve({
                username: "javascript",
                password: "1234"
            })
        } else {
            reject("ERROR : Something went wrong!")
        }
    }, 1000)
});

async function consumePromise5() {
    try {
        const resposne = await promise5
        console.log(resposne);
    } catch (error) {
        console.log(error);
    }
}

// consumePromise5()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR : ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/jaymin2609')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("Data : ", data);
    })
    .catch((error) => {
        console.log("Error : ", error);
    })

