import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { hardwareContent } from './components/hardware-content.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${hardwareContent}
  ${footer}
`;

// Initialize Navigation Logic
import { initNavigation } from './navigation.js';
initNavigation();
