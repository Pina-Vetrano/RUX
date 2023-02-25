'use strict'; 

// pour prendre la classe du bouton 

const themeTrigger = document.querySelector(".js-theme-trigger");
if(themeTrigger){
    themeTrigger.addEventListener("click", toggleTheme); //quand on inclu un click sur le bouton, on met un toggleTheme
}

function toggleTheme(){ // pour changer le data attribut on doit d'abord récupérer l'attribut sur le body qui est data-theme.
    let theme = document.body.getAttribute("data-theme");
    if(theme == "dark"){
        setTheme("light");
    }else{
        setTheme("dark");
    }
}


function setTheme(theme){
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

let activeTheme = localStorage.getItem("theme");
if(activeTheme !== null){
    setTheme(activeTheme);
}
// permet de prendre en compte la dernière modification du theme.


// navigation

let navButton = document.querySelector(".btn--burger")
 
navButton.addEventListener("click", toggleNavigation)
 
function toggleNavigation() {
 if (!document.body.hasAttribute("data-menu")) {
 document.body.setAttribute("data-menu", true);
 
 } else {
 document.body.removeAttribute("data-menu");
 }
}


// date copyright
let answerDate = document.querySelector(".date");
let today = new Date();
let year = today.getFullYear();
answerDate.innerHTML = year;
