let submit = document.querySelector('button');
let input = document.querySelector('input');
let span = document.querySelector('span');
let reset = document.querySelector('.reset');

let spanText = span.innerHTML;

submit.addEventListener("click", function(e){

    e.preventDefault();

    if(input.value.trim() === ""){
        span.innerHTML = "Input is empty";
        span.style.color = "red";
    }
    else if (!/^\S+@\S+\.\S+$/.test(input.value)) {
        span.innerText = "Enter a valid mail";
        span.style.color = "red";
    }
    else {
        span.innerHTML = "Valid input!";
        span.style.color = "green";
    }
})

reset.addEventListener("click", function(){
    input.value = "";
    span.innerHTML = spanText;
    span.style.color = "";
})
