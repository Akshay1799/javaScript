// let name = "Akshay";
// let array = name.split('');
// // console.log(array);

// let reversedarray = array.reverse();
// // console.log(reversedarray);

// let reverseStr = reversedarray.join('');
// // console.log(reverseStr);


// function reversestring(str){
//     return str.split('').reverse().join('');
// }

// console.log(reversestring());

// let name = "Akshay";

// function reversestring(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reversestring(name));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function findMaxNum(numbers){
    let max = numbers[0];
    for(let i=0; i < numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];}
    }
    return max;
}

console.log(findMaxNum([2,4.6,7,12]));
