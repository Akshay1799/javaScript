const user1 = {
    name: "Akshay",
    age: 25,
    
    getName: function(){
        return this.name;
    },

    getRoll: function(){
        return this.roll_no;
    }
}

const user2 = {
    roll_no: 1,
    name: "Sunny",
    __proto__: user1
}

// console.log(user2.name);
// console.log(user2.getRoll());

const user3={
    class:"MCA",
    __proto__: user2
}

// console.log(user3);
// console.log(user3.age);

for (const key in user3) {
    if (user3.hasOwnProperty(key)) {
        console.log(`Own property: ${key}`); 
    }
    else{
        console.log(`Inherited propertty: ${key}`);
        
    }
}

