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
const backedSpan = document.getElementById('backed-amount')
const backersSpan = document.getElementById('backers')
const daysSpan = document.getElementById('daysLeft')
const progressBar = document.querySelector('.progress__progress_bar')
const optionContainers = document.querySelectorAll('.pledge__option_container')
const pledgeTitles = document.querySelectorAll('.pledge__option_title')

const initialData = {
    backed: 89914,
    totalBacked: 100000,
    totalbackers: 5007,
    daysLeft: 56,
    bambooStand: 101,
    blackEdition: 64,
    mahoganySpecial: 0
}

pledgeTitles.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        activatePledgeInputs(index)
    })
})

optionRewardButton.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        window.scrollTo(0, 0)
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

        const newBacked = initialData.backed + value
        const newBackers = initialData.totalbackers + 1

        backedSpan.innerText = `$${newBacked.toLocaleString()}`
        backersSpan.innerText = `${newBackers.toLocaleString()}`

        const newWidth = (newBacked / initialData.totalBacked) * 100

        progressBar.style.width = `${newWidth}%`

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
    optionContainers.forEach(element2 => element2.classList.toggle('pledge__option_container--active', false))

    optionContainers[index].classList.toggle('pledge__option_container--active')

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