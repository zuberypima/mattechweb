import './styles/main.css';
import './team.css';
import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { teamPageContent } from './team-component.js';
import { initNavigation } from './navigation.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${teamPageContent}
  ${footer}
`;

initNavigation();
