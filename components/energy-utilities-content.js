export class EnergyUtilitiesContent {
    constructor() {
        this.contentData = {
            'renewable-energy': {
                title: 'Renewable Energy & Backup Power',
                description: 'Sustainable energy solutions and reliable backup power systems for continuous operation.',
                features: ['Solar Power Systems', 'Hybrid Energy Solutions', 'Industrial UPS & Battery Banks', 'Generator Maintenance & Automation'],
                icon: 'fa-solar-panel'
            },
            'smart-grid': {
                title: 'Smart Grid & Energy Management',
                description: 'Advanced grid technologies for efficient energy distribution and management.',
                features: ['Grid Automation', 'Demand Response Management', 'Energy Efficiency Analytics', 'Smart Distribution Systems'],
                icon: 'fa-network-wired' // approximate icon
            },
            'smart-fuel-pumps': {
                title: 'Smart Fuel Pumps & Dispensing',
                description: 'Intelligent fuel dispensing systems for enhanced control and monitoring.',
                features: ['Automated Dispensing Units', 'RFID Fuel Authorization', 'Real-time Transaction Monitoring', 'Fleet Fuel Management Integration'],
                icon: 'fa-gas-pump'
            },
            'tank-management': {
                title: 'Tank Management & Monitoring',
                description: 'Precise monitoring solutions for fuel and liquid storage tanks.',
                features: ['Automatic Tank Gauging (ATG)', 'Leak Detection Systems', 'Inventory Management Software', 'Remote Level Monitoring'],
                icon: 'fa-box-container' // approximate icon, or fa-database (cylinder)
            },
            'pipeline-management': {
                title: 'Pipeline & Asset Management',
                description: 'Comprehensive solutions for pipeline integrity and asset tracking.',
                features: ['Pipeline Leak Detection', 'Asset Integrity Management', 'SCADA for Pipelines', 'Predictive Maintenance'],
                icon: 'fa-route'
            },
            'water-waste-management': {
                title: 'Water & Waste Management',
                description: 'Technology-driven solutions for water conservation and waste processing.',
                features: ['Smart Water Metering', 'Waste Collection Monitoring', 'Water Quality Sensors', 'Treatment Plant Automation'],
                icon: 'fa-water'
            },
            'smart-metering': {
                title: 'Smart Metering & Billing',
                description: 'Accurate and automated metering systems for utilities.',
                features: ['AMI (Advanced Metering Infrastructure)', 'Prepaid Metering Solutions', 'Automated Billing Systems', 'Usage Analytics & Reporting'],
                icon: 'fa-tachometer-alt'
            }
        };
    }

    render(pageId) {
        const data = this.contentData[pageId];
        if (!data) return '<h1>Page Not Found</h1>';

        return `
            <section class="hero-section">
                <div class="hero-content">
                    <h1><i class="fas ${data.icon}"></i> ${data.title}</h1>
                    <p>${data.description}</p>
                </div>
            </section>
            
            <section class="features-section">
                <div class="container">
                    <h2>Key Features</h2>
                    <ul class="feature-list">
                        ${data.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
            </section>
        `;
    }

    init() {
        console.log('Energy & Utilities content initialized');
    }
}
