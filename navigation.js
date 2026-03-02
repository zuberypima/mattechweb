export function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = hamburger ? hamburger.querySelector('i') : null;

    function openNav() {
        navLinks.classList.add('open');
        document.body.classList.add('nav-open');
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        }
    }

    function closeNav() {
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
        if (hamburgerIcon) {
            hamburgerIcon.classList.add('fa-bars');
            hamburgerIcon.classList.remove('fa-times');
        }
    }

    // --- Hamburger Toggle ---
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.contains('open') ? closeNav() : openNav();
        });
    }

    // --- Close menu when clicking outside ---
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('open')) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                closeNav();
            }
        }
    });

    // --- Mobile Dropdown Toggle ---
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(':scope > a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 960) {
                    e.preventDefault();
                    e.stopPropagation();
                    const isActive = dropdown.classList.contains('dropdown-active');
                    // Close all other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('dropdown-active');
                        }
                    });
                    dropdown.classList.toggle('dropdown-active', !isActive);
                }
            });
        }
    });

    // --- Tabbed Mega Menu Logic (Desktop hover & Mobile click) ---
    const sectorContainers = document.querySelectorAll('.sector-container');

    if (sectorContainers.length > 0) {
        sectorContainers.forEach(container => {
            const tabs = container.querySelectorAll('.sector-tabs li');
            const contents = container.querySelectorAll('.sector-content');

            tabs.forEach(tab => {
                const activateTab = (e) => {
                    if (e.type === 'click' && window.innerWidth > 960) {
                        return; // Desktop uses hover
                    }
                    if (e.type === 'click' || e.type === 'touchstart') {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    contents.forEach(c => c.classList.remove('active'));
                    const targetId = tab.getAttribute('data-tab');
                    const targetContent = container.querySelector('#' + targetId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                };

                tab.addEventListener('mouseover', activateTab);
                tab.addEventListener('click', activateTab);
                tab.addEventListener('touchstart', activateTab, { passive: false });
            });
        });
    }

    // --- Close nav links when a leaf link is clicked (mobile) ---
    if (navLinks) {
        navLinks.querySelectorAll('a[href]:not([href="#"])').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 960 && navLinks.classList.contains('open')) {
                    closeNav();
                }
            });
        });
    }
}
