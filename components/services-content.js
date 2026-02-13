export class ServicesContent {
    constructor() {
        this.contentData = {
            'consultancy': {
                title: 'Consultancy & Advisory',
                description: 'Expert guidance for your business strategy and digital transformation.',
                features: ['Business Strategy', 'Digital Transformation', 'IT Consulting', 'Process Optimization'],
                icon: 'fa-user-tie'
            },
            'product-innovation': {
                title: 'Product Innovation',
                description: 'Transforming ideas into market-ready products with cutting-edge technology.',
                features: ['Concept Development', 'Prototyping & MVP', 'Technology Stack Selection', 'Innovation Strategy'],
                icon: 'fa-lightbulb'
            },
            'market-research': {
                title: 'Market Research',
                description: 'In-depth analysis to understand market trends, customer behavior, and competition.',
                features: ['Competitor Analysis', 'Customer Segmentation', 'Trend Forecasting', 'Data-Driven Insights'],
                icon: 'fa-chart-line'
            },
            'feasibility-studies': {
                title: 'Feasibility Studies',
                description: 'Comprehensive assessment of project viability, risks, and potential returns.',
                features: ['Technical Feasibility', 'Economic Viability', 'Risk Assessment', 'Operational Analysis'],
                icon: 'fa-file-invoice-dollar'
            },
            'rnd': {
                title: 'Research & Development (R&D)',
                description: 'Driving innovation through market research and product feasibility studies.',
                features: ['Product Innovation', 'Market Research', 'Feasibility Studies', 'Prototyping'],
                icon: 'fa-flask'
            },
            'installation-maintenance': {
                title: 'Installation & Maintenance',
                description: 'Reliable deployment and maintenance for your hardware and software systems.',
                features: ['Hardware & Software Deployment', 'Annual Maintenance', 'System Upgrades', 'Infrastructure Management'],
                icon: 'fa-tools'
            },
            'support': {
                title: 'Technical & Customer Support',
                description: '24/7 support ensuring your business operations never stop.',
                features: ['Helpdesk Services', 'SLA-based Support', 'Remote Assistance', 'On-site Support'],
                icon: 'fa-headset'
            },
            'system-design': {
                title: 'System Design & Optimization',
                description: 'Designing robust networks and optimizing security for maximum efficiency.',
                features: ['Network Design', 'Security Optimization', 'Architecture Planning', 'Performance Tuning'],
                icon: 'fa-project-diagram'
            },
            'paas': {
                title: 'Project as a Service (PaaS)',
                description: 'End-to-end project management and execution tailored to your needs.',
                features: ['Project Management', 'Execution & Delivery', 'Resource Allocation', 'Risk Management'],
                icon: 'fa-tasks'
            },
            'custom-services': {
                title: 'Customized Services',
                description: 'Tailored solutions for training, compliance, and branding.',
                features: ['IT Training & Capacity Building', 'Compliance & Risk Management', 'Digital Marketing & Branding', 'Custom Workshops'],
                icon: 'fa-puzzle-piece'
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
                    <h2>Key Services</h2>
                    <ul class="feature-list">
                        ${data.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
            </section>
        `;
    }

    init() {
        console.log('Services content initialized');
    }
}
