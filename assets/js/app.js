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

//BURGER MENU // FERMER NAV QUAND ON CLIQUE SUR UN LIEN // 

let closeMenu = document.querySelector(".list__m--header");

if(closeMenu){

closeMenu.addEventListener("click", MenuList);


    function MenuList (){
        if(!document.body.hasAttribute("data-menu")){
            document.body.setAttribute("data-menu", false);
        } else {
            document.body.removeAttribute("data-menu");
        }
    }

}

// date copyright
let answerDate = document.querySelector(".date");
let today = new Date();
let year = today.getFullYear();
answerDate.innerHTML = year;

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}