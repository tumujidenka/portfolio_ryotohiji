'use strict';

var hamburger = document.querySelector('.header__hamburger-menu');
var navigation = document.querySelector('.navigation');
var hamburgerLines = document.querySelectorAll('.header__hamburger-menu__line');



//ナビゲーション:クリック時の挙動
hamburger.addEventListener('click',function(){
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburgerLines.forEach(function(hamburgerLine){
        hamburgerLine.classList.toggle('active');
    })
});

//メニューのスムーススクロール
//header,footer,Service>ご相談
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.header__menu a');
    const menuFooterLinks = document.querySelectorAll('.footer__menu a');
    const menuLogoLink = document.querySelector('.header__logo a');
    const contactLink = document.querySelector('.service-plan__supplement a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                const offset = -120;
                const scrollTarget = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
                gsap.to(window, {duration: 1, scrollTo: scrollTarget, ease: "power4.out"});
            }
        });
    });
    menuLogoLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            const offset = -120;
            const scrollTarget = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
            gsap.to(window, {duration: 1, scrollTo: scrollTarget, ease: "power4.out"});
        }
    });
    menuFooterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                const offset = -120;
                const scrollTarget = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
                gsap.to(window, {duration: 1, scrollTo: scrollTarget, ease: "power4.out"});
            }
        });
    });
});

//header>navigation
document.addEventListener("DOMContentLoaded", function() {
    const menuNavLinks = document.querySelectorAll('.nav-menu a');

    menuNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navigation.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburgerLines.forEach(function(hamburgerLine){
                hamburgerLine.classList.toggle('active');
            })

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                const offset = -120;
                const scrollTarget = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
                gsap.to(window, {duration: 1, scrollTo: scrollTarget, ease: "power4.out"});
            }
        });
    });
});

