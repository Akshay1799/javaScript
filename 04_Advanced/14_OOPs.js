const user = {
    username: "Akshay",
    Age: 25,

    userDetails: function(){
        console.log("Got user details.");
        console.log(this);
    }
    
}
console.log(user["username"]);
console.log(user.userDetails());

function userOne(username, age, status){
    this.username = username;
    this.age = age;
    this.status = status;

    return this;
}
const userInfo = new userOne("Akshay", 25, "Logged in");
const userDetails = new userOne("Sunny", 23, "Logged out");

console.log(userInfo);
console.log(userDetails);

