const sym = Symbol("myKey1");

const user = {
    name : "Akshay",
    "full name" : "Akshay Ladne",
    email : "123@gmail.com",
    age : 25,
    [sym]: "newKey",
    location : "Indore",
    isLoggedIn : false,
    logginDays : ["Tuesday", "Friday"]
}

// console.log(user);

// console.log(user["full name"]);


// console.log(user.name);

// console.log(user[email]);
// console.log(user["email"]);

// console.log(user[typeof sym]);
// console.log(user[sym]);

// console.log(sym);

// console.log(sym == user[sym]);

// console.log(user.logginDays);

// user.email = "123@ms.com"
// console.log(user);
// Object.freeze(user)

// user.email = "123@google.com"
// console.log(user);

user.greeting = function(){
    // console.log("Hello user"); // when a function doesn't return anything, it displays undefined.
    return "Hello user";
  
}
user.greetingTwo = function(){
    // console.log(`Hello user, ${this.name}`);
   return `Hello user, ${this.name}`;
}
// user.greeting();
// console.log(user.greeting());
// console.log(user.greetingTwo());


// const newUser = new Object(); // singleton object

const tinderUser = {};
// console.log(tinderUser);


tinderUser.name = "Sunny";
tinderUser.age = 25;
tinderUser.status = "offline";

// console.log(tinderUser);


const onlineUser = {
    name: "sam",
    email: "123@gpt.com",
    fullname: {
        username:{
            firstname: "Akshay",
            lastname: "Ladne"
        }
    }
}

// console.log(onlineUser.fullname.username.firstname);
// console.log(onlineUser.fullname?.username.firstname); //optional chaining.


let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"c", 4:"d"};

// let obj3 = Object.assign(obj1, obj2);
// let obj3 = Object.assign({},obj1, obj2); // better way but rarely used

// console.log(obj3);

let join = {...obj1, ...obj2}; // effecient way and mostly used
// console.log(join);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("status"));
// console.log(tinderUser.hasOwnProperty("logIn"));

const course = {
    courseName : "js",
    price : "499",
    instructor : {
        name:"Akshay",
        email: "abc@gmail.com"
    } 
}

const{instructor} = course;
// console.log(instructor);

// const{instructor : teacher} = course;
// console.log(teacher);

// console.log(course.instructor?.email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Employee Information System

const Employee = {
    name: 'john',
    position: 'senior developer',
    salary: 50000,
    department: 'technical',

    giveRaise: function(percentage){
        this.salary += this.salary * (percentage/100);
    },

    employeeDetails: function(){
        console.log(`Employee's name:, ${this.name}`);
        console.log(`Employee's position:, ${this.position}`);
        console.log(`Employee's salary:, ${this.salary}`);
        console.log(`Employee's department:, ${this.department}`);
        
    }
}
// Employee.employeeDetails();
// Employee.giveRaise(10);
// Employee.employeeDetails();


// 2. Library System

let book = {
    title: 'The compound effect',
    author: 'Darren hardy',
    year: 2018,
    isAvailable: true,

    borrowBook: function(){
        if (this.isAvailable) {
            if (this.isAvailable = false) {
                console.log(`${this.title}, is borrowed`);
            }
            else{
                console.log(`${this.title}, is not available`);
            }
        }
    },

    returnBook: function(){
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.book}, has been returned.`);
        }
        else{
            console.log(`${this.book}, was not borrowed.`);
        }
    },

    displayDetails: function(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author} `);
        console.log(`Year: ${this.year} `);
        console.log(`Availability: ${this.isAvailable? "available": "Not available"} `);
        
    }

}

// book.displayDetails();
// book.borrowBook();
// book.displayDetails();
// book.returnBook();
// book.displayDetails();


// 3. Shopping Cart

let shoppingCart = {
    items : [],

    addItem: function(name, price){
        this.items.push({name, price});
        console.log(`${name} has been added to the cart`);
    },

    removeItem: function(name){
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.name != name);

        if (this.items.length < initialLength) {
            console.log(`${name} has been removed from the cart`);
            
        } else {
            console.log(`${name} was not found in the cart`);
        }
    },

    calculateTotal: function(){
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return total;
    },

    displayCart: function(){
        console.log("Cart Contents: ");
        this.items.forEach(item => {
            console.log(` -${item.name}: $${item.price}`);
            
        })
        console.log(`Total Price: $${this.calculateTotal()}`);
        
    }


}

// shoppingCart.addItem("Apple", 1.2);
// shoppingCart.addItem("Banana", 0.8);
// shoppingCart.displayCart();
// shoppingCart.removeItem("Banana");
// shoppingCart.displayCart();
// shoppingCart.removeItem("Grapes");