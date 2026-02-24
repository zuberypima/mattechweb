import{h as l,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Cash Management Solutions</h1>
        <p>Automated, Secure, and Efficient Cash Processing</p>
        <a href="#services" class="btn">Optimize Cash Flow</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Streamline Your Cash Operations</h2>
            <p>From bank branches to retail back-offices, our cash management solutions automate the counting, sorting, validating, and secure storage of cash. Reduce operational costs and minimize risks with our advanced technology.</p>
        </div>
    </div>
</section>

<section id="services" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Our Technology</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-search-dollar fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Currency Verifiers</h3>
                <p>High-speed machines for counting and authenticating banknotes with multi-currency support.</p>
                <a href="currency-verifiers.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-money-check-alt fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Automated Teller Machines (ATMs)</h3>
                <p>Next-gen ATMs for cash dispensing, depositing, and value-added transactions.</p>
                <a href="atms.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-box-open fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Cash Banding & Wrapping</h3>
                <p>Automated solutions for bundling currency notes for secure transport and storage.</p>
                <a href="cash-banding.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-recycle fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Smart Deposit & Recycling</h3>
                <p>Intelligent machines that accept bulk cash deposits and recycle notes for withdrawal.</p>
                <a href="smart-deposit.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
             <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1579621970792-2261890c3c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Cash Processing" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <h2>Why Automate Cash Handling?</h2>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> 99.9% Counting Accuracy</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Counterfeit Detection</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Real-Time Cash Visibility</li>
                </ul>
                <a href="#contact" class="btn mt-3">Request a Consultation</a>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${l}
  ${p}
  ${d}
`;const s=document.querySelector(".hamburger"),h=document.querySelector(".nav-links");s&&s.addEventListener("click",()=>{h.classList.toggle("open")});const i=document.querySelectorAll(".sector-container");i.length>0&&i.forEach(t=>{const o=t.querySelectorAll(".sector-tabs li"),c=t.querySelectorAll(".sector-content");o.forEach(a=>{a.addEventListener("mouseover",()=>{o.forEach(e=>e.classList.remove("active")),a.classList.add("active"),c.forEach(e=>e.classList.remove("active"));const n=a.getAttribute("data-tab"),r=document.getElementById(n);r&&r.classList.add("active")})})});
