
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = numbers.filter( (num) => num > 3);
// console.log(newNums);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
newNums = [];
numbers.forEach( (num) => {
    if (num > 3) {
        newNums.push(num);
    }
});
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userBooks = books.filter( (bks) => bks.genre == 'Fiction')
//   console.log(userBooks);
  

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNums = myNumbers.map( (num) => num + 10);

let myNums = myNumbers
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num > 30 )

// console.log(myNums);


let digits = [1, 2, 3, 4];

// let newDigits = digits.reduce(function (acc, currentval) {
//     console.log( `acc: ${acc} and currentval: ${currentval}`);
//     return acc + currentval;
// },0);

let newDigits = digits.reduce((acc, currval) => acc + currval, 0);

// console.log(newDigits);
