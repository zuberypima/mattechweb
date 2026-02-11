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

// Initialize Navigation Logic
import { initNavigation } from './navigation.js';
initNavigation();
