const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')
const closeLoginBtn = document.querySelector('.login-close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)
closeLoginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = 'none'
})


function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if(e.target == modal){
        closeModal()
    }
}