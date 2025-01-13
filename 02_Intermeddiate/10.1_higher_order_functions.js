const num = [1,2, 3, 4, 5, 6];

for (const numbers of num) {
    // console.log(numbers);
    
}


//************ MAPS ************

const map = new Map();
map.set('IN', 'INDIA');
map.set('UK', 'UNITED KIGNDOM');
map.set('USA', 'UNITED STATES OF AMERICA');

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
    
}

for (const key in map) {
    console.log(key);
    
}

// const info = { 
    //     name: 'james',
    //     age: 24
    // }
    
    // for (const details of info) {
    //     console.log(`${details} : ${info[details]}`);
        
    // }
    
    const info = { //
        name: 'james',
        age: 24
    }
    
    for (const details of Object.keys(info)) {
        // console.log(`${details} : ${info[details]}`);
        
    }

