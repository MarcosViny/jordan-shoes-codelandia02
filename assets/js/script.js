/* Typed.js */
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    showCursor: false
});

/* ScrollReveal.js */
const sr = ScrollReveal({
origin: 'top',
distance: '50px',
duration: 2000,
reset: false
});

ScrollReveal().reveal('.main__header', { delay: 100 });
ScrollReveal().reveal('.card', { delay: 200 });