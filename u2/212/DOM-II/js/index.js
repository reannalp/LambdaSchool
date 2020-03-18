const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
  link.addEventListener('mouseenter', (event) => {
    link.style.color = "#FCB74A";
    link.style.transition = "all 0.3s";
    event.preventDefault();
  });
  navLink.forEach(link => {
    link.addEventListener('mouseleave', (event) => {
      event.stopPropagation();
      link.style.color = "black";
    });
  }); //2 (nested, doesn't prop)
}); //1 (prevents refresh)

const funTitle = document.querySelector('.logo-heading');
funTitle.addEventListener('click', () => {
  funTitle.style.transform = "scale(1.1)";
  funTitle.style.transition = "all 0.3s";
}); //3

const busImg = document.querySelector('img');
busImg.addEventListener('dblclick', () => {
  busImg.style.transform = "scaleX(-1)";
  busImg.style.transition = "all 0.3s";
}); //4

const body = document.querySelector('body');
window.addEventListener('resize', () => {
  body.style.backgroundColor = "lightblue";
}); //5

const welcome = document.querySelector('h2');
window.addEventListener('scroll', () => {
  welcome.textContent = "Welcome to the Hell Bus!"
  welcome.style.color = "red";
}); //6

const mainNav = document.querySelector('.main-navigation');
window.addEventListener('keypress', () => {
  mainNav.style.backgroundColor = "#FCB74A";
}); //7

window.addEventListener('keyup', () => {
  mainNav.style.backgroundColor = "white";
}); //8

const content = document.querySelectorAll('.text-content');
window.addEventListener('load', () => {
  alert("Alert!");
}); //9

const adventure = document.querySelector('.img-content');
adventure.addEventListener('mousedown', () => {
  adventure.style.display = "none";
}); //10