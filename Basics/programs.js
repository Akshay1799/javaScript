function validateAge(age) {
    if(isNaN(age)){
        console.log("Invalid input! Provide a valid number.");
        return;
    }
        if (age<13) {
            console.log("You are a child");
            
        } else if (age >= 13 && age <=19) {
            console.log("You are a Teenager");
        }
        else if (age >= 20){
            console.log("You are an adult");

        }
        else{
            console.log("Invalid input");

        }
}

validateAge(11);
validateAge(15);
validateAge(21);
validateAge("bdjf");