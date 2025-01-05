"use strict";
//********************** TYPE CONVERSION ****************************

// let name = "Akshay";
// let num = "33";
// let loggedin = true;

// console.log(typeof(num));

// let value = Number(num);
// console.log(typeof(value));
// console.log(value);

// let userLogin = Number(1);
// console.log(typeof userLogin);
// console.log(userLogin);

// let newNum = "25abc";
// console.log(typeof newNum);
// let newVal = Number(newNum);
// console.log(typeof newVal);
// console.log(newVal); // NAN
// let animal = null;
// console.log(typeof null); // object

// Comparison > =< >= > and equality check == works differently. comparison converts null to a number and treat as 0
// and comparisons with undefined will give us undefined as an output.
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null >= 0);

//********************** STRING ****************************

// const name = "  Akshay";
// console.log(`My name is ${name}`);
// console.log(name.trim()+" (white space removed)");
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(-6,6));
// console.log(name.replace("Akshay", "Akshay ladne"));
// console.log(name.indexOf("h"));
// console.log(name.charAt(5));


// const score = 200;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const newBalance = 123.8934;
// console.log(newBalance.toPrecision(4));

// const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));


//********************** MATHS ****************************

// console.log((Math.random()*10)+1);
// console.log(Math.abs(-3));
// console.log(Math.round(3.5));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.6));

// console.log(Math.min(2, 4, 7, 1));
// console.log(Math.max(2, 4, 7, 1));

//** Dates **

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


//********************** ARRAYS ****************************

// let name = ["Jitu", "Dhiren", "Ashwin", "Ayush", "Neeraj"];
// let surname = ["Parihar", "Patel", "Jaishwal", "Parihar", "Singh"];
// console.log(name);
// console.log(surname);

// name.unshift("Tiwari");
// console.log(name);

// name.shift();
// console.log(name);

// name.push("Tiwari");
// console.log(name);

// name.pop();
// console.log(name);

// name.push(surname);
// console.log(name); // push works on existing array

// let newName = name.concat(surname); // concat works on the new copy of an array
// console.log(newName);

// let allName = [...name, ...surname]; // Spread method
// console.log(allName);

// let anothe_array = name.flat(Infinity);
// console.log(anothe_array);

// console.log(Array.isArray("Akshay"));
// console.log(Array.from("Akshay")); // turns into array
// console.log(Array.from({name: "Akshay"}));

// let one = 100;
// let two = 200;
// let three = 300;

// console.log(Array.of(one, two, three));

// Programs

// let sub = ["Math", "Java", "Sql", "DSA"];
// for (let i = 0; i < sub.length; i++) {
//     console.log(sub[i]);


// }

// let num = [1, 2, 3, 4, 5];
// console.log(num.length);
// console.log(num.indexOf(5));

// let colors = ["Red", "Blue", "Yellow", "Green"];
// colors.unshift("Purple");
// colors.push("Voilet");
// console.log(colors);

// colors.pop();
// colors.shift();
// console.log(colors);

// let count = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let index = 0; index < count.length; index++) {
//      sum += count[index];
// }
// console.log(sum);

//********************** OBJECTS ****************************

// singleton creates when we create object constructor

// let mySym = Symbol("newKey");

// const user = {
//     name: "Akshay",
//     age: 25,
//     email: "123@gmail.com",
//     isLoggedIn: false,
//     [mySym]: "key1"
// }

// console.log(user);
// console.log(typeof mySym);


// console.log(user.name);
// console.log(user["name"]);

// user.isLoggedIn = true;
// console.log(user);
// user.email = "ghi@Text.com";
// Object.freeze(user);         // it makes the object immutable when it's being called.
// user.email = "abc@gpt.com"; // it will throw a type error because, 
//after freezing it's not writable you can only read 
// console.log(user);
// user.email = "def@gmailcom";
// console.log(user);


// user.greetingOne = function(){
//     console.log("Hello User");

// }

// user.greetingTwo = function(){
//     console.log(`Hello User, ${this.name}`);

// }

// console.log(user.greetingOne());
// console.log(user.greetingTwo());

// let tinderUser = new Object(); // Singleton Object
// const tinderUser = {}; // Non-Singleton Object

//  tinderUser.id = 123;
//  tinderUser.name = "Akshay";
//  tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

// const newUser = {
//     email: "a@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "Akshay",
//             lastname: "Ladne"
//         }
//     }
// }

// console.log(newUser.fullname.userfullname);


// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};

// // const obj3 = {obj1,obj2};
// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const user = [
//     {
//         id: 134,
//         email: "s@gmail.com"
//     },
//     {
//         id: 134,
//         email: "s@gmail.com"
//     },
//     {
//         id: 134,
//         email: "s@gmail.com"
//     },
//     {
//         id: 134,
//         email: "s@gmail.com"
//     }
// ]
// console.log(user[1]);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('names'));

// OBJECT DE-CONSTRUCTOR

// const course = {
//     courseName: "Javascript",
//     duration: "2 month"
// }

// let {courseName: name} = course; // Syntax

// // console.log(courseName);
// console.log(name);


//********************** FUNCTION ****************************

/*
functions without an explicit return statement don’t produce any meaningful value when called. 
Instead, they implicitly return undefined. 
So, when you assign the result of addTwoNumbers(2, 3) to result, 
you're actually assigning undefined to it because the function doesn't explicitly return anything.
*/


// function addTwoNumbers(num1, num2){
//     console.log(num1 +num2);// when a func

// }
// function addTwoNumbers(num1, num2){
//     let result = num1 +num2;
//     return result

// }
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;

// }
// const result = addTwoNumbers(2, 3);
// console.log("result: " + result);


// function logginUser(username){
//     return `${username} logged in`
// }
// console.log(logginUser("Akshay"));

// function logginUser(username = "Akshay"){
//     if(username==undefined || !username){ // both conditions are same, choose one of them
//         console.log("Please enter youe name");
//         return
//     }
//     return `${username} logged in`
// }
// console.log(logginUser());

// function calculateCartPrice(val1, val2, ...num1){ // Rest & Spread operators are same but usecases are different.
//     return num1
// }
// console.log(calculateCartPrice(100, 200, 500, 2000));

// Object of function

// const newUser ={
//     username: "Akshay",
//     price: 399
// }

// function arrObject(username){
//     console.log(`username is ${username.username} and price is ${username.price}`);
    
// }
// arrObject(newUser);

// Array of function

// let myArray = [2, 7, 55, 14, 42];

// function newArray(getArray){
//     return getArray[1]
// }
// console.log(newArray(myArray));

// console.log(addOne(5));
// Function Declarations are hoisted, so you can call them before they appear in the code.
// function addOne(num){
//     return num + 1;
// }

// Expressions:

// console.log(addTwo(6)); 
// Function Expressions are not hoisted, so you cannot use them before they are defined. 
//The function exists only after the line where the assignment occurs.
// const sum = function addTwo(num){
//     return num+1;
// }

// THIS 

// const user = {
//     name: "Akshay",
//     price: 999,

//     welcome: function(){
//         console.log(`${this.name}, Welcome to website.`);
//         console.log(this);
        
//     }
// }

// user.welcome();
// user.name = "Sunny";
// user.welcome();
// console.log(this); // * IMP *: In browser the object is "Window" and in node the is an "Empty Object".

// const a = function(){
//     let = username = "Akshay",
//     console.log(this.username);
    
// }
// a(); // this operator doesn't work in functions in "strict mode".


//+++++++++++++++++++++++ Arrow Function

// const one = (num1, num2) => {
//     return num1 + num2;
// }

// const one = (num1, num2) => num1 + num2; // Implicitely, you don't write return keyword

// const one = (num1, num2) => (num1 + num2);

// console.log(one(3, 4));


//+++++++++++++++++++++++ IIFE(Immediately Invoked Function Expressions)

// (function one(){
//     // named IIFE
//     console.log("Print");
// })(); // When you write two "iffe", you have to put semicolon(;) after calling function () 
//     //at the end of first iffe. so that it can work

//  ((name)=>{
//     console.log(`Print ${name}`);
// })("Akshay")


// *** IMPORTANT ***
// Falsy Values: false, 0, -0, BigInt 0n, ""(without space), null, undefined. Rests are truthy values.


// ++++++++++++++++ LOOPS ++++++++++++++++++++

// for(let i = 1; i<=10; i++){
    //     for(let j = 1; j<=10; j++){
        //         console.log(`${i} * ${j} = `, i*j);
        
        //     }
        // }
        
        
// ++++++++++++++++ HIGHER ORDER ARRAY LOOPS ++++++++++++++++++++

// const arr = [2, 5, 7, 1, 22];

// for (const num of arr) {
//     // console.log(num);
    
// }

// const greeting = "Hello Akshay";
// for (const greet of greeting) {
//     if (greet == " ") 
//         continue;
//     console.log(greet);
    
// }

// *** MAPS ***

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("FR", "FRANCE");
// map.set("USA", "UNITED STATES OF AMERICA");

// console.log(map);

// for (const keys of map) {
//     // console.log(keys);

    // ** this way we get keys in the from of array.
// }

// Array gets de-structure when we write in this way below.
// for (const [keys, values] of map) {
//     console.log(keys, ': ', values);

    // ** in this way we gets only keys and value pair without array.
// }

// const games = {
//     "game1": 'super mario',
//     "game2": 'contra'
// }
// for (const [key, value] of games) { // we can't iterate object through "for..of" loop
//     console.log(key, ': ', value);
    
// }

// const lang = {
//     js: "javascript",
//     cpp:"c++",
//     py: "python" 
// }
// for (const key in lang) {
//     console.log(key);
    
// }

// const city = ['Indore', 'Heydrabad', 'Ahemdabad', 'Banglore'];
// for (const key in city) {
//     console.log(key);
//     console.log(city[key]);
    
// }

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("FR", "FRANCE");
// map.set("USA", "UNITED STATES OF AMERICA");

// for (const key in map) {
//     console.log(key);
    
//     // maps are not iterable through loops but there are ways to do it.
// }

// const coding = ['java', 'python', 'javascript'];
// coding.forEach(item => {
//     console.log(item);
    
// });

// const language = [
//     {
//         langname: 'python',
//         exetension: 'py'
//     },
//     {
//         langname: 'java',
//         exetension: 'java'
//     },
//     {
//         langname: 'javascript',
//         exetension: 'js'
//     }
// ]
// console.log(language[1]);

// language.forEach(item=>{
//     console.log(item.exetension);
    
// })

// language.forEach((val, index, arr) => {
//     console.log(val, index, arr);
    
// })

// const n = 1;

// ** LEETCODE QUESTION **

// let hello = function helloWorld(){
//     return function(){
//         console.log("Hello Akshay");
        
//     }
// }
// // console.log(hello());
// let innerFunction = hello();
// innerFunction();


// ++++++++++++++++ Filter Map and Reduce ++++++++++++++++++++

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.filter( (item)=> item>2)
// console.log(newNums);

// const newNums = nums.filter( (item)=> {
//      return item>2 // we have to write "return" keyword while returning values inside the object using filter method.
// })
// console.log(newNums);
