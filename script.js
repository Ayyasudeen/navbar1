const Toggle = document.getElementsByClassName('toggle')[0]
const NavLinks = document.getElementsByClassName('navlinks')[0]

Toggle.addEventListener('click', ()=> {
    NavLinks.classList.toggle('active')
})