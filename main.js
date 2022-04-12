const menu = document.querySelector('.menu')
let menuOpen = false

menu.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open')
    menuOpen = true
  } else {
    menu.classList.remove('open')
    menuOpen = false
 }
})
