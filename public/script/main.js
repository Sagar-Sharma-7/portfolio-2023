const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector("#close_btn");
const nav = document.querySelector("nav");
const exploreMoreSection = document.querySelector(".explore-more-page");
const exploreBtn = document.querySelector(".exploreBtn");
const exploreCloseBtn = document.querySelector(".close-btn");


// gsap
const tl = gsap.timeline({
    defaults: {ease: 'power1.out'}
});

tl.to('.text', {
    y:'0%',
    duration: 0.5,
    stagger: 0.25
});
tl.to(".slider", {
    y: '-100%',
    duration:1,
    delay: 0.25
})
tl.to(".coverpage_wrap", {
    y:'-100%',
    duration: 1.5
}, "-=1")





// hamburger navbar
$(document).ready(function(){
    $(".hamburger").click(function(){
        $("nav").slideDown(500);
        $("nav").css({"display":"flex"});
    });
    $("#close_btn").click(function(){
        $("nav").slideUp(500);
    })
});

$(document).ready(function(){
    $(".nav-link").click(function(){
        if(screen.width <= 750){
            $("nav").slideUp(500);
        }
    });
});


// explore more section
$(document).ready(function(){
    $(".exploreBtn").click(function(){
        $(".explore-more-page").slideDown(1000);
        $(".explore-more-page").css({"display":"flex"});
    });
    $(".close-btn").click(function(){
        $(".explore-more-page").slideUp(500);
    });
})



