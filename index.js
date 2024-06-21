let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click',() =>{
    menuIcon.classList.toggle('fa-solid');
    navbar.classList.toggle('active')
});

window.onscroll = () => {
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    duration:2000,
    reset:true

});

sr.reveal('.home-text,.home-img, .about-img, .about-text,.box,.services-cards,.contact-text',{
    interval:200
})