// ************ FOR LOOPS  ************

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop is: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
    
}


// for (let i = 0; i <= 10; i++) {
//     if (i == 6) {
//         console.log(`Detected 6.`);
//         continue;
//     }
//     console.log(`Value of i is: ${i}`);
    
// }

const arr = [1, 2, 3, 7, 9, 6];
// console.log(arr.length);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}

// ++++++ 1. Sum of Even Numbers ++++++

let maxNumber = require('readline-sync');
let sum = 0;

// maxNumber = parseInt(maxNumber.question('Enter maximum number: '))
for(let i = 1; i <= maxNumber; i++){
    if (i % 2 == 0) {
        sum = sum + i;
    }
    
}
// console.log(`The sum of all even numbers between 1 and ${maxNumber} is: ${sum}`);

// ++++++ 2. Reverse a String ++++++

let input = require('readline-sync');
let reverseString = '';

// input = input.question('Enter a string you want to reversed: ');

for(let i = input.length-1; i>=0; i--){
    reverseString += input[i];
}
// console.log(`Reversed string is: ${reverseString}`);


// ************ While & do-while Loops  ************

let num = 0;
while (num <= 20) {
    // console.log(`value of num is: ${num}`);
    num++;
}

let items = ['bread', 'butter', 'sauce', 'veggies'];
let index = 0;

while (index < items.length) {
    // console.log(`item is: ${items[index]}`);
    index++;
}

let newNum = 0;
do {
    // console.log(`new number is: ${newNum}`);
    newNum++;
} while (newNum <= 10);

// ++++++ 3. Largest number in the array ++++++

let nums = [2, 3, 4, 5, 7, 12, 22];
let largestNum = 0;

for(let i = 0; i < nums.length; i++){
    if (nums[i] > largestNum) {
        largestNum = nums[i];
    }
}
// console.log(`Largest number from the array is: ${largestNum}`);


// ++++++ 4. Count Vowels in a String ++++++


let inputString = require('readline-sync');
inputString = inputString.question('Enter a string');

let count = 0;

for(let i = 0; i < inputString.length; i++){
    const char = inputString[i].toLowerCase();

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        count++
        
    }
}
// console.log(`The number of vowels in string is: ${count} `);
