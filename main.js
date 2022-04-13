const menu = document.querySelector('.menu')
let menuOpen = false
const activeMenu = document.querySelector('.list-container')
const items = document.querySelectorAll(".list-item")

function toggleMenu() {
  if (!menuOpen) {
    menu.classList.add('open')
    menuOpen = true
    activeMenu.style.left = '0'
  } else {
    menu.classList.remove('open')
    menuOpen = false
    activeMenu.style.left = '-100%'

  }
 
}
menu.addEventListener('click', toggleMenu)
items.forEach(item=>{
  item.addEventListener('click', toggleMenu)
})

