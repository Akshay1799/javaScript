let num = document.querySelector('h3');
let input = document.querySelector('input');
let startbtn = document.querySelector('.start');
let stopbtn = document.querySelector('.stop');

let count;
let countdown;
let ispaused = false;

startbtn.addEventListener("click", function () {
    if (!ispaused) {
        count = input.value;
        num.textContent = count;
    }

    clearInterval(countdown);

    countdown = setInterval(function () {
        num.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(countdown);
            num.textContent = "Time's up!";
            num.style.color = "red";
            input.value = "";
            startbtn.textContent = "Start Countdown";
            
        }
    }, 1000)

    ispaused = false;
        startbtn.textContent = "Resume";

})

stopbtn.addEventListener("click", function () {
    clearInterval(countdown);
    ispaused = true;
    startbtn.textContent = "Resume";
})


