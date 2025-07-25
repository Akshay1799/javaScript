function convertToFahrenheit (c) {

    let celsius = Number(c);

    if(isNaN(celsius)){
        return "Please provide a valid number for temprature";
    }
    else{
        let fahrenheit = Number((c*9/5) + 32);
        return fahrenheit;
    }
}
const temp = convertToFahrenheit("33");
console.log(`The temprature of celsius in fahrenheit: ${temp}`);
console.log(convertToFahrenheit(10));     
console.log(convertToFahrenheit("hello"));
console.log(convertToFahrenheit(null)); 