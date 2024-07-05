let section = document.querySelectorAll("section");

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height ){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate ')
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger animation on load in case elements are already in view
});
