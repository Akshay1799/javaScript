
function greeting(name){
     return `Hello ${name}`;
}

// console.log(greeting("Akshay"));
 

function sum(num1, num2){
    //  num1 + num2;
     
     return num1 + num2;
}

let total = sum(5,7);
// console.log("Total: " + total);

// console.log(sum(3,5));


const user = {
    name: "John",
    price: 299
}

function userDetails(objectName){
    return `Username is ${objectName.name} and price is ${objectName.price}`;
    
}

// console.log(userDetails(user));

// console.log(userDetails({
//     name: "sam",
//     price: 399
// }));


function calculateCartPrice(...num1){ 
    // here the three dots(...) is a rest operator.
    // Actually rest and spread operators are same but their use cases are different.
    return num1;
}

// console.log(calculateCartPrice(200, 400, 1000));

function cartPrice(val1, val2, ...val3){
    return val3;
}

// console.log(cartPrice(100, 300, 800, 1200));


const arr = [200, 400, 500, 800];

function returnValue(getArray){
    return getArray[2];
}

// console.log(returnValue(arr));
// console.log(returnValue([200, 400, 500, 800]));


function parent(){
    const username = "Akshay";

    function child(){
        const name = "Sunny";
        console.log(username);
        
    }
    // console.log(name);
    
    // child();
}
// parent();


if (true) {
    const name = "Akshay";
    if (name === "Akshay") {
        const website = "sam";
        // console.log(website + " " +  name);
        
    }
    // console.log(website);
    
}
// console.log(name);

// console.log(addOne(2));
function addOne(num){
    return num + 1;
};

// console.log(plusTwo(2));
const plusTwo = function addTwo(num){
    return num + 2;
};

//+++++++ this ++++++++

const obj = {
    name: 'Sam',
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome`);
        // console.log(this);
        
    }
}
// obj.welcomeMessage();
// obj.name = 'peter';
// obj.welcomeMessage();

// console.log(this); // it returns an empty object in node environment and in browser it returns window object.

function context() {
    let username = "garry";
    console.log(this.username); // we can't use this in function but in objects.
    
}
// context();

//+++++ arrow function +++++

// () => {}

    // const func = (num1, num2) => {
    //     return num1 + num2; // explicitly return
    // }

    // const func = (num1, num2) => num1 + num2 // implicitly return

    // const func = (num1, num2) => (num1 + num2) // we don't need to write "return" keyword if we use implicite way but in curly braces we'll have to.
    
    // const func = (num1, num2) => ({name: 'Akshay'});
    
    // console.log(func(2,5));
    