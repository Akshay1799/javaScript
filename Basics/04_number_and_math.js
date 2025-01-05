let num = 200;
// console.log(num);

const value = new Number(3000);
// console.log(value);

// console.log(value.toString());
// console.log(value.toString().length);
// console.log(value.toFixed(2));
// console.log(value.toPrecision(3));
// console.log(value.toExponential(2));

const otherNum = new Number(1000000);
// console.log(otherNum.toLocaleString('en-IN'));


//+++++++++++++++++++ MATH ++++++++++++++++++++++

// console.log(Math); // it returns an object
// console.log(Math.PI.toFixed(2));
// console.log(Math.abs(-4));
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*10 + 1);
// console.log(Math.sqrt(64));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.round(6.4));
// console.log(Math.round(6.8));
// console.log(Math.fround(6.3).toFixed(2));
// console.log(Math.max(2,4,7,9));
// console.log(Math.min(2,4,7,9));
// console.log(Math.pow(2,8));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Random discount generator

function discount() {
    baseDiscount = 10;
    randomDiscount = Math.random()+1;
    extraDiscount = baseDiscount*randomDiscount;
    return extraDiscount.toFixed(2) + "%";
}
// console.log("Your random discount is: " + discount());

//+++++++++++++++++++++++++++

// Roll Dice

function diceRoll(){
    let randomRoll = (Math.random()*6 )+ 1;
    return Math.floor(randomRoll);
}
// console.log("Your random roll is a: " + diceRoll());

//+++++++++++++++++++++++++++

//OTP Generator

function generateOtp(){
    let randomOtp = (Math.random()*900000) + 100000;
    return Math.floor(randomOtp);
}
// console.log("Your random OTP is: " + generateOtp());

//+++++++++++++++++++++++++++

// Random team selector

function selectTeamLeader(participants){
    let randomIndex = Math.floor(Math.random() * participants.length);
    return participants[randomIndex];
}

let participants = ['Akshay', 'Ashwin', 'Neeraj', 'Ayush', 'Ayush'];
// console.log("Your team leader is: " + selectTeamLeader(participants));

//+++++++++++++++++++++++++++

// Quote generator

function randomQuote(){
    let quotes = [
        "Believe in yourself!",
        "Stay positive, work hard, make it happen.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Dream big and dare to fail.",
        "Your only limit is your mind."
    ]
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

// console.log("Quote of the day is: " + randomQuote());
