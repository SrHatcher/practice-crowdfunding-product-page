const menuButton = document.querySelector('.header__button')
const headerNavbar = document.querySelector('.header__navbar')
const header = document.getElementById('header')
const mainHeading = document.querySelector('.main__heading')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const backButton = document.querySelector('.heading__back_button')
const radioButtons = document.querySelectorAll('.pledge__radio')
const pledgeSeparators = document.querySelectorAll('.pledge__option_separator')
const pledgeFooter = document.querySelectorAll('.pledge__footer_container')
const optionRewardButton = document.querySelectorAll('.option__reward_button')
const successButton = document.querySelector('.success__button')
const pledgeContinueButton = document.querySelectorAll('.pledge__option_button')
const pledgeModal = document.querySelector('.modal__pledge_container')
const modalSuccess = document.querySelector('.modal__success')

optionRewardButton.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        openModal()
        activatePledgeInputs(index+1)
    })
})

radioButtons.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        activatePledgeInputs(index)
    })
})

pledgeContinueButton.forEach((element)=>{
    element.addEventListener('click',()=>{
        pledgeModal.classList.toggle('modal__pledge_container--inactive')
        modalSuccess.classList.toggle('modal__success--inactive')
    })
})


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

function activatePledgeInputs(index){
    radioButtons.forEach(element2=>element2.checked = false)
    pledgeSeparators.forEach(element2=>element2.classList.toggle('pledge__option_separator--inactive', true))
    pledgeFooter.forEach(element2=>element2.classList.toggle('pledge__footer_container--inactive', true))

    radioButtons[index].checked = true
    pledgeSeparators[index].classList.toggle('pledge__option_separator--inactive', false)
    pledgeFooter[index].classList.toggle('pledge__footer_container--inactive', false)
}

backButton.addEventListener('click', openModal)
menuButton.addEventListener('click', openMenu)
modalClose.addEventListener('click', closeModal)
successButton.addEventListener('click', closeModal)

window.addEventListener('resize', ()=>{
    totalHeight=document.body.scrollHeight
    modal.style.height = `${totalHeight}px`
})