let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top<offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    
};

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:1000,
    delay:100
});
 

 ScrollReveal().reveal('.heading ,.heading-1',{origin: 'top'});
 ScrollReveal().reveal('.home-image, .about-img,.icon,.span', {origin: 'bottom'});
 ScrollReveal().reveal('.homr-content h1, .about-content h3,.domain, .h1, .name', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content p, .profile, .project-content, .skill-box', {origin: 'left'});
 
 
