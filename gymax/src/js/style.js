/* Overlay navbar mobile */
var btnOverlay = document.getElementById("wapper--overlay");
var navbarMobile = document.getElementById("navbarMobile");
var element = 0;

btnOverlay.style.display = "none";
btnOverlay.addEventListener('click', closeNav);

function openNav() {
    navbarMobile.style.width = "75%";
    btnOverlay.style.display = "block";
}

function closeNav() {
    navbarMobile.style.width = "0";
    btnOverlay.style.display = "none";
}
/* Overlay navbar mobile */

/* Scroll height navbar */

/* Scroll height navbar */