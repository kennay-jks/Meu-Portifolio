let nav = document.querySelector('.nav')
let id = document.querySelector('.in')
let nk1 = document.querySelector('.nk1')
let nk2 = document.querySelector('.nk2')
let nk3 = document.querySelector('.nk3')
let nk4 = document.querySelector('.nk4')

nav.addEventListener('click', () => {
    if (id.classList.contains('active')) {
        id.classList.remove('active')
        id.classList.add('dea')
        // icon
        nav.classList.remove('active')
        //link-menu
        nk1.classList.remove('active')
        nk2.classList.remove('active')
        nk3.classList.remove('active')
        nk4.classList.remove('active')
        //console.log('dea')
    } else {
        id.classList.remove('dea')
        id.classList.add('active')
        // icon
        nav.classList.add('active')
        //link-menu
        nk1.classList.add('active')
        nk2.classList.add('active')
        nk3.classList.add('active')
        nk4.classList.add('active')
        //console.log('act')
    }
})