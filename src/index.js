headerAnimation();
sectionLoadAnimation();
projectsLoadAnimation();


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


// DOM - Section scroll

function sectionLoadAnimation() {
    const sections = document.querySelectorAll(".body-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            };
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
};

function projectsLoadAnimation() {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            };
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
        observer.observe(card);
    });
};