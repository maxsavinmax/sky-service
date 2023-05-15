"use strict";

function onScroll() {
    const header = document.querySelector(".header");
    const headerLogo = document.querySelector(".header__logo-img");

    if (window.scrollY > 140) {
        header.classList.add("header--scrolled");
        // headerLogo.classList.add("header__logo-img--scrolled");
    } else {
        header.classList.remove("header--scrolled");
        // headerLogo.classList.remove("header__logo-img--scrolled");
    }
}

function addScrollListener() {
    window.addEventListener("scroll", onScroll);
}

function removeScrollListener() {
    window.removeEventListener("scroll", onScroll);
}

addScrollListener();

function addEventListeners() {
    const servicesItems = document.querySelectorAll(".services__item");

    servicesItems.forEach((item) => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });
}

function handleMouseEnter(event) {
    const currentItem = event.currentTarget;

    const subServicesList = currentItem.querySelector(".sub-services__list");
    if (subServicesList) {
        subServicesList.classList.add("active");
    }
}

function handleMouseLeave(event) {
    const currentItem = event.currentTarget;

    const subServicesList = currentItem.querySelector(".sub-services__list");
    if (subServicesList) {
        subServicesList.classList.remove("active");
    }
}
addEventListeners();
