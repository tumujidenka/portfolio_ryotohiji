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

