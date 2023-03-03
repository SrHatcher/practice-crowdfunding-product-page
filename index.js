const menuButton = document.querySelector('.header__button')
const headerNavbar = document.querySelector('.header__navbar')
const header = document.getElementById('header')
const mainHeading = document.querySelector('.main__heading')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const backButton = document.querySelector('.heading__back_button')

let totalHeight = document.body.scrollHeight
modal.style.height = `${totalHeight}px`

function openModal(){
    modal.classList.toggle('modal--inactive')
}

function closeModal(){
    modal.classList.toggle('modal--inactive')
}

function openMenu(){
    headerNavbar.classList.toggle('header__navbar--inactive')
    menuButton.classList.toggle('header__button--active')
    header.classList.toggle('header--active')
    mainHeading.classList.toggle('main__heading--corrector')
}

backButton.addEventListener('click', openModal)
menuButton.addEventListener('click', openMenu)
modalClose.addEventListener('click', closeModal)

window.addEventListener('resize', ()=>{
    totalHeight=document.body.scrollHeight
    modal.style.height = `${totalHeight}px`
})