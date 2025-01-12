const games = ['Call of Duty', 'PUBG', 'Real Cricket'];

// games.forEach( function names(val){
//     console.log(val);
    
// })

games.forEach( (item) => {
    // console.log(item);
    
} )

function printMe(item){
    // console.log(item);
}
games.forEach(printMe);

function gameName(item, index, arr){
    console.log(item, index,arr);
    
}
// games.forEach(gameName);


const coding = [
    {
        languageName: 'JavaScript',
        fileName: 'js'
    },
    {
        languageName: 'Java',
        fileName: 'java'
    },
    {
        languageName: 'Python',
        fileName: 'py'
    }
];

coding.forEach( (name) => {
    // console.log(name.languageName);
    
} )

//+++++++++++++ 1 Calculate Total Price of Items +++++++++++++

const items = [
    {
        name: 'Apple',
        price: 10
    },
    {
        name: 'Banana',
        price: 5
    },
    {
        name: 'Pineapple',
        price: 20
    },
    {
        name: 'Orange',
        price: 15
    }
];

let totalPrice = 0;

items.forEach( (item) =>{
    totalPrice += item.price;
} )

// console.log(`Total price of items is: ${totalPrice}`);


//+++++++++++++ 2 Display Names of Students Who Passed +++++++++++++

const student = [
    {
        name:'Alex',
        score: 65
    },
    {
        name:'Grace',
        score: 55
    },
    {
        name:'Anderson',
        score: 35
    },
    {
        name:'Jordan',
        score: 45
    }
];

// console.log("Students who passed: ");

student.forEach( students =>{
    if (students.score > 50) {
        // console.log(`${students.name} with score ${students.score}.`);
        
    }
})
