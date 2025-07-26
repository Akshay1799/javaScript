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
