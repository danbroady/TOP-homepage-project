headerAnimation();



// DOM - Header dynamics
function headerAnimation () {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
            header.classList.remove('header-hidden', 'header-scrolled');
        } else if (currentScrollY > lastScrollY) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
            header.classList.add('header-scrolled');
        };
        lastScrollY = currentScrollY;
    });
};


