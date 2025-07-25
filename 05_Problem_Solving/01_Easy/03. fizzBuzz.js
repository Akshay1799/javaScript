function fizBuzz(n) {

    let num = Number(n);
    if(isNaN(num)){ 
        console.log("Provide a valid number");
        return;
    }

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
        
    }
    return 
}
fizBuzz(15);

// const fizzBuzzNumber = fizBuzz(15);
// console.log(fizzBuzzNumber);
