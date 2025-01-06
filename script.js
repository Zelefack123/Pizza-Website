const Menu = document.querySelector(".fa-bars");
const Navlinks = document.querySelector("#navlinks");
const Cross = document.querySelector(".fa-xmark")
Menu.addEventListener("click",()=>{
    Navlinks.classList.add("active");
})


Cross.addEventListener("click", () => { 
    Navlinks.classList.remove("active");

});
