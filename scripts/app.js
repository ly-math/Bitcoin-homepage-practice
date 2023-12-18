
// header 
const hambergurIcon = document.querySelector('.hambergur');
const navBar = document.querySelector('.nav-bar');
const navLinkContainer = document.querySelectorAll('.nav-link-container');

hambergurIcon.addEventListener('click', () => {
    navBar.classList.toggle('nav-bar-active');
});

navLinkContainer.forEach( e => {

    e.addEventListener('click', ()=> {
        e.classList.toggle('active');
    });

});