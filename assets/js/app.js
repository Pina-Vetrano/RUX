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