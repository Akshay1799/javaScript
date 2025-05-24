
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

//  Both then & catch and try & catch does the same work //

async function consumePromiseFive(){
    try {
        let response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ** Practice questions **

// Q1 get User

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

// Q2 order Food

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

// Q3 download File

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

// Q4 fast Task completion

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


// Q5 Simulating an API Call

function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let err = false;
            if (!err) {
                resolve({id:1, name:"john doe", email:"john@123gmail.com"})               
            } else {
                reject("ERROR: Something is not right.")
            }
        }, 2000)
    })
}

// userData()
// .then((data) => {
//     console.log(data);
    
// }).catch((err) => {
//     console.log("ERROR: ", err);
    
// }).finally(()=>console.log("The promise is either resolved or rejected.")
// )

// Q6 Simulating Multiple API Calls (Chaining)

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 101, name: "Alice" });
    }, 1000);
  });
};
function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: userId,
        posts: [
          { postId: 101, title: "First Post" },
          { postId: 102, title: "Second Post" },
        ],
      });
    }, 2000);
  });
};
function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { commentId: 1, text: "Nice post!" },
        { commentId: 2, text: "Great job!" },
      ]);
    }, 1500);
  });
};

getUser()
.then((user)=>{
    console.log("User fetched ", user);
    return fetchPosts(user.userId);
})
.then((data)=>{
    console.log("Posts fetched ", data.posts);
    return fetchComments(data.posts[0].postId);
})
.then((comments)=>{
    console.log("Comments fetched ", comments);
    
})
.catch((error)=>{
    console.log("ERROR: ", error);
    
});


// Q7 Racing Two Tasks (Promise.race)

function downloadFile(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Main file downloaded!")
        }, 3000);
    })
}
function downloadBackupFile(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Backup file downloaded!")
        }, 2000);
    })
}

Promise.race([downloadFile(), downloadBackupFile()])
.then((fastesDownload)=>{
    console.log("fastesDownload: ", fastesDownload);
    
})
.catch((error)=>{
    console.log("Something wrong happened: ", error);
    
})


// Q8 Handling Errors in Promises

function placeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let isStockAvailable = false;
            if (isStockAvailable) {
                resolve("Order placed successfully!");
            }
            else{
                reject("Sorry, the item is out of stock!");
            }
        }, 2000);
    })
}
placeOrder()
.then((status)=>{
    console.log(status);
    
})
.catch((err)=>{
    console.log(err);
    
})


//Q9 Running Multiple Async Tasks (Promise.all)

function fetchWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ temperature: 30, condition: "Sunny" });
    }, 3000);
  });
}
function fetchNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Breaking News 1", "Breaking News 2"]);
    }, 1000);
  });
}
function fetchSports() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Cricket Match", "Football Match"]);
    }, 3000);
  });
}

//++ with Promise.all() ++//

// Promise.all will wait untill every promise gets resolved.
// It doesn't executes partially, either all or no one.
// Promise.all([fetchWeather(), fetchNews(), fetchSports()])
// .then(([weather, news, sports])=>{
//     console.log("Weather: ", weather);
//     console.log("news: ", news);
//     console.log("sports: ", sports);

// })
// .catch((err)=>{
//     console.log("ERROR: ", err);

// })

//++ with Promise.race() ++//

Promise.race([fetchWeather(), fetchNews(), fetchSports()])
  .then((fastone) => {
    console.log("Fastest one is: ", fastone);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });

function knownUser(username, password){
    return new Promise((resolve, reject)=>{
        if (username =="Akshay" && password =="123@123"){
        setTimeout(() => {
                resolve("loggedIn Successfully ho gaya!")
        }, 3000);
    }
    else{
        reject("Loggin error!")
    }
    })
}
knownUser("Akshay", "123@123")
.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});