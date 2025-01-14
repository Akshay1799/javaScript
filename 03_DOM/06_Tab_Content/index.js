let home = document.querySelector('#home');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');

let hometext = document.querySelector('#hometext');
let abouttext = document.querySelector('#abouttext');
let contacttext = document.querySelector('#contacttext');

let sections = [hometext, abouttext, contacttext];

hometext.style.display = 'Block';

home.addEventListener("click", function(){
    showSection(hometext);
})
about.addEventListener("click", function(){
    showSection(abouttext);
})
contact.addEventListener("click", function(){
    showSection(contacttext);
})

function showSection(section) {
    sections.forEach(function(sect){
        sect.style.display = 'none';
    })

    section.style.display = 'Block';
}
