import '../style.css';
import { loadHeader, loadFooter } from '../components/header.js';
import { EnergyUtilitiesContent } from '../components/energy-utilities-content.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Load Header and Footer
    await loadHeader('../components/header.html');
    loadFooter('../components/footer.html');

    // Initialize Content Component
    const mainContent = document.getElementById('main-content');
    const contentComponent = new EnergyUtilitiesContent();

    // Render specific content for this page
    mainContent.innerHTML = contentComponent.render('smart-grid');

    // Initialize any specific interactive elements if needed
    contentComponent.init();
});
