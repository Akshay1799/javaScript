let input = document.querySelector('input');
let list = document.querySelector('.item-list');
let add = document.querySelector('.add');
let remove = document.querySelector('.delete');

add.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        
        let newList = document.createElement('li');
        newList.textContent = input.value;
        list.appendChild(newList);
        input.value = "";
    }
})

remove.addEventListener("click", function(){
    let lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
})
