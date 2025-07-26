// Task: The Fibonacci sequence is a series of numbers 
// where each number is the sum of the two preceding ones, 
// usually starting with 0 and 1.

// The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// Write a function fib that takes a number n and 
// returns the n-th number in the Fibonacci sequence. 
// We'll use 0-based indexing, so fib(0) is 0, fib(1) is 1, and so on.

// Examples:

// fib(4) should return 3.

// fib(8) should return 21.

// Hint #1 (The Iterative Solution):
// This is the most common and efficient approach. 
// You can build the sequence in an array. 
// Start with an array like [0, 1]. Then, loop from i = 2 up to n. 
// In each step, calculate the next number 
// by adding the two previous numbers in your array (arr[i-1] + arr[i-2]) and push it. 
// Finally, return the number at index n from your array.

// Hint #2 (The Recursive Solution):
// This is a classic computer science example of recursion (a function that calls itself).
// Base Case: If n is less than 2, the answer is just n.
// Recursive Step: For any other n, the result is fib(n - 1) + fib(n - 2).
// Warning: This solution is elegant but can be very slow for larger numbers due to repeated calculations.



// Using while loop

// function fibonacci(n){
//     if(n<2) return n;

//     let a = 0;
//     let b = 1;
//     let count = 2;

//     while (count <= n) {
//         let temp = b;
//         b = b + a;
//         a = temp;
//         count++;
//     }

//     return b;
// }

// console.log(fibonacci(3));


// Using for loop

function fib(n){
    if(n<2) return n;

    let first = 0;
    let second = 1;

    for (let i = 2; i <=n; i++) {
        let temp = second;
        second = second + first;
        first  = temp;
    }
    return second;
}

console.log(fib(8));
