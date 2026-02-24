import{h as n,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Regulatory Compliance Solutions</h1>
        <p>Stay Ahead of Regulations with Automated Compliance Management</p>
        <a href="#features" class="btn">Simplify Compliance</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Navigate Complex Regulations with Ease</h2>
            <p>Our suite of compliance tools helps financial institutions, fintechs, and enterprises adhere to local and international regulations (GDPR, AML, KYC, Basel III) while reducing operational costs and risk.</p>
        </div>
    </div>
</section>

<section id="features" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Compliance Suite</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-tasks fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Automated Reporting</h3>
                <p>Generate and submit regulatory reports automatically to central banks and financial authorities in the required formats.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-search fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>AML & CFT Monitoring</h3>
                <p>Advanced transaction monitoring to detect money laundering and terrorism financing activities.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-file-invoice fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Tax Compliance</h3>
                <p>Simplify tax calculations, withholding, and reporting across multiple jurisdictions.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-user-lock fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Data Privacy (GDPR/NDPR)</h3>
                <p>Tools to manage customer consent, data access requests, and ensure data retention policies are met.</p>
            </div>
             <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-clipboard-check fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Audit Trails</h3>
                <p>Maintain immutable logs of all system activities and user actions for internal and external audits.</p>
            </div>
              <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-balance-scale fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Risk Assessment</h3>
                <p>Dynamic risk scoring models to evaluate customer and transaction risk profiles in real-time.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
             <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Compliance" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <h2>Why Automate Compliance?</h2>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Avoid Hefty Fines</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Reduce Manual Workload</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Maintain Reputation</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Stay Updated on Rules</li>
                </ul>
                <a href="#contact" class="btn mt-3">Request Compliance Audit</a>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${n}
  ${p}
  ${d}
`;const o=document.querySelector(".hamburger"),m=document.querySelector(".nav-links");o&&o.addEventListener("click",()=>{m.classList.toggle("open")});const r=document.querySelectorAll(".sector-container");r.length>0&&r.forEach(t=>{const i=t.querySelectorAll(".sector-tabs li"),c=t.querySelectorAll(".sector-content");i.forEach(a=>{a.addEventListener("mouseover",()=>{i.forEach(e=>e.classList.remove("active")),a.classList.add("active"),c.forEach(e=>e.classList.remove("active"));const l=a.getAttribute("data-tab"),s=document.getElementById(l);s&&s.classList.add("active")})})});
