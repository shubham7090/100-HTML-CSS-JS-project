const open=document.getElementById("open");
console.log(open);
const close=document.getElementById("close");
const conatiner= document.querySelector(".container");

open.addEventListener('click',()=>{
    conatiner.classList.add("show-nav");
    console.log("clicked");
})
close.addEventListener('click',()=>{
    conatiner.classList.remove("show-nav");
})