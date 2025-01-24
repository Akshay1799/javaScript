class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username}`.toUpperCase();
    }
}

const userInfo = new user('Akshay', 'abc@gmail.com', '123#123')
console.log(userInfo.encryptPassword());
console.log(userInfo.changeUsername());


+++++ Behind the scene +++++

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`

}

user.prototype.changeUsername = function(){
    return `${this.username}`.toUpperCase();

}

const newUser = new user('Akshay','123abc@gmail.com', '123456');

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());


// +++++ 1. Library Book Manager  +++++

class Book {
    constructor(title, author, isBorrowed) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    };

borrowBook(){
    if (this.isBorrowed) {
        console.log(`Sorry! "${this.title} is already borrowed."`);

    } else {
        this.isBorrowed = true;
        console.log(`You borrowed "${this.title}".`);
    }
}

returnBook(){
    if (this.isBorrowed) {
        this.isBorrowed = false;
        console.log(`You returned "${this.title}".`);

    } else {
        console.log(`"${this.title}" was not borrowed.`);

    }
}

getDetails(){
    console.log(`Title: ${this.title}, Author: ${this.author}, Status: ${this.isBorrowed ? "Borrowed" : "Available"}`);

}
};

const myBook = new Book('The Compound Effect', 'Darren Hardy');

myBook.getDetails();
myBook.borrowBook();
myBook.getDetails();
myBook.returnBook();
myBook.getDetails();


// +++++ 2. Car Rental Service  +++++


class car{
    constructor(brand, model, year, isRented){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRented = false;

    };

    rentCar(){
        if (this.isRented) {
            console.log(` Sorry! The Brand ${this.brand} Model ${this.model} is already borrowed.`);
            
        } else {
            this.isRented = true;
            console.log(`You rented the ${this.brand} ${this.model}.`);
            
        }
    }

    returnCar(){
        if (this.isRented) {
            this.isRented = false;
            console.log(`You returned the ${this.brand} ${this.model}.`);
            
        } else {
            console.log(`The ${this.brand} ${this.model} was not rented.`);
        }
    }

    getCarDetails(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Status: ${this.isRented ? "Rented" : "Available"}`);
        
    }
}

const myCar = new car('Mahindra', 'Thar', '2022')

myCar.getCarDetails();
myCar.rentCar();
myCar.getCarDetails();
myCar.returnCar();
myCar.getCarDetails();