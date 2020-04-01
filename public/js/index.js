const burgerButton = document.querySelector('#burger-button')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.c-header__list-item')
const lightButton = document.querySelector('#light-button')
let theme = 'light'

const toggleTheme= mediaQuery => {
    if (mediaQuery.matches) { // If media query matches
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.toggle('c-header__nav--active')
                links.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = ''
                    } else {
                        link.style.animation = `fade .5s ease forwards ${index / 7 + .3}s`
                    }
                })
            })
        })
    } else {
    }
  }
  
  const mediaQuery = window.matchMedia("screen and (max-width: 540px)")

  mediaQuery.addListener(toggleTheme) // Attach listener function on state changes

const menuToggle = () => {
    menu.classList.toggle('c-header__nav--active')
}

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('c-header__nav--active')
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fade .5s ease forwards ${index / 7 + .3}s`
        }
    })
})



lightButton.addEventListener('click', () => {
    // if theme is already dark, change to light colors
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--body', '#E5E5E5')
        document.documentElement.style.setProperty('--element', '#F2F7F2')
        document.documentElement.style.setProperty('--primary', '#C05746')
        document.documentElement.style.setProperty('--accent', '#43AA8B')
        document.documentElement.style.setProperty('--text', '#2F323A')
        theme = 'light'
        // if theme is already light, change to dark colors
    } else {
        document.documentElement.style.setProperty('--body','#2F323A')
        document.documentElement.style.setProperty('--element','#434853')
        document.documentElement.style.setProperty('--primary','#43AA8B')
        document.documentElement.style.setProperty('--accent','#C05746')
        document.documentElement.style.setProperty('--text','#F2F7F2')
        theme = 'dark'
    }
})
