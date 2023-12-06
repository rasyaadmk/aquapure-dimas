AOS.init();
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('navbg', 'shadow');
    } else {
        nav.classList.remove('navbg', 'shadow');
    }
});