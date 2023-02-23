'use strict';
// image animation (joao)

var upItem = document.querySelector('.images--right');
var bottomItem = document.querySelector('.images--left');
const sideItem = document.querySelector('.svg__side');

window.addEventListener("scroll", function() {
    upItem.style.transform = "translateX(" + window.pageYOffset / 15 + "px)";
    bottomItem.style.transform = "translateX(" + -window.pageYOffset / 10 + "px)";
    sideItem.style.transform = "translateY(" + window.pageYOffset / 5 + "px)";
});
