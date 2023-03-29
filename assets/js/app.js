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


var xValues = ["Restaurer", "Verdure", "Détente", "Sociabiliser","Couvert"];
var yValues = [18, 25, 20, 11, 17];
var barColors = ["red", "green","blue","orange","purple"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Meilleurs Top Tasks prélevés" // pas sure de celle catchphrase
    }
  }
});