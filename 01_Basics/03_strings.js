let name = "Akshay";
// console.log(`Hello my name is ${name}`);

let stringObj = new String('This is a string.')
// console.log(stringObj);

let gameName = 'Call of Duty';
// console.log(gameName);
// console.log(gameName.indexOf('D'));
// "indexOf()" method is case sensitive. D & d is not the same. 
// It'll return "-1" if you search the index of "d" instead of "D".

gameName = ' Call of Duty     ';
// console.log(gameName);
// console.log(gameName.trim());
//"trim();" method will remove whitespaces from the start and the end 
// but not from the between in string.

// console.log(gameName.charAt(6));
// console.log(gameName.includes('a'));
// "includes()" method is also case sensitive. A & a is not the same. 
// It'll return "false" if you search the index of "A" instead of "a".

let newStr = gameName.split('');
//When you use split(''): The string is broken into single characters, one by one, including spaces. Every character becomes its own part of the list.
//When you use split(' '): The string is broken into pieces wherever there’s a space. Each piece becomes a word or chunk. If there are extra spaces at the start, end, or between words, those create empty pieces in the list.

// console.log(newStr);

// console.log(newStr[3]);


//*********************************** PROGRAMS ******************************************

//++++++++++++++++ 1. Username Formatter ++++++++++++++++

function nameFormatter(str){
    return str.toLowerCase().split(' ').join('');
    
}

// console.log(nameFormatter('Akshay Ladne'));
// console.log(nameFormatter('Micheal Johnson'));

//++++++++++++++++ 2. Remove all white spaces ++++++++++++++++

let str1 = "Hello world!";
// console.log(str1);

let str2 = str1.replace(/ /g,'');
// In "replace()" method both arguments are needed otherwise i'll show you undefined with one argument.
// console.log(str2);

//++++++++++++++++ 3. Count the Occurrences of a Character ++++++++++++++++

function countOccurence(string, target){
    let count = 0;

    for (let i = 0; i < string.length; i++) {
       if (string[i].toLowerCase() === target.toLowerCase()) {
           count++;
       }
    }
    return count;
}

// console.log(countOccurence("Akshay", "K"));
// console.log(countOccurence("Akshay", "a"));
// console.log(countOccurence("Sunny", "n"));
// console.log(countOccurence("Sunny", ""));

