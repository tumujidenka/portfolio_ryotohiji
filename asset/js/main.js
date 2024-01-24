'use strict';

gsap.registerPlugin(ScrollTrigger);

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
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            const offset = -120;
            const scrollTarget = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
            gsap.to(
                window,{duration: 1, scrollTo: scrollTarget, ease: "power4.out"});
        }
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


////#service
//参考サイトをホバーした際の挙動
const referenceSites = document.querySelectorAll('.site-image');

referenceSites.forEach(referenceSite => {
    //マウスホバーで、参考サイトの拡大画像をふわっと表示させる
    referenceSite.addEventListener('mouseenter', ()=>{
        const siteImage = referenceSite.nextElementSibling;
        siteImage.style.display = 'block';

        gsap.to(siteImage,{
            opacity:1,
            duration:0.3
        });
    });
    //マウスが離れると、参考サイトの拡大画像がふわっと非表示になる
    referenceSite.addEventListener('mouseleave', ()=>{
        const siteImage = referenceSite.nextElementSibling;

        gsap.to(siteImage,{
            opacity:0,
            duration:0.3,
            onComplete:()=>{
                siteImage.style.display = 'none';
            }
        });
    });
});

////background
//aboutのところに来たら、背景画像を薄くする
gsap.to('.background',{
    scrollTrigger:{
        trigger:'#about',
        start: 'top center',
        toggleActions:'play none none reverse',
        markers:false,
    },
    opacity:0.2,
    duration:0.3,
})
