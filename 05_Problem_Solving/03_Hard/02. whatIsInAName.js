// Task: Write a function whatIsInAName that takes two arguments: 
// an array of objects (collection) and an object (source). 
// The function should look through the collection and return a new array 
// of all the objects that have matching key-value pairs as the source object.

// Examples:

// whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//                { first: "Mercutio", last: null }, 
//                { first: "Tybalt", last: "Capulet" }], 
//                { last: "Capulet" }) 
// should return [{ first: "Tybalt", last: "Capulet" }].

// whatIsInAName([{"apple": 1, "bat": 2},{"bat": 2},{ "apple": 1, "bat": 2, "cookie": 2 }], 
// { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, 
// { "apple": 1, "bat": 2, "cookie": 2 }].

// Hint #1: The overall structure will be to use the .filter() method on the collection array. 
// The main challenge is figuring out the logic that goes inside the filter.

// Hint #2: Inside the filter, you need to check 
// if the current object from the collection matches all the keys from the source object. 
// You can get an array of the keys from the source object using Object.keys(source).

// Hint #3: The .every() method could be very useful here. 
// You can loop through the source keys and check 
// if every key exists in the collection's object and has the same value.


function whatIsInAName (collection, source){
    const sorceKeys = Object.keys(source);

    return collection.filter((obj)=>{
        return sorceKeys.every(key=>{
            return obj.hasOwnProperty(key) && obj[key] === source[key]
        })
    })
}
const result = whatIsInAName(
  [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" }
);

console.log(result); 