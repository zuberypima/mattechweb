import{h as l,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>High-Speed Fiber Optics</h1>
        <p>Connecting Communities with Blazing Fast Broadband Infrastructure</p>
        <a href="#features" class="btn">Learn More</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>The Backbone of Modern Communication</h2>
            <p>We design, deploy, and maintain state-of-the-art fiber optic networks that power businesses, homes, and public institutions. From long-haul backbone to Fiber-to-the-Home (FTTH), we ensure reliable, high-capacity connectivity.</p>
        </div>
    </div>
</section>

<section id="features" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Our Expertise</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-network-wired fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Network Planning & Design</h3>
                <p>Comprehensive GIS mapping and route optimization to deliver the most efficient network topology.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-tools fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Civil Works & Installation</h3>
                <p>Expert trenching, micro-trenching, and aerial cable installation services minimizing public disruption.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-home fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>FTTH/FTTB Deployment</h3>
                <p>End-to-end connectivity solutions bringing high-speed internet directly to homes and office buildings.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-broadcast-tower fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Backhaul Solutions</h3>
                <p>Robust fiber backhaul links to support mobile towers and reliable data transmission across regions.</p>
            </div>
             <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-stethoscope fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Testing & Commissioning</h3>
                <p>Rigorous OTDR testing and link validation to ensure optimal performance before handover.</p>
            </div>
              <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-hard-hat fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Maintenance & Support</h3>
                <p>24/7 preventive and corrective maintenance to minimize downtime and ensure network health.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
             <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1558494949-ef2bb6db8744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Fiber Cable" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <h2>Connectivity You Can Count On</h2>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Ultra-Low Latency</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Scalable Bandwidth</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Future-Proof Technology</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Rapid Deployment</li>
                </ul>
                <a href="#contact" class="btn mt-3">Start Your Project</a>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${l}
  ${p}
  ${d}
`;const r=document.querySelector(".hamburger"),m=document.querySelector(".nav-links");r&&r.addEventListener("click",()=>{m.classList.toggle("open")});const s=document.querySelectorAll(".sector-container");s.length>0&&s.forEach(t=>{const i=t.querySelectorAll(".sector-tabs li"),n=t.querySelectorAll(".sector-content");i.forEach(e=>{e.addEventListener("mouseover",()=>{i.forEach(a=>a.classList.remove("active")),e.classList.add("active"),n.forEach(a=>a.classList.remove("active"));const c=e.getAttribute("data-tab"),o=document.getElementById(c);o&&o.classList.add("active")})})});
