//! new concept for side menu 
// Show menu 

const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    //   MENU SHOW 

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//   MENU hidden

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE 

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ---------------------end---------------------


/* ======================add blur to header=================== */
//! new concept on scroll window 
const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

// ---------------------end---------------------

//! new concept on scroll up window
/* ======================show scroll up=================== */
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// ---------------------end---------------------

//! new concept on dark theme
/* ======================theme change=================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    document.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ---------------------end---------------------

// SCROLL REVEAL ANIMATION 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true //animation repeat
})

sr.reveal('.home__data, .list__container, .join__content, .footer__container')
sr.reveal('.home__img', {origin:'bottom'})
sr.reveal('.health__image, .routine__images, .follow__img-3', {origin:'left'})
sr.reveal('.health__data, .routine__data, .follow__img-4', {origin:'right'})
sr.reveal('.follow__data, .follow__content-1 img', {interval: 100})