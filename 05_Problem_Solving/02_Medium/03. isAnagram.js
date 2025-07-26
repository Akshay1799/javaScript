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