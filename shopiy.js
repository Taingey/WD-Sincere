let navigation = document.querySelector('.navigation');
        let menu = document.querySelector('.menu');
        let header = document.querySelector('header');

        menu.onclick = function(){
            header.classList.toggle('open');
        }

        //  Dark mode open
        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('.navigation');
            document.body.classList.toggle('.font-color');
            document.body.classList.toggle('.font-color-1');
            document.body.classList.toggle('.header');
            document.body.classList.toggle('.contact-input');
        });
        //  Dark mode off
        const typeSpeed = new typeSpeed('multiple-text', {
            strings: ['am a Frontend Developer', 'am a Student', 'Study at Asia Europe'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        ScrollReveal({
            // reset: true,
            distance: '90px',
            duration: 2000,
            delay: 80
        });
        
        ScrollReveal().reveal('.home-header, .about-nav', { origin: 'top' });
        ScrollReveal().reveal('.image, .about-container, .bars-box, .web-developer', { origin: 'bottom' });



