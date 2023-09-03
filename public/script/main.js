const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector("#close_btn");
const nav = document.querySelector("nav");

$(document).ready(function(){
    $(".hamburger").click(function(){
        $("nav").slideDown(500)
        $("nav").css({"display":"flex"})
    })
})