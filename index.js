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
const bookmarkButton = document.querySelector('.heading__bookmark_button')
const bookmarkText = document.querySelector('.heading__bookmark_text')
const pledgeInputs = document.querySelectorAll('.pledge__input')

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

pledgeContinueButton.forEach((element, index)=>{
    element.addEventListener('click',()=>{
        let pledge
        switch (index) {
            case 0:
                pledge = 0
                break;
            case 1:
                pledge = 25
                break;
            case 2:
                pledge = 75
                break;
            case 4:
                pledge = 200
                break;
            default:
                break;
        }
        
        const inputValue = pledgeInputs[index].value;
        const value = Number(inputValue)

        if(!Number(inputValue) || value<=pledge){
            pledgeInputs[index].value = ''
            return
        }

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

function bookProject(){
    bookmarkButton.classList.toggle('heading__bookmark_button--active')

    if(bookmarkText.innerText === 'Bookmark'){
        bookmarkText.style.paddingInlineStart = '6rem'
        bookmarkText.style.fontWeight = '700'
        bookmarkText.style.color = '#157a74'
        bookmarkText.innerText = 'Bookmarked'
    }else{
        bookmarkText.style.paddingInlineStart = '7rem'
        bookmarkText.style.fontWeight = '400'
        bookmarkText.style.color = 'black'
        bookmarkText.innerText = 'Bookmark'
    }
}

backButton.addEventListener('click', openModal)
menuButton.addEventListener('click', openMenu)
modalClose.addEventListener('click', closeModal)
successButton.addEventListener('click', closeModal)
bookmarkButton.addEventListener('click', bookProject)

window.addEventListener('resize', ()=>{
    totalHeight=document.body.scrollHeight
    modal.style.height = `${totalHeight}px`
})