const goToTop = document.querySelector('.goto-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100 ) {
        goToTop.classList.add('active');
    } else {
        goToTop.classList.remove('active');
    }
})