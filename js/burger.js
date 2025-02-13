const burger=document.querySelector(".burger");
const ul=document.querySelector("ul");

burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    ul.classList.toggle("active");


})