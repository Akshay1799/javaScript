// Task: Write a function destroyer that takes an initial array as its first argument, 
// followed by one or more additional arguments. 
// The function should remove all elements from the initial array 
// that are of the same value as these additional arguments and return a new array.

// Examples:

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

// Hint #1 (Handling the arguments):
// Your function will receive multiple arguments, but you don't know how many. 
// Look into JavaScript's rest parameter syntax (...). 
// This will let you capture all the arguments after the first one 
// and gather them into a single array. 
// For example, function destroyer(arr, ...valuesToDestroy).

// Hint #2 (Filtering the array):
// Once you have the initial array and an array of values you need to remove, 
// you can use the .filter() method on the initial array. 
// The .filter() method creates a new array with all elements that pass a test. 
// The test here would be: "is this element included in the valuesToDestroy array?" The .includes() method will be very helpful for this check.


function destroyer (arr, ...valueToDestroy){
    // The rest operator contains all the different types of arguments
    return arr.filter((val)=> !valueToDestroy.includes(val));
    
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))