// Task: Write a JavaScript function called charCount 
// that takes a string and returns an object 
// where each key is a character and its value is the number of times 
// that character appeared in the string.

// Important:

// The function should be case-insensitive.
// Only count letters and numbers. Ignore spaces, punctuation, and any other symbols.

// For example, charCount("Hello World!") 
// should return { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }.

// Hint:

// First, create an empty object to store your results.

// It's best to loop over the string. For each character, you'll need to decide 
// if you want to count it. A good strategy is to convert the character to lowercase first.

// Inside the loop, for each valid character:
// If the character key already exists in your results object, increment its value.
// If it doesn't exist, add it to the object with a value of 1.



function charCount(str){
    const charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    let maxCount = 0;
    let maxChar = ''

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
             maxCount = charMap[char];
             maxChar = char;
        }
    }
    return {char: maxChar, count: maxCount};
}
const countChar = charCount('akshay');
console.log(countChar);
