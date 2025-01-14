let btn = document.querySelector('button');
        let p = document.querySelector('p');
        let reset = document.querySelector('#reset');

        let para = p.innerHTML;
        let design = p.style.backgroundColor;

        btn.addEventListener("click", function(){
            p.innerHTML = "Text has changed";
            p.style.backgroundColor = 'Teal';
        })
        reset.addEventListener("click", function(){
            p.innerHTML = para;
            p.style.backgroundColor = design;
        })