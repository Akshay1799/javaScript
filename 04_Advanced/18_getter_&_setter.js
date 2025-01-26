class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password.toUpperCase()}akshay`;
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return `${this._email.toUpperCase()}`;
    }
    set email(value){
        this._email = value;
    }
}

const newUser = new user('John', 'john@123gmail.com', 'abc@cba');
// console.log(newUser.password);
// console.log(newUser.email);

// ++++++ 1: Bank Account Class ++++++

class BankAccount {
    constructor(ownerName, accountNumber, balance){
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    get balance(){
        return `${this._balance}`;
    }
    set balance(amount){
        if (amount > 0) {
            this._balance = amount;
        } else {
            console.log(`Please enter a valid amount! The balance amount can't be negative.`);  
        }
    }
}

const myAccount = new BankAccount('Akshay', '123456', 120000);
// console.log(myAccount.balance);
// myAccount.balance = 1200000;
// console.log(myAccount.balance);
// myAccount.balance += 1200;
// console.log(myAccount.balance);

// ++++ 2. TemperatureConverter ++++

class TemperatureConverter {
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit(){
        return (this._celsius * 9/5) + 32;
    }
    set fahrenheit(temp){
        this._celsius = (temp - 32) * 5/9; 
    }

    get celsius(){
        return this._celsius;
    }
    set celsius(value){
        if (typeof value === 'number') {
            this._celsius = value;
        }
        else{
            console.log("Please enter a valid number for Celsius.");
            
        }
    }
}

const temp = new TemperatureConverter(26);
// console.log(`Celsius: ${temp.celsius}`);
// console.log(`Fahrenheit: ${temp.fahrenheit}`);

temp.fahrenheit = 105;
// console.log(`Celsius after setting fahrenheit: ${temp.celsius}`);
// console.log(`fahrenheit: ${temp.fahrenheit}`);

// temp.celsius = 'abc';
// console.log(`Celsius: ${temp.celsius}`);


// ++++ 3 Product Inventory Management ++++

class Product{
    constructor(productName, price, quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    get quantity(){
        return this._quantity;
    }
    set quantity(amount){
        if (amount < 0) {
            console.log("Quantity can't be negative.");
            
        } else {
            this._quantity = amount;
        }
    }

    getValue(){
        return this._quantity * this.price;
    }
}

// const productDetails = new Product('Mercedes', '2', 7000000)
// console.log(productDetails);
// console.log(productDetails.getValue());
// productDetails.quantity = 10;
// console.log(productDetails.getValue());
// productDetails.quantity = -2;


