var navbarBtn = document.querySelector('#burger');
var navbarMenu = document.querySelector('.navbar-menu');

function toggleMenu() {
    navbarMenu.classList.toggle('active');
}

function closeNav() {
    // navbarBtn.classList.toggle('#burger');
    navbarMenu.classList.remove('active');
}

navbarMenu.addEventListener('click', closeNav);
navbarBtn.addEventListener('click', toggleMenu);