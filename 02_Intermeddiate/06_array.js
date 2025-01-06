let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

const newarr = new Array(1, 2, 3);
// console.log(newarr);


// console.log(numbers.includes(3));
numbers.push(6);
// console.log(numbers);

numbers.pop();
// console.log(numbers);

// console.log(numbers.indexOf(3));
// console.log(numbers.join());
// console.log(numbers.join(''));
// console.log(numbers.join(' '));
// console.log(numbers.length);

// console.log(numbers.shift());
numbers.shift();
// console.log(numbers);

numbers.unshift(0)
// console.log(numbers);
// console.log(numbers.unshift(0)); // provide the length pf the updated array.




// console.log(numbers);
// console.log(numbers.slice(1,4)); // it doesn't change the original array

// console.log(numbers.splice(1,3)); // it changes the original array and return the array with rest of the elements.
// console.log(numbers);


let name = ['Akshay', 'Ashwin', 'Neeraj', 'Ayush']
// console.log(name);
let surname = ['ladne', 'jaiswal', 'singh', 'parihar']

// name.push(surname);
// console.log(name);

let nameSurname = name.concat(surname);
// console.log(nameSurname);

const nameWithSurname = [...name, ...surname]
// console.log(nameWithSurname);

const anotherArray = [2,3,5,[8,7],[9,0,[1,6]]];
// console.log(anotherArray);

let newArr = anotherArray.flat(Infinity);
// console.log(newArr);

// console.log(Array.isArray("Akshay"));
// console.log(Array.from("Akshay"));
// console.log(Array.from({name : "Akshay"})); // returns an empty array.

let num1 = 100;
let num2 = 200;
let num3 = 300;

// console.log(Array.of(num1, num2, num3));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//************ 1. Shopping list ************

let items = ['bread', 'cheese', 'avacado', 'ice'];
// console.log(items);

items.push('butter');
// console.log(items);

items.pop();
// console.log(items);

items[1] = 'butter';

// console.log(items);


//************ 2. Grades tracker ************

let grades = [55, 67, 74, 88, 99];
// console.log(grades);

grades.push(91);
// console.log(grades);

let lowestGrades = Math.min(...grades);
grades.splice(grades.indexOf(lowestGrades), 1);

let sum = grades.reduce((acc, grades) => acc + grades, 0);
let average = sum / grades.length;

// console.log("upgraded grades: " + grades);


//************ 3. Inventory tracker ************

let stockedItems = ['book', 'pencil', 'pen', 'rubber', 'sharpener'];
stockedItems.push('geometry-box');

let removedItem = 'pencil';

stockedItems = stockedItems.filter(item => item !== removedItem);

let isAvailable = stockedItems.includes('book');

// console.log("Inventory: " + stockedItems);
// console.log("Is book available: " + isAvailable);


//************ 4. Movie Wishlist Manager ************

let movieList = ['Animal', 'Money heist', 'vivah', 'little things'];
movieList.push('pushpa');
// console.log(movieList);

let watchedMovie = 'pushpa';
movieList = movieList.filter(movie => movie !== watchedMovie);
// console.log(movieList);

let totalMovies = movieList.length;

// console.log("updated movie list: " + movieList);
// console.log("movies left: " + totalMovies);


//************ 5. Attendence Tracker ************

let students = ['Akshay', 'Ashwin', 'Neeraj', 'Ayush'];
students.push('ayushT');

let leftEarly = 'ayushT';
students = students.filter(student => student !== leftEarly);

let isNeerajPresent = students.includes('Neeraj');

// console.log("Attendence list: " + students);
// console.log("Is Neeraj Present: " + isNeerajPresent);

