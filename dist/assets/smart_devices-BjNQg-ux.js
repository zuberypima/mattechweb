import{h as d,f as l}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Smart Devices & Hardware</h1>
        <p>Powering the Internet of Things</p>
        <a href="#devices" class="btn">View Catalog</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Hardware for the Connected World</h2>
            <p>From carrier-grade telecom equipment to smart IoT sensors, we supply and install top-tier hardware to support your communication needs.</p>
        </div>
    </div>
</section>

<section id="devices" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Product Categories</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-server fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Telecom Equipment</h3>
                <p>Base stations, antennas, microwave links, and optical transport equipment from leading vendors.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-microchip fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>IoT Sensors</h3>
                <p>Smart meters, environmental sensors, and asset trackers for industrial and smart city applications.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-mobile-alt fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>End-User Devices</h3>
                <p>Smartphones, tablets, and ruggedized devices tailored for enterprise workforce management.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${d}
  ${p}
  ${l}
`;const o=document.querySelector(".hamburger"),m=document.querySelector(".nav-links");o&&o.addEventListener("click",()=>{m.classList.toggle("open")});const i=document.querySelectorAll(".sector-container");i.length>0&&i.forEach(a=>{const r=a.querySelectorAll(".sector-tabs li"),n=a.querySelectorAll(".sector-content");r.forEach(e=>{e.addEventListener("mouseover",()=>{r.forEach(t=>t.classList.remove("active")),e.classList.add("active"),n.forEach(t=>t.classList.remove("active"));const c=e.getAttribute("data-tab"),s=document.getElementById(c);s&&s.classList.add("active")})})});
