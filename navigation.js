export function initNavigation() {
    // Navigation Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 960) {
                    e.preventDefault();
                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('dropdown-active');
                    });
                    dropdown.classList.toggle('dropdown-active');
                }
            });
        }
    });

    // Tabbed Mega Menu Logic
    const sectorContainers = document.querySelectorAll('.sector-container');

    if (sectorContainers.length > 0) {
        sectorContainers.forEach(container => {
            const tabs = container.querySelectorAll('.sector-tabs li');
            const contents = container.querySelectorAll('.sector-content');

            tabs.forEach(tab => {
                // Handle both click and hover for better UX
                const activateTab = (e) => {
                    if (e.type === 'click' && window.innerWidth > 960) {
                        return; // Let hover handle desktop, but allow click functionality if needed
                    }
                    if (e.type === 'click') {
                        e.preventDefault(); // Prevent jump behavior if any
                    }

                    // Remove active class from tabs in THIS container only
                    tabs.forEach(t => t.classList.remove('active'));
                    // Add active class to hovered tab
                    tab.classList.add('active');

                    // Hide contents in THIS container only
                    contents.forEach(c => c.classList.remove('active'));

                    // Show corresponding content content
                    const targetId = tab.getAttribute('data-tab');
                    const targetContent = document.getElementById(targetId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                };

                tab.addEventListener('mouseover', activateTab);
                tab.addEventListener('click', activateTab);
                // Trigger click for touch devices
                tab.addEventListener('touchstart', (e) => {
                    // e.preventDefault(); // Optional: prevent ghost clicks
                    activateTab(e);
                }, { passive: true });
            });
        });
    }
}
