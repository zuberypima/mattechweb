export const header = `
<header>
    <div class="container">
        <nav>
            <div class="logo">
                    <a href="index.html">
                    <img src="https://i0.wp.com/mattech.co.tz/wp-content/uploads/2023/03/Mat-Tech-Logo.png?fit=2963%2C1205&ssl=1" alt="Mattech">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">ICT Solutions <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="hardware">Hardware Solutions</li>
                                <li data-tab="software">Software Solutions</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Hardware Content -->
                                <div id="hardware" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Workstations & Servers</a>
                                            <a href="#">Data Storage & Backup</a>
                                            <a href="#">IP Telephony</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="#">Data Centre</a>
                                            <a href="#">Network & Security</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Software Content -->
                                <div id="software" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Digital Transformation</a>
                                            <a href="#">Office Productivity Tools</a>
                                            <a href="#">Cybersecurity & Compliance</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="#">Networking & Cloud</a>
                                            <a href="#">Enterprise E-solutions</a>
                                            <a href="#">Microsoft Office Suite</a>
                                        </div>
                                         <div class="dropdown-column">
                                            <a href="#">Queue Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">Banking & Finance <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="banking-core">Core Banking</li>
                                <li data-tab="banking-fintech">FinTech & Security</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Core Banking Content -->
                                <div id="banking-core" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <h3>Core Banking</h3>
                                            <a href="transaction-processing.html">Transaction Processing</a>
                                            <a href="loan-management.html">Loan Management</a>
                                            <a href="customer-onboarding.html">Customer Onboarding</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- FinTech Content -->
                                <div id="banking-fintech" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <h3>FinTech</h3>
                                            <a href="mobile-wallets.html">Mobile Wallets</a>
                                            <a href="payment-gateways.html">Payment Gateways</a>
                                            <a href="blockchain-solutions.html">Blockchain Solutions</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <h3>Security</h3>
                                            <a href="fraud-detection.html">Fraud Detection</a>
                                            <a href="compliance-tools.html">Compliance Tools</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">Telecom <i class="fas fa-chevron-down"></i></a>
                        <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="telecom-infra">Infrastructure</li>
                                <li data-tab="telecom-services">Services</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Infrastructure Content -->
                                <div id="telecom-infra" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="fiber-optics.html">Fiber Optics</a>
                                            <a href="5g-networks.html">5G Networks</a>
                                            <a href="tower-maintenance.html">Tower Maintenance</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Services Content -->
                                <div id="telecom-services" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">VoIP Solutions</a>
                                            <a href="#">Satellite Internet</a>
                                            <a href="#">Network Monitoring</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">Energy <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="energy-solar">Solar Power</li>
                                <li data-tab="energy-smart">Smart Grid</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Solar Power Content -->
                                <div id="energy-solar" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Commercial Solar Panels</a>
                                            <a href="#">Inverters & Batteries</a>
                                            <a href="#">Installation Services</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Smart Grid Content -->
                                <div id="energy-smart" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Smart Meters</a>
                                            <a href="#">Grid Management Software</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">Services <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="services-consultancy">Consultancy</li>
                                <li data-tab="services-support">Support</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Consultancy Content -->
                                <div id="services-consultancy" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">IT Strategy</a>
                                            <a href="#">Digital Transformation</a>
                                            <a href="#">Project Management</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Support Content -->
                                <div id="services-support" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">24/7 Helpdesk</a>
                                            <a href="#">On-site Maintenance</a>
                                            <a href="#">Training & Workshops</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li><a href="#products">Products</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact" class="btn">Contact Us</a></li>
            </ul>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </div>
</header>
`;
