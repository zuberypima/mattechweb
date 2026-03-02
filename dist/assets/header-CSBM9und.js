(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();function g(){const s=document.querySelector(".hamburger"),o=document.querySelector(".nav-links"),a=s?s.querySelector("i"):null;function d(){o.classList.add("open"),document.body.classList.add("nav-open"),a&&(a.classList.remove("fa-bars"),a.classList.add("fa-times"))}function e(){o.classList.remove("open"),document.body.classList.remove("nav-open"),a&&(a.classList.add("fa-bars"),a.classList.remove("fa-times"))}s&&o&&s.addEventListener("click",t=>{t.stopPropagation(),o.classList.contains("open")?e():d()}),document.addEventListener("click",t=>{o&&o.classList.contains("open")&&!o.contains(t.target)&&!s.contains(t.target)&&e()});const n=document.querySelectorAll(".nav-links .dropdown");n.forEach(t=>{const c=t.querySelector(":scope > a");c&&c.addEventListener("click",h=>{if(window.innerWidth<=960){h.preventDefault(),h.stopPropagation();const i=t.classList.contains("dropdown-active");n.forEach(l=>{l!==t&&l.classList.remove("dropdown-active")}),t.classList.toggle("dropdown-active",!i)}})});const r=document.querySelectorAll(".sector-container");r.length>0&&r.forEach(t=>{const c=t.querySelectorAll(".sector-tabs li"),h=t.querySelectorAll(".sector-content");c.forEach(i=>{const l=m=>{if(m.type==="click"&&window.innerWidth>960)return;(m.type==="click"||m.type==="touchstart")&&(m.preventDefault(),m.stopPropagation()),c.forEach(p=>p.classList.remove("active")),i.classList.add("active"),h.forEach(p=>p.classList.remove("active"));const u=i.getAttribute("data-tab"),f=t.querySelector("#"+u);f&&f.classList.add("active")};i.addEventListener("mouseover",l),i.addEventListener("click",l),i.addEventListener("touchstart",l,{passive:!1})})}),o&&o.querySelectorAll('a[href]:not([href="#"])').forEach(t=>{t.addEventListener("click",()=>{window.innerWidth<=960&&o.classList.contains("open")&&e()})})}const v=`
<footer id="contact">
    <div class="container">
        <div class="footer-grid">
            <!-- Column 1 -->
            <div class="footer-col">
                <h4>MATTECH.AI</h4>
                <p>All information published on this website is the property of mattech.ai unless stated otherwise. Reserving our name in part or whole is strictly forbidden unless express written consent is given by the MATTECH.AI Company.</p>
            </div>

            <!-- Column 2 -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#products">Services</a></li>
                    <li><a href="/our-team.html">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
                <div style="margin-top: 20px;">
                    <a href="#" style="color: #25D366; font-weight: bold; display: flex; align-items: center; gap: 5px;">
                        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>
            </div>

            <!-- Column 3 -->
            <div class="footer-col">
                <h4>Contact Info</h4>
                <ul>
                    <li><i class="fas fa-envelope"></i> sales@mattech.co.tz</li>
                    <li><i class="fas fa-phone"></i> +255 799 300 739</li>
                    <li><i class="fas fa-map-marker-alt"></i> Dar Es Salaam, Tanzania</li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div class="footer-col">
                <h4>Send a Message</h4>
                <form action="#" style="display: flex; flex-direction: column; gap: 10px;">
                    <input type="text" placeholder="Name" style="padding: 10px; border-radius: 4px; border: none;">
                    <input type="email" placeholder="Email" style="padding: 10px; border-radius: 4px; border: none;">
                    <textarea placeholder="Message" rows="3" style="padding: 10px; border-radius: 4px; border: none;"></textarea>
                    <button type="submit" class="btn" style="border: none; cursor: pointer;">Send</button>
                </form>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 MATTECH.AI - Since 2010, Beyond Technologies. All rights reserved.</p>
        </div>
    </div>
</footer>
`,w=`
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
                                            <a href="/telecom-solutions/domain-hosting.html">Domain Registration & Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Local & International Domains)</span></a>
                                            <a href="/telecom-solutions/domain-hosting.html#shared">Shared & Cloud Web Hosting <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(cPanel, Plesk, VPS Hosting)</span></a>
                                            <a href="/telecom-solutions/domain-hosting.html#ssl">SSL Certificates & Website Security <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(DV, OV, EV SSL, Wildcard)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/domain-hosting.html#dedicated">Dedicated & Colocation Hosting <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Data Centre Rack Space, Managed Servers)</span></a>
                                            <a href="/telecom-solutions/domain-hosting.html#email">Business Email Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Microsoft 365, Google Workspace)</span></a>
                                            <a href="/telecom-solutions/domain-hosting.html#cdn">CDN & Performance Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Content Delivery, Load Balancing)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/domain-hosting.html#dns">DNS Management & Optimization <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Authoritative DNS, DDoS Protection)</span></a>
                                            <a href="/telecom-solutions/domain-hosting.html#backup">Website Backup & Disaster Recovery <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Automated Backups, Restore Solutions)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Network Monitoring -->
                                <div id="telecom-monitoring" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-monitoring.html">Network Performance Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Real-time Traffic Analysis, Bandwidth)</span></a>
                                            <a href="/telecom-solutions/network-monitoring.html#noc">NOC & Operations Centre Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(24/7 Network Operations Centre)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-monitoring.html#siem">SIEM & Security Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Threat Detection, Log Management)</span></a>
                                            <a href="/telecom-solutions/network-monitoring.html#iot">IoT Device Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Sensor Networks, Remote Assets)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-monitoring.html#uptime">Uptime & Availability Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SLA Reporting, Alert Systems)</span></a>
                                            <a href="/telecom-solutions/network-monitoring.html#tools">Monitoring Tools & Platforms <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Nagios, Zabbix, SolarWinds)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Internet Services -->
                                <div id="telecom-internet" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/internet-services.html">Indoor & Outdoor Internet Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Fixed Wireless, LTE/4G/5G)</span></a>
                                            <a href="/telecom-solutions/internet-services.html#leased">Leased Line & Dedicated Internet <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Enterprise & SME Bandwidth)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/satellite-internet.html">Satellite Internet Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(VSAT, Starlink, Rural Connectivity)</span></a>
                                            <a href="/telecom-solutions/internet-services.html#isp">ISP Services & Last-Mile Delivery <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Fibre, Wireless, Hybrid)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/internet-services.html#backup">Internet Redundancy & Failover <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Dual-Link, SD-WAN Failover)</span></a>
                                            <a href="/telecom-solutions/internet-services.html#wifi">Public & Campus Wi-Fi Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Hotspot, Managed Wi-Fi)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Connectivity Solutions -->
                                <div id="telecom-connectivity" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-infrastructure.html">LAN, MAN & WAN Infrastructure <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Structured Cabling, Switching)</span></a>
                                            <a href="/telecom-solutions/fiber-optics.html">Fibre Optic Network Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(FTTH, FTTB, Metro Fibre)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/5g-networks.html">5G & Wireless Connectivity <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Private 5G, mmWave, NR)</span></a>
                                            <a href="/telecom-solutions/network-infrastructure.html#mpls">MPLS & SD-WAN Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Enterprise Wide Area Networking)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/network-infrastructure.html#vpn">VPN & Secure Remote Access <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Site-to-Site, Remote Worker VPN)</span></a>
                                            <a href="/telecom-solutions/network-infrastructure.html#microwave">Microwave & Point-to-Point Links <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Long-range Wireless Backhaul)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Telecom Devices -->
                                <div id="telecom-devices" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/smart-devices.html">Telecom Hardware & Smart Devices <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Routers, Switches, Access Points)</span></a>
                                            <a href="/telecom-solutions/tower-maintenance.html">Tower Infrastructure & Maintenance <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(BTS, Mast Installation & Repairs)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/data-transmission.html">Data Transmission & Broadcasting <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(IPTV, DVB, Digital Broadcast)</span></a>
                                            <a href="/telecom-solutions/smart-devices.html#pbx">IP PBX & Unified Communications <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(3CX, Cisco, Grandstream)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/telecom-solutions/smart-devices.html#surveillance">Telecom-grade Surveillance Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(IP Cameras, NVR, Encoders)</span></a>
                                            <a href="/telecom-solutions/smart-devices.html#power">Power Solutions for Telecom Sites <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Solar, Rectifiers, Batteries)</span></a>
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
                                            <a href="/energy-utilities/renewable-energy.html">Solar & Renewable Energy Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Solar PV, Wind, Hybrid Power Plants)</span></a>
                                            <a href="/energy-utilities/renewable-energy.html#ups">UPS & Backup Power Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Online UPS, Generators, Battery Banks)</span></a>
                                            <a href="/energy-utilities/renewable-energy.html#ev">EV Charging Infrastructure <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AC/DC Chargers, Fleet Charging Solutions)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/smart-grid.html">Smart Grid & Energy Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SCADA, EMS, Demand Response)</span></a>
                                            <a href="/energy-utilities/smart-grid.html#bms">Building Energy Management Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(BMS, HVAC Automation, Smart Controls)</span></a>
                                            <a href="/energy-utilities/smart-grid.html#monitoring">Power Quality Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Harmonic Analysis, Load Monitoring)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/renewable-energy.html#storage">Energy Storage Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Lithium-ion, Flow Batteries, BESS)</span></a>
                                            <a href="/energy-utilities/smart-grid.html#microgrid">Microgrid & Off-grid Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Remote & Rural Electrification)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Oil & Gas Technologies -->
                                <div id="energy-oil-gas" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/smart-fuel-pumps.html">Smart Fuel Pumps & Dispensing Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Automated Dispensers, Wet Stock Management)</span></a>
                                            <a href="/energy-utilities/tank-management.html">Tank Management & Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(ATG Systems, Level Sensors, Leak Detection)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/pipeline-management.html">Pipeline & Asset Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Integrity Monitoring, GIS Mapping)</span></a>
                                            <a href="/energy-utilities/smart-fuel-pumps.html#pos">Forecourt & POS Management Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Fuel Retail, Loyalty & Fleet Cards)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/pipeline-management.html#safety">HSE & Safety Management Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Gas Detection, Emergency Shutdown)</span></a>
                                            <a href="/energy-utilities/pipeline-management.html#remote">Remote Asset Monitoring & SCADA <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Real-time Field Operations Control)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Utility Management Solutions -->
                                <div id="energy-utility" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/water-waste-management.html">Water & Waste Management Technologies <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SCADA, AMR, Distribution Monitoring)</span></a>
                                            <a href="/energy-utilities/water-waste-management.html#treatment">Water Treatment Plant Automation <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(PLC/SCADA, Chemical Dosing Systems)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/smart-metering.html">Smart Metering & Billing Systems <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AMI, Prepaid Meters, Revenue Protection)</span></a>
                                            <a href="/energy-utilities/smart-metering.html#mdm">Meter Data Management (MDM) <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Data Collection, Analytics, Reporting)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/energy-utilities/water-waste-management.html#gis">GIS & Asset Management for Utilities <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Network Mapping, Spatial Analytics)</span></a>
                                            <a href="/energy-utilities/smart-metering.html#iot">IoT-based Utility Monitoring <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Smart Sensors, Remote Readings)</span></a>
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
                                            <a href="/services/consultancy.html">Business Strategy & Planning <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Growth Strategy, Market Entry, Roadmaps)</span></a>
                                            <a href="/services/consultancy.html#digital">Digital Transformation Advisory <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Cloud Migration, Process Automation)</span></a>
                                            <a href="/services/consultancy.html#it">IT Consulting & Architecture <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Infrastructure Design, Tech Stack Reviews)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/consultancy.html#security">Cybersecurity Consulting <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Risk Assessment, Compliance, ISMS)</span></a>
                                            <a href="/services/consultancy.html#vendor">Vendor & Technology Assessment <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(RFP Support, Proof of Concept)</span></a>
                                            <a href="/services/consultancy.html#change">Change Management & Adoption <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(User Training, Rollout Planning)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/consultancy.html#governance">IT Governance & Compliance <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(ISO 27001, COBIT, ITIL Frameworks)</span></a>
                                            <a href="/services/consultancy.html#sourcing">Technology Sourcing & Procurement <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Hardware, Software, Licensing)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Research & Development -->
                                <div id="services-rnd" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/product-innovation.html">Product Innovation & Prototyping <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Concept Development, MVP, Pilots)</span></a>
                                            <a href="/services/market-research.html">Market Research & Analysis <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Competitive Intelligence, Surveys)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/feasibility-studies.html">Feasibility Studies & POC <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Technical, Financial, Operational)</span></a>
                                            <a href="/services/product-innovation.html#ai">AI & Emerging Technology Research <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Machine Learning, Computer Vision)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/product-innovation.html#iot">IoT Solution Development & Testing <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Embedded Systems, Device Integration)</span></a>
                                            <a href="/services/market-research.html#data">Data Analytics & Insights <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Dashboards, Predictive Modelling)</span></a>
                                        </div>
                                    </div>
                                </div>



                                <!-- Installation & Maintenance -->
                                <div id="services-install" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/installation-maintenance.html">Hardware & Software Deployment <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(On-site Setup, Configuration, Testing)</span></a>
                                            <a href="/services/installation-maintenance.html#amc">Annual Maintenance Contracts (AMC) <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Preventive & Corrective Maintenance)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/installation-maintenance.html#structured">Structured Cabling & Infrastructure <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Cat6, Fibre, Rack Installation)</span></a>
                                            <a href="/services/installation-maintenance.html#migration">System Migration & Upgrades <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Legacy Modernization, Version Upgrades)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/installation-maintenance.html#commissioning">Site Commissioning & Handover <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Acceptance Testing, Documentation)</span></a>
                                            <a href="/services/installation-maintenance.html#spare">Spare Parts & Warranty Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(OEM Parts, Warranty Tracking)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Technical & Customer Support -->
                                <div id="services-support" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/support.html">Helpdesk & Service Desk Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(L1/L2/L3 Support, Ticketing Systems)</span></a>
                                            <a href="/services/support.html#sla">SLA-based Support Contracts <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Response Time Guarantees, Reporting)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/support.html#remote">Remote Monitoring & Support <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(VPN Access, Remote Diagnostics)</span></a>
                                            <a href="/services/support.html#onsite">On-site Field Support & Dispatch <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Break-fix, Field Engineering)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/support.html#noc">NOC & Managed Services <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(24/7 Monitoring, Incident Management)</span></a>
                                            <a href="/services/support.html#warranty">Warranty & Extended Support <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(OEM Warranty Management)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- System Design & Optimization -->
                                <div id="services-design" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/system-design.html">Network Design & Architecture <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(LAN/WAN, Data Centre, Wireless)</span></a>
                                            <a href="/services/system-design.html#security">Security Architecture & Optimization <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Firewall, IAM, Zero Trust Design)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/system-design.html#performance">Performance Tuning & Optimization <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Capacity Planning, Bottleneck Analysis)</span></a>
                                            <a href="/services/system-design.html#cloud">Cloud Solution Architecture <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(AWS, Azure, GCP Design Patterns)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/system-design.html#dr">Disaster Recovery Planning <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(BCP, RTO/RPO Design, Failover)</span></a>
                                            <a href="/services/system-design.html#audit">IT Infrastructure Audit <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Gap Analysis, Health Checks)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Project as a Service -->
                                <div id="services-paas" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/paas.html">End-to-end Project Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Planning, Execution, Handover)</span></a>
                                            <a href="/services/paas.html#agile">Agile & Scrum Delivery <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Sprint Planning, Backlog Management)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/paas.html#pmo">PMO & Governance Services <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Reporting, Risk & Change Control)</span></a>
                                            <a href="/services/paas.html#budget">Budget & Resource Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Cost Control, Resource Allocation)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/paas.html#vendor">Vendor & Stakeholder Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Coordination, SLA Oversight)</span></a>
                                            <a href="/services/paas.html#closeout">Project Closeout & Documentation <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Lessons Learned, Final Reports)</span></a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Customized Services -->
                                <div id="services-custom" class="sector-content">
                                    <div class="dropdown-row">
                                        <div class="dropdown-column">
                                            <a href="/services/custom-services.html">IT Training & Capacity Building <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Certifications, Workshops, e-Learning)</span></a>
                                            <a href="/services/custom-services.html#compliance">Compliance & Risk Management <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(ISO, GDPR, SOC2 Compliance)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/custom-services.html#marketing">Digital Marketing & Branding Solutions <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(SEO, Social Media, Web Design)</span></a>
                                            <a href="/services/custom-services.html#outsourcing">IT Outsourcing & Staff Augmentation <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Managed Teams, Contract Staffing)</span></a>
                                        </div>
                                        <div class="dropdown-column">
                                            <a href="/services/custom-services.html#bpo">Business Process Outsourcing (BPO) <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Back-office, Customer Operations)</span></a>
                                            <a href="/services/custom-services.html#localization">Localization & Adaptation Services <br><span style="font-size: 0.85em; color: #666; font-weight: normal;">(Swahili, French, Arabic Support)</span></a>
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
`;async function y(){const s=document.getElementById("header-container");s&&(s.innerHTML=w,g())}function b(){const s=document.getElementById("footer-container");s&&(s.innerHTML=v)}export{b as a,v as f,w as h,g as i,y as l};
