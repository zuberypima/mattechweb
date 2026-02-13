import '../style.css';
import { loadHeader, loadFooter } from '../components/header.js';
import { ServicesContent } from '../components/services-content.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeader('../components/header.html');
    loadFooter('../components/footer.html');

    const mainContent = document.getElementById('main-content');
    const contentComponent = new ServicesContent();

    mainContent.innerHTML = contentComponent.render('market-research');
    contentComponent.init();
});
