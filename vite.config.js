export default {
    root: './',
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                hardware: 'hardware-solutions.html',
                software: 'software-solutions.html',
                loans: 'loan-management.html',
                onboarding: 'customer-experience/customer-onboarding.html',
                transactions: 'transaction-processing.html',
                fraud: 'payment-solutions/fraud-detection.html',
                compliance: 'fintech-solutions/compliance-tools.html',
                payment: 'payment-solutions/payment-gateways.html',
                mobile: 'payment-solutions/mobile-wallets.html',
                blockchain: 'fintech-solutions/blockchain-solutions.html',
                networks: 'telecom-solutions/5g-networks.html',
                fiber: 'telecom-solutions/fiber-optics.html',
                tower: 'telecom-solutions/tower-maintenance.html',
                fintech_idx: 'fintech-solutions/index.html',
                payment_idx: 'payment-solutions/index.html',
                cash_idx: 'cash-management/index.html',
                cx_idx: 'customer-experience/index.html',
                shared_idx: 'shared-banking/index.html',
                domain_hosting: 'telecom-solutions/domain-hosting.html',
                network_monitoring: 'telecom-solutions/network-monitoring.html',
                internet_services: 'telecom-solutions/internet-services.html',
                satellite_internet: 'telecom-solutions/satellite-internet.html',
                network_infrastructure: 'telecom-solutions/network-infrastructure.html',
                smart_devices: 'telecom-solutions/smart-devices.html',
                data_transmission: 'telecom-solutions/data-transmission.html',
                renewable: 'energy-utilities/renewable-energy.html',
                smart_grid: 'energy-utilities/smart-grid.html',
                fuel_pumps: 'energy-utilities/smart-fuel-pumps.html',
                tank_mgmt: 'energy-utilities/tank-management.html',
                pipeline_mgmt: 'energy-utilities/pipeline-management.html',
                water_waste: 'energy-utilities/water-waste-management.html',
                smart_metering: 'energy-utilities/smart-metering.html'
            }
        }
    },
    server: {
        open: true
    }
}
