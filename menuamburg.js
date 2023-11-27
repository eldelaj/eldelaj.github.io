window.addEventListener("DOMContentLoaded",(event)=>{
    const menubtn=document.getElementById("menu");
    const nav=document.querySelector("header nav");
    const body =document.querySelector("body");
    menubtn.addEventListener("click",(event)=>{
        menubtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
    });
});