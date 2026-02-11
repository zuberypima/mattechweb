import './styles/main.css';
import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { softwareContent } from './components/software-content.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${softwareContent}
  ${footer}
`;

// Initialize Navigation Logic
import { initNavigation } from './navigation.js';
initNavigation();
