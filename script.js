var full=document.querySelector("#full")
var menu = document.querySelector("#menu i")
var close=document.querySelector("#full i")
var tl=gsap.timeline()
tl.to("#full",{
    right:0,
    duration:1,
    opacity:1,
    stagger:0.3,
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})