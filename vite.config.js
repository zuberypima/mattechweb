export default {
    root: './',
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
                shared_idx: 'shared-banking/index.html'
            }
        }
    },
    server: {
        open: true
    }
}
