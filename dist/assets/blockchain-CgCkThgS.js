import{h as n,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Enterprise Blockchain Solutions</h1>
        <p>Unlock Transparency, Security, and Efficiency with Distributed Ledger Technology</p>
        <a href="#features" class="btn">Explore Use Cases</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Decentralized Trust for Modern Business</h2>
            <p>We build secure, scalable blockchain applications that transform how businesses collaborate and exchange value. From smart contracts to supply chain transparency, harness the power of DLT for your enterprise.</p>
        </div>
    </div>
</section>

<section id="features" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Core Solutions</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-file-contract fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Smart Contracts</h3>
                <p>Automate self-executing agreements that ensure compliance and reduce administrative overhead without intermediaries.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-link fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Supply Chain Traceability</h3>
                <p>Track assets from origin to destination with an immutable ledger, preventing fraud and ensuring authenticity.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-id-badge fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Decentralized Identity (DID)</h3>
                <p>Empower users with self-sovereign identity solutions that enhance privacy and streamline verification processes.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-coins fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Asset Tokenization</h3>
                <p>Digitize real-world assets like real estate or commodities to improve liquidity and fractional ownership.</p>
            </div>
             <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-wallet fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Crypto Wallets & Exchanges</h3>
                <p>Secure, white-label solutions for buying, selling, and storing digital assets with institutional-grade security.</p>
            </div>
              <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-network-wired fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Private Consortium Networks</h3>
                <p>Custom-built permissioned blockchains like Hyperledger Fabric for secure inter-organization collaboration.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
             <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Blockchain Network" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <h2>Why MATTECH Blockchain?</h2>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Enterprise-Grade Security</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Scalable Architecture</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Interoperable Systems</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Expert Advisory Services</li>
                </ul>
                <a href="#contact" class="btn mt-3">Consult an Expert</a>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${n}
  ${p}
  ${d}
`;const s=document.querySelector(".hamburger"),f=document.querySelector(".nav-links");s&&s.addEventListener("click",()=>{f.classList.toggle("open")});const o=document.querySelectorAll(".sector-container");o.length>0&&o.forEach(t=>{const i=t.querySelectorAll(".sector-tabs li"),c=t.querySelectorAll(".sector-content");i.forEach(e=>{e.addEventListener("mouseover",()=>{i.forEach(a=>a.classList.remove("active")),e.classList.add("active"),c.forEach(a=>a.classList.remove("active"));const l=e.getAttribute("data-tab"),r=document.getElementById(l);r&&r.classList.add("active")})})});
