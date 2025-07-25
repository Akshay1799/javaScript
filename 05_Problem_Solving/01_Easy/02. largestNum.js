function findMax(arr){
    if (!arr || arr.length === 0) return null;

    let largestNum = [0];

    for (let i = 0; i < arr.length; i++) {
        if (largestNum < arr[i]) {
            largestNum = arr[i];
        }

    }
    return largestNum;
}
const largestNumber1 = findMax([2, 5, 7, 14, 32, 55])
console.log(`largest number of thr array is: ${largestNumber1}`);

const largestNumber2 = findMax([])
console.log(`largest number of thr array is: ${largestNumber2}`);

const largestNumber3 = findMax([-10, -4, -1, 0])
console.log(`largest number of thr array is: ${largestNumber3}`);
