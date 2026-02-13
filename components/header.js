export const header = `
<header>
    <div class="container">
        <nav>
            <div class="logo">
                    <a href="/index.html">
                    <img src="https://i0.wp.com/mattech.co.tz/wp-content/uploads/2023/03/Mat-Tech-Logo.png?fit=2963%2C1205&ssl=1" alt="Mattech">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="/index.html">Home</a></li>

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
                                            <a href="/hardware-solutions.html#workstations">Workstations & Servers <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Dell, HP, Lenovo, IBM)</span></a>
                                            <a href="/hardware-solutions.html#storage">Data Storage & Backup Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(NAS, SAN, Cloud Storage, Backup Appliances)</span></a>
                                            <a href="/hardware-solutions.html#telephony">IP Telephony & Video Conferencing Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Cisco, Avaya, Zoom, Polycom)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/hardware-solutions.html#datacenter">Data Centre & Disaster Recovery Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(On-premise & Cloud-based DR)</span></a>
                                            <a href="/hardware-solutions.html#network">Network & Security Devices <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Firewalls, Switches, Routers - Cisco, Fortinet, Juniper)</span></a>
                                            <a href="/hardware-solutions.html#signage">Scanners & Digital Signage <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Barcode, Document Scanners, LED Displays)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/hardware-solutions.html#surveillance">Surveillance & Access Control Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(CCTV, Biometric Access, RFID)</span></a>
                                            <a href="/hardware-solutions.html#iot">IoT Devices & Smart Technologies <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Smart Sensors, Wearables, Home Automation)</span></a>
                                            <a href="/hardware-solutions.html#computing">Enterprise Computing Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Virtualization, Cloud Computing, Edge Computing)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Software Content -->
                                <div id="software" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#digital">Digital Transformation Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AI, IoT, Cloud Computing, Automation)</span></a>
                                            <a href="software-solutions.html#office">Office Automation & Productivity Tools <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Microsoft 365, Google Workspace, Zoho)</span></a>
                                            <a href="software-solutions.html#security">Cybersecurity & Compliance Software <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Antivirus, SIEM, Endpoint Protection)</span></a>
                                            <a href="software-solutions.html#cloud">Networking & Cloud Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AWS, Azure, Google Cloud)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#enterprise">Enterprise E-solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(ERP, CRM, SCM - SAP, Oracle, MS Dynamics)</span></a>
                                            <a href="software-solutions.html#msoffice">Microsoft Office Suite <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Word, Excel, PowerPoint, Outlook, Teams)</span></a>
                                            <a href="software-solutions.html#queue">Queue Management Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Electronic Ticketing, Automated Queuing)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#bi">Business Intelligence & Data Analytics <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Power BI, Tableau, SAS, Qlik)</span></a>
                                            <a href="software-solutions.html#custom">Custom Software Development <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Web & Mobile Apps, AI Integration)</span></a>
                                            <a href="software-solutions.html#crm">ERP & CRM Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SAP, Salesforce, Odoo, HubSpot)</span></a>
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
                                <li class="active" data-tab="banking-fintech">Fintech Solutions</li>
                                <li data-tab="banking-payments">Payment Solutions</li>
                                <li data-tab="banking-cash">Cash Management Solutions</li>
                                <li data-tab="banking-cx">Customer Experience Solutions</li>
                                <li data-tab="banking-shared">Shared Banking Solutions</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Fintech Solutions -->
                                <div id="banking-fintech" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/fintech-solutions/index.html"><strong>Fintech Solutions (Overview)</strong></a>
                                            <a href="/fintech-solutions/open-api-integration.html">Open API & Integration Services</a>
                                            <a href="/fintech-solutions/rpa-finance.html">Robotic Process Automation (RPA)</a>
                                            <a href="/fintech-solutions/blockchain-solutions.html">Blockchain & Distributed Ledger</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/fintech-solutions/ai-finance.html">Artificial Intelligence (AI) in Finance</a>
                                            <a href="/fintech-solutions/compliance-tools.html">Regulatory Technology (RegTech)</a>
                                            <a href="/fintech-solutions/core-banking-modules.html">Core Banking System (CBS) Modules</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/fintech-solutions/insurance-tech.html">Insurance Tech Solutions</a>
                                            <a href="/fintech-solutions/digital-lending.html">Digital Lending & Credit Scoring</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Payment Solutions -->
                                <div id="banking-payments" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/payment-solutions/index.html"><strong>Payment Solutions (Overview)</strong></a>
                                            <a href="/payment-solutions/pos-systems.html">Point of Sale (POS) Systems</a>
                                            <a href="/payment-solutions/mobile-banking.html">Mobile Banking Applications</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/payment-solutions/mobile-wallets.html">Mobile Wallet & Digital Payments</a>
                                            <a href="/payment-solutions/kiosk-solutions.html">Self-Service KIOSK Solutions</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/payment-solutions/secure-card.html">Secure Card Production & Management</a>
                                            <a href="/payment-solutions/cross-border-payments.html">Cross-Border Payment Solutions</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Cash Management Solutions -->
                                <div id="banking-cash" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/cash-management/index.html"><strong>Cash Management (Overview)</strong></a>
                                            <a href="/cash-management/currency-verifiers.html">Currency Verifies Machines</a>
                                            <a href="/cash-management/atms.html">Automated Teller Machines (ATMs)</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/cash-management/cash-banding.html">Cash Banding & Wrapping Machines</a>
                                            <a href="/cash-management/smart-deposit.html">Smart Cash Deposit & Recycling Machines</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Customer Experience Solutions -->
                                <div id="banking-cx" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/customer-experience/index.html"><strong>Customer Experience (Overview)</strong></a>
                                            <a href="/customer-experience/omni-channel.html">Omni-channel Contact Centre Solutions</a>
                                            <a href="/customer-experience/branch-automation.html">Branch Automation & Self-Service Banking</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/customer-experience/mobile-branches.html">Mobile Banking Branches</a>
                                            <a href="/customer-experience/crm-solutions.html">Customer Relationship Management (CRM)</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Shared Banking Solutions -->
                                <div id="banking-shared" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/shared-banking/index.html"><strong>Shared Banking (Overview)</strong></a>
                                            <a href="/shared-banking/baas.html">Banking as a Service (BaaS)</a>
                                            <a href="/shared-banking/cloud-finance.html">Cloud-Based Financial Solutions</a>
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
                                <li class="active" data-tab="telecom-domain">Domain & Hosting</li>
                                <li data-tab="telecom-monitoring">Network Monitoring</li>
                                <li data-tab="telecom-internet">Internet Services</li>
                                <li data-tab="telecom-connectivity">Connectivity Solutions</li>
                                <li data-tab="telecom-devices">Telecom Devices</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Domain & Hosting -->
                                <div id="telecom-domain" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/domain-hosting.html">Domain & Hosting Services</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Network Monitoring -->
                                <div id="telecom-monitoring" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-monitoring.html">Network & Devices Monitoring Solutions</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Internet Services -->
                                <div id="telecom-internet" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/internet-services.html">Indoor & Outdoor Internet Solutions</a>
                                            <a href="/telecom-solutions/satellite-internet.html">Satellite Internet Solutions</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Connectivity Solutions -->
                                <div id="telecom-connectivity" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-infrastructure.html">LAN, MAN & WAN Infrastructure</a>
                                            <a href="/telecom-solutions/fiber-optics.html">Fibre Optic Network Solutions</a>
                                            <a href="/telecom-solutions/5g-networks.html">5G & Wireless Connectivity</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telecom Devices -->
                                <div id="telecom-devices" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/smart-devices.html">Telecom Hardware & Smart Devices</a>
                                            <a href="/telecom-solutions/tower-maintenance.html">Tower Infrastructure & Maintenance</a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/data-transmission.html">Data Transmission & Broadcasting</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown mattech-mega-menu">
                    <a href="#">Energy & Utilities <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content mattech-mega-content">
                        <div class="sector-container">
                            <!-- Left Sidebar-->
                            <ul class="sector-tabs">
                                <li class="active" data-tab="energy-power">Power Solutions</li>
                                <li data-tab="energy-oil-gas">Oil & Gas Technologies</li>
                                <li data-tab="energy-utility">Utility Management</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Power Solutions -->
                                <div id="energy-power" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Renewable Energy & Backup Power Systems</a>
                                            <a href="#">Smart Grid & Energy Management Solutions</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Oil & Gas Technologies -->
                                <div id="energy-oil-gas" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Smart Fuel Pumps & Dispensing Systems</a>
                                            <a href="#">Tank Management & Monitoring Solutions</a>
                                            <a href="#">Pipeline & Asset Management Solutions</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Utility Management Solutions -->
                                <div id="energy-utility" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Water & Waste Management Technologies</a>
                                            <a href="#">Smart Metering & Billing Systems</a>
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
                                <li class="active" data-tab="services-consultancy">Consultancy & Advisory</li>
                                <li data-tab="services-rnd">Research & Development (R&D)</li>
                                <li data-tab="services-install">Installation & Maintenance</li>
                                <li data-tab="services-support">Technical & Customer Support</li>
                                <li data-tab="services-design">System Design & Optimization</li>
                                <li data-tab="services-paas">Project as a Service (PaaS)</li>
                                <li data-tab="services-custom">Customized Services</li>
                            </ul>

                            <!-- Right Content Area -->
                            <div class="sector-content-area">
                                <!-- Consultancy & Advisory -->
                                <div id="services-consultancy" class="sector-content active">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Business Strategy</a>
                                            <a href="#">Digital Transformation</a>
                                            <a href="#">IT Consulting</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Research & Development -->
                                <div id="services-rnd" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Product Innovation</a>
                                            <a href="#">Market Research</a>
                                            <a href="#">Feasibility Studies</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Software Content -->
                                <div id="software" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#digital">Digital Transformation Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AI, IoT, Cloud Computing, Automation)</span></a>
                                            <a href="software-solutions.html#office">Office Automation & Productivity Tools <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Microsoft 365, Google Workspace, Zoho)</span></a>
                                            <a href="software-solutions.html#security">Cybersecurity & Compliance Software <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Antivirus, SIEM, Endpoint Protection)</span></a>
                                            <a href="software-solutions.html#cloud">Networking & Cloud Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AWS, Azure, Google Cloud)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#enterprise">Enterprise E-solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(ERP, CRM, SCM - SAP, Oracle, MS Dynamics)</span></a>
                                            <a href="software-solutions.html#msoffice">Microsoft Office Suite <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Word, Excel, PowerPoint, Outlook, Teams)</span></a>
                                            <a href="software-solutions.html#queue">Queue Management Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Electronic Ticketing, Automated Queuing)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="software-solutions.html#bi">Business Intelligence & Data Analytics <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Power BI, Tableau, SAS, Qlik)</span></a>
                                            <a href="software-solutions.html#custom">Custom Software Development <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Web & Mobile Apps, AI Integration)</span></a>
                                            <a href="software-solutions.html#crm">ERP & CRM Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SAP, Salesforce, Odoo, HubSpot)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Installation & Maintenance -->
                                <div id="services-install" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Hardware & Software Deployment</a>
                                            <a href="#">Annual Maintenance</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Technical & Customer Support -->
                                <div id="services-support" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Helpdesk</a>
                                            <a href="#">SLA-based Support</a>
                                            <a href="#">Remote Assistance</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- System Design & Optimization -->
                                <div id="services-design" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Network Design</a>
                                            <a href="#">Security Optimization</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Project as a Service -->
                                <div id="services-paas" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">Project Management & Execution</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Customized Services -->
                                <div id="services-custom" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="#">IT Training & Capacity Building</a>
                                            <a href="#">Compliance & Risk Management Services</a>
                                            <a href="#">Digital Marketing & Branding Solutions</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li><a href="#products">Products</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact" class="btn btn-contact">Contact Us</a></li>
            </ul>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </div>
</header>
`;
