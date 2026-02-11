import './styles/main.css';
import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { transactionContent } from './components/transaction-content.js';

document.querySelector('#app').innerHTML = `
  ${header}
  ${transactionContent}
  ${footer}
`;

// Initialize Navigation Logic
import { initNavigation } from './navigation.js';
initNavigation();
