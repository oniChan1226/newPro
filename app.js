// Navbar for mobile view
const bars = document.querySelector('.bars-container');
const mobileNav = document.querySelector('.navigation-mobile');

bars.addEventListener('click', (e) => {
    mobileNav.classList.toggle("flex");
});