//nav-menu popup
var menu = document.getElementById("drop-menu");
var menuBtn = document.getElementById("menuBtn");
var closeBtn = document.getElementById("closeBtn")

menuBtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

});

let closenav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

};

closeBtn.addEventListener('click', closenav);
