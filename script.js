"use strict";

/* ---- Navigation Bar Scroll Animation and Shadow*/
const navigation = document.querySelector(".nav-container");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && window.scrollY > 10) {
    navigation.classList.add("navigation--shadow");
  } else {
    navigation.classList.remove("navigation--hidden");
  }

  if (window.scrollY === 0) {
    navigation.classList.remove("navigation--shadow");
  }

  if (lastScrollY < window.scrollY && window.scrollY > 400) {
    navigation.classList.add("navigation--hidden");
  }

  lastScrollY = window.scrollY;
});

/* Navigation menu for mobile devices */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navigation__menu');
const menuBorder = document.querySelector('.navigation');
const menuBackground = document.querySelector('.nav-container');
const menuButton = document.querySelector('.navigation__withButton');
const menuLogin = document.querySelector('.navigation__login');

const navList = document.querySelector('.navigation__list');
const navArrow = document.querySelector('.navigation__arrow');
const navArrow1 = document.querySelector('.navigation__arrow1');
const navArrowMain = document.querySelector('.navigation__arrow--main');
const navIconArrow = document.querySelector('.navigation__icon--arrow');
const navIconArrow1 = document.querySelector('.navigation__icon--arrow1');
const navIconArrowUp = document.querySelector('.navigation__icon--arrowUp');
const navIconArrowUp1 = document.querySelector('.navigation__icon--arrowUp1');

const navSubItem = document.querySelector('.navigation__item--sub');
const navSubItem2 = document.querySelector('.navigation__item--sub2');
const navSubItem3 = document.querySelector('.navigation__item--sub3');
const navSubItem4 = document.querySelector('.navigation__item--sub4');
const navSubItem5 = document.querySelector('.navigation__item--sub5');
const navSubItem6 = document.querySelector('.navigation__item--sub6');

if (window.innerWidth < 1200) {
  menuLogin.innerHTML = '<svg class="navigation__icon"><use xlink:href="img/sprite.svg#icon-user"></use></svg>';
} else {
  menuLogin.innerHTML = '<a href="#home" class="navigation__link">Log In</a>';
}

/* menuButton.classList.toggle('navigation__menu'); */

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  menuBorder.classList.toggle('active');
  menuButton.classList.toggle('navigation--hide');
  menuLogin.classList.toggle('navigation--hide');
  menuBackground.classList.toggle('nav-container--white');
  navigation.classList.remove("navigation--shadow");
})

/* -------------------- First li opener ------------------ */
navArrow.addEventListener('click', function() {
  navSubItem.classList.toggle('navigation--hide');
  navSubItem.classList.toggle('navigation__item');
  navSubItem2.classList.toggle('navigation--hide');
  navSubItem2.classList.toggle('navigation__item');
  navSubItem3.classList.toggle('navigation--hide');
  navSubItem3.classList.toggle('navigation__item');

  navArrow.classList.toggle('is-active');
  navArrow.classList.toggle('active');
  navIconArrow.classList.toggle('navigation__icon--hide')
  navIconArrowUp.classList.toggle('navigation__icon--hide')
  navIconArrowUp.classList.toggle('navigation__icon--white')
})

/* -------------------- Second li opener ------------------ */
navArrow1.addEventListener('click', function() {
  navSubItem4.classList.toggle('navigation--hide');
  navSubItem4.classList.toggle('navigation__item');
  navSubItem5.classList.toggle('navigation--hide');
  navSubItem5.classList.toggle('navigation__item');
  navSubItem6.classList.toggle('navigation--hide');
  navSubItem6.classList.toggle('navigation__item');

  navArrow1.classList.toggle('is-active');
  navArrow1.classList.toggle('active');
  navIconArrow1.classList.toggle('navigation__icon--hide')
  navIconArrowUp1.classList.toggle('navigation__icon--hide')
  navIconArrowUp1.classList.toggle('navigation__icon--white')
})



if (window.innerWidth >= 1200) {
  navSubItem.classList.add('navigation--hide');
}

/* if (element.classList.contains(navArrow)) {
  navArrow.addEventListener('click', function() {
    navSubItem.classList.toggle('navigation--hide');
    navSubItem.classList.toggle('navigation__item');
  })
} */