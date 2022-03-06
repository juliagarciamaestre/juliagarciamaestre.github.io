const homeButton = document.querySelector('.home');
const menuNav = document.querySelector('.menunavigation')

homeButton.addEventListener('click', () => {menuNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) menuNav.classList.remove('responsive')};

let lastModif= new Date(document.lastModified);
// console.log(lastModif)

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

let actualDay = days[lastModif.getDay()]
let acutalDate = lastModif.getDate()
let actualMonth = months[lastModif.getMonth()]
let actualYear = lastModif.getFullYear()
// console.log(actualDay)
// console.log(acutalDate)
// console.log(actualMonth)
// console.log(actualYear)


document.querySelector('#Day').textContent = actualDay
document.querySelector('#Date').textContent = acutalDate
document.querySelector('#Month').textContent = actualMonth
document.querySelector('#Year').textContent = actualYear
