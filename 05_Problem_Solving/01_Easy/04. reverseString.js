// Using for loop

function reverseString(str){

    if(str === '' || str.length === 0){
        return "Provide a valid string";
    }

    let reverseStr = '';

    for( let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
     return reverseStr;
}
const revStr = reverseString('hello');
console.log(revStr);


// Using built-in methods

// function reverseString(str){
//     if(str === '' || str.length === 0){
//         return "Provide a valid string";
//     }

//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello'))