class user {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A course was added by ${this.username}`);
        
    }
}

const newUser = new Teacher('Akshay');
newUser.addCourse();

const myUser = new Teacher('John');
myUser.addCourse();

console.log(newUser === Teacher);
console.log(myUser === Teacher);

console.log(newUser instanceof Teacher);
console.log(myUser instanceof Teacher);


