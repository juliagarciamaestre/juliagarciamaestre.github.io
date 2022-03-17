const homeButton = document.querySelector('.home');
const menuNav = document.querySelector('.menunavigation')

homeButton.addEventListener('click', () => {menuNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) menuNav.classList.remove('responsive')};
