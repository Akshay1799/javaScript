let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');
let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    let tempsrc = img1.src;
    img1.src = img2.src;
    img2.src = tempsrc;
})
