"Use Strict"

//++++++++++++++++ Validate an Age ++++++++++++++++

function validateAge(age) {
        if(isNaN(age)){
        console.log("Invalid input! Provide a valid number.");
        return;
        }
        if (age<13) {
            console.log("You are a child");
            
        } else if (age >= 13 && age <=19) {
            console.log("You are a Teenager");
        }
        else if (age >= 20){
            console.log("You are an adult");

        }
        else{
            console.log("Invalid input");

        }
}

// validateAge(11);
// validateAge(15);
// validateAge(21);
// validateAge("bdjf");

//++++++++++++++++ Traffic light simulator ++++++++++++++++

function trafficLight(color) {
    switch (color) {
        case 'red':
            console.log("Please Stop");
            break;
        
        case 'yellow':
            console.log("Ready to Stop");
            break;

        case 'green':
            console.log("You can Go now");
            break;

        default:
            console.log("Invalid color! Please enter 'red', 'yellow', or 'green'.");
            
    }
}

// trafficLight("yellow");
// trafficLight("pink");


//++++++++++++++++ Grading ++++++++++++++++

function grades(marks){
    if (isNaN(marks)) {
        console.log("Please input a valid number.");
        return;
    }

    if (marks >= 90) {
        console.log("A+");
        
    } else if(marks >= 80 && marks <= 89){
        console.log("A");
        
    }
    else if(marks >= 70 && marks <= 79){
        console.log("B");
        
    }
    else if(marks < 40){
        console.log("Fail");
        
    }
}

// grades(95);
// grades(85);
// grades(75);
// grades(35);

//++++++++++++++++ Menu Ordering System ++++++++++++++++

function menuOrder(num) {
    if (isNaN(num)) {
        console.log("Invalid Number! Please provide a valid number.");
        return;
    }

    switch (num) {
        case 1:
            console.log("Here is your Pizza.");
            break;
        case 2:
            console.log("Here is your Burger.");
            break;
        case 3:
            console.log("Here is your Salad.");
            break;
    
        default:
            console.log("Invalid option");
            
    }
}

// menuOrder(1);
// menuOrder(2);
// menuOrder(3);
// menuOrder(5);
// menuOrder("abc");

//++++++++++++++++ Day of the Week Finder ++++++++++++++++

function daysOfWeek(day) {
    if (isNaN(day)) {
        console.log("Invalid input! Provide a valid input");
        return;
    }

    if (day<=0 || day>7) {
        console.log("Invalid input! Input value should be from 1-7");
        
    }
    switch (day) {
        case 1:
            console.log("It's Monday");
            break;
        case 2:
            console.log("It's Tuesday");
            break;
        case 3:
            console.log("It's Wednesday");
            break;
        case 4:
            console.log("It's Thursday");
            break;
        case 5:
            console.log("It's Friday");
            break;
        case 6:
            console.log("It's Saturday");
            break;
        case 7:
            console.log("It's Sunday");
            break;    
    }
}
// daysOfWeek(5);
// daysOfWeek(9);
// daysOfWeek(0);

//++++++++++++++++ Leap Year ++++++++++++++++

function isLeapYear(year){
    if(isNaN(year)){
        console.log("Invalid input! Please enter a valid year.");
        return;
    }

    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);

    }
}
isLeapYear(2023);
isLeapYear(2024);
isLeapYear(2053);
isLeapYear(2012);