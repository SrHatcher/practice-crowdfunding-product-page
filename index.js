const menuButton = document.querySelector('.header__button')
const headerNavbar = document.querySelector('.header__navbar')
const header = document.getElementById('header')

function openMenu(){
    headerNavbar.classList.toggle('header__navbar--inactive')
    menuButton.classList.toggle('header__button--active')
    header.classList.toggle('header--active')
}

menuButton.addEventListener('click', openMenu)