const nav = document.getElementById('nav')
const navbar = document.getElementById('navbar')
let navState = false
nav.addEventListener('click', ()=>{
    navState == false
    ? navbar.classList.remove("show")
    : navbar.classList.add("show")

    
    return navState = !navState
})