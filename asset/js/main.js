'use strict';

gsap.registerPlugin(ScrollTrigger);


////ローディングアニメーション
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#333333',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  


var hamburger = document.querySelector('.header__hamburger-menu');
var navigation = document.querySelector('.navigation');
var hamburgerLines = document.querySelectorAll('.header__hamburger-menu__line');



////ナビゲーション:クリック時の挙動
hamburger.addEventListener('click',function(){
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburgerLines.forEach(function(hamburgerLine){
        hamburgerLine.classList.toggle('active');
    })
});

////メニューのスムーススクロール
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
        siteImage.style.visibility = 'visible';

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
                siteImage.style.visibility = 'hidden';
            //     setTimeout(()=>{
            //     },3000)
            }
        });
    });
});

////background
//aboutのところに来たら、背景画像を薄くする
gsap.to('.background-image',{
    scrollTrigger:{
        trigger:'#service',
        start: 'top center',
        toggleActions:'play none none reverse',
        markers:false,
    },
    opacity:0.5,
    duration:0.3,
})
gsap.to('.background-image',{
    scrollTrigger:{
        trigger:'#about',
        start: 'top center',
        toggleActions:'play none none reverse',
        markers:false,
    },
    opacity:0.2,
    duration:0.3,
})

////#works
//パネルをふわっと順番に表示させる
const panels = gsap.utils.toArray('.works-panel');

panels.forEach((panel, index) => {
    gsap.from(panel, {
      opacity: 0,
      y:20,
      duration: 0.5,
      delay: (index * 0.3) -0.1,
      scrollTrigger: {
        trigger: '#works',
        start: 'top center+=200',
        toggleActions: 'play none none none'
      }
    });
});

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () =>{
        gsap.to(panel,{
            scale: 1.1,
            duration:0.1
        });
    });

    panel.addEventListener('mouseleave', () =>{
        gsap.to(panel, {
            scale: 1,
            duration:0.1
        });
    });
});