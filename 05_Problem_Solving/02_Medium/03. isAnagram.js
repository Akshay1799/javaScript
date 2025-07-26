// Task: Write a function isAnagram that takes two strings. 
// It should return true if the second string is an anagram of the first, 
// and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of another. 
// For example, "cinema" is an anagram of "iceman".

// Important:

// The check should be case-insensitive.
// Ignore spaces and non-alphanumeric characters. 
// For eg., "Dormitory" is an anagram of "dirty room##".

// Hint #1 (The Sorting Method): This is often the most straightforward way to code it. 
// If two strings are anagrams, what will they look like 
// after you clean them (lowercase, no spaces/punctuation) 
// and then sort their characters alphabetically?

// Hint #2 (The Frequency Map Method): This method reuses the logic from our last problem. 
// Two strings are anagrams only if they have the exact same characters 
// with the exact same frequencies. You could build a character map 
// for each cleaned string and then compare the two maps.




function isAnagram(str1, str2){
    if (str1 === '' || str1.length === 0 && str2 === '' || str2.length === 0) {
        return "ERROR: Please provide a valid string";
    }

    let cleanedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g,'');
    let cleanedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g,'');

    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    let sortedStr1 = cleanedStr1.split('').sort().join('');
    let sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
const anagramStr = isAnagram('Dormitory','dirty room##')
console.log(anagramStr);

console.log(isAnagram('rail safety', 'fairy tales')); 

console.log(isAnagram('hello', 'goodbye')); 