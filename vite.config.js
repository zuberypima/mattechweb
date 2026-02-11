export default {
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                hardware: 'hardware-solutions.html',
                loans: 'loan-management.html',
                onboarding: 'customer-onboarding.html',
                transactions: 'transaction-processing.html',
                fraud: 'fraud-detection.html',
                compliance: 'compliance-tools.html',
                payment: 'payment-gateways.html',
                mobile: 'mobile-wallets.html',
                blockchain: 'blockchain-solutions.html',
                networks: '5g-networks.html',
                fiber: 'fiber-optics.html',
                tower: 'tower-maintenance.html'
            }
        }
    },
    server: {
        open: true
    }
}
