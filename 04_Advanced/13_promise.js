let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("Resolved");
        
    },1000);
});

let promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promiseTwo resolved");
        resolve();
    }, 1000)
});
promiseTwo.then(function(){
    console.log("promiseTwo consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promiseThree resolved");
        resolve();
    }, 1000);
}).then(function(){
    console.log("promiseThree consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Get the user details:");
        resolve({username: "Akshay", age: 25});
    }, 1000);
}).then(function(user){
    console.log(user);
});

let promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Akshay", age: 25});
        } else {
            reject("ERROR: Something went wrong!")
        }
    },1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected.")
)

** Both then & catch and try & catch does the same work **//

async function consumePromiseFive(){
    try {
        let response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

** Practice questions **\\

Q1

function getUser(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({name:"Akshay", age: 25});
        },1000)
    })
}

function getPosts(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(["123@gmail.com","Indore"]);
        },1000)
    })
}

Promise.all([getUser(), getPosts()])
.then((result)=>{
    const user = result[0];
    const info = result[1];

    console.log("User: ", user);
    console.log("Info: ", info);
})
.catch((error)=>{
    console.log("Something went wrong: ", error);
    
})

Q2

function orderFood(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Order Placed");
        },1000)
    }).then((message)=>{
        console.log(message);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Food is being prepared!");
            })
        })
    },2000).then((message)=>{
        console.log(message);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Food is delivered!");
            })
        })
    },3000)
}

orderFood().then((message)=>{
    console.log(message);
    
})

Q3

function downloadFile(filename){
    return new Promise((resolve, reject)=>{
        if (filename) {
            setTimeout(()=>{
                resolve(`file ${filename} successfully downloaded!`);
            },2000)
        } else {
            reject("ERROR: File name is not provided!");
        }
        
    })
}

const filename = process.argv[2]; 

downloadFile(filename)
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})

Q4

function fastTask(){
    console.time("Fast Task Time");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.timeEnd("Fast Task Time"); 
            resolve("fast task completed");
        },2000)
    });
}

function slowTask(){
    console.time("Slow Task Time");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.timeEnd("Slow Task Time"); 
            resolve("Slow task completd");
        },5000)
    });
}

Promise.all([fastTask(), slowTask()])
.then((result)=>{
    console.log(result[0]);
    console.log(result[1]);
})


