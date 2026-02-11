import './styles/main.css';
import { header } from './components/header.js';
import { hero } from './components/hero.js';
import { about } from './components/about.js';
import { overview } from './components/company-overview.js';
import { services } from './components/services.js';
import { stats } from './components/stats.js';
import { partners } from './components/partners.js';
import { footer } from './components/footer.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${hero}
  ${about}
  ${overview}
  ${services}
  ${stats}
  ${partners}
  ${footer}
`;

// Navigation Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Tabbed Mega Menu Logic
const sectorContainers = document.querySelectorAll('.sector-container');

if (sectorContainers.length > 0) {
  sectorContainers.forEach(container => {
    const tabs = container.querySelectorAll('.sector-tabs li');
    const contents = container.querySelectorAll('.sector-content');

    tabs.forEach(tab => {
      tab.addEventListener('mouseover', () => {
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
      });
    });
  });
}
