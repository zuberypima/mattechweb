import './styles/main.css';
import { header } from './components/header.js';
import { hero } from './components/hero.js';
import { about } from './components/about.js';
import { overview } from './components/company-overview.js';
import { services } from './components/services.js';
import { stats } from './components/stats.js';
import { footer } from './components/footer.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${hero}
  ${about}
  ${overview}
  ${services}
  ${stats}
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
const sectorTabs = document.querySelectorAll('.sector-tabs li');
const sectorContents = document.querySelectorAll('.sector-content');

if (sectorTabs.length > 0) {
  sectorTabs.forEach(tab => {
    tab.addEventListener('mouseover', () => {
      // Remove active class from all tabs
      sectorTabs.forEach(t => t.classList.remove('active'));
      // Add active class to current tab
      tab.classList.add('active');

      // Hide all content areas
      sectorContents.forEach(content => content.classList.remove('active'));

      // Show corresponding content
      const targetId = tab.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}
