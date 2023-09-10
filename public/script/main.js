const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector("#close_btn");
const nav = document.querySelector("nav");

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
        $("nav").slideUp(500);
    })
})
