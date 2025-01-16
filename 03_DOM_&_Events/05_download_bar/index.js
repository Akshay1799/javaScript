let progress = document.querySelector('#progress');
let h4 = document.querySelector('h4');

let count = 0;
let over = setInterval(function(){
    if (count == 100) {
        h4.style.opacity = 1;
        clearInterval(over);
    }
        count++;
        progress.style.width = count+'%';
}, 100)