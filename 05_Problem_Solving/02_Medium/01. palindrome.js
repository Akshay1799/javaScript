function isPalindrome(str){
   let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');

   let reversedStr = cleanedStr.split('').reverse().join('').toLowerCase();

    return cleanedStr === reversedStr;
}
const newStr1 = isPalindrome('madam');
console.log(newStr1);
