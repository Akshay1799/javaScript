// Task: Write a function chunk that takes an array and a number, size. 
// The function should divide the array into many subarrays 
// where each subarray is of length size.

// Examples:

// chunk(['a', 'b', 'c', 'd'], 2) should return [['a', 'b'], ['c', 'd']]
// chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) should return [[1, 2, 3, 4, 5]]

// Hint #1 (Using .slice()):
// Create a new array to hold all the chunks. You can loop through the original array, 
// but instead of incrementing your index by 1, you can increment it by size on each step. 
// Inside the loop, you can grab a "slice" of the array 
// from the current index to index + size and push that slice into your results.

// Hint #2 (Checking the last chunk):
// Create an empty array for the chunks. Loop through each element of the original array. 
// For each element, look at the last subarray that was added to your chunks. 
// If that last subarray doesn't exist yet, or 
// if it is already full (its length equals size), 
// create a new subarray with the current element and push it to the main array. 
// Otherwise, just add the current element to that last subarray.



function chunk(arr, size){
    const chunked = []; // to store the array chunks
    let index = 0; // to keep track of index

    while (index < arr.length) {
        const newChunk = arr.slice(index, index + size);
        chunked.push(newChunk);
        index += size;
    }
    return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 12, 33, 10], 3));


