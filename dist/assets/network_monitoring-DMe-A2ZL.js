import{h as l,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Network Monitoring Solutions</h1>
        <p>Proactive Visibility & Control</p>
        <a href="#features" class="btn">Explore Solutions</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Always On, Always Secured</h2>
            <p>Ensure optimal performance and minimize downtime with our comprehensive network monitoring tools. gain real-time insights into your infrastructure, applications, and devices.</p>
        </div>
    </div>
</section>

<section id="features" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Key Capabilities</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-desktop fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Infrastructure Monitoring</h3>
                <p>Track the health of routers, switches, servers, and virtual environments in real-time.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-chart-line fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Traffic Analysis</h3>
                <p>Analyze bandwidth usage, identify bottlenecks, and optimize network flow.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-bell fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Alerting & Reporting</h3>
                <p>Receive instant notifications for anomalies and generate detailed performance reports.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${l}
  ${p}
  ${d}
`;const i=document.querySelector(".hamburger"),f=document.querySelector(".nav-links");i&&i.addEventListener("click",()=>{f.classList.toggle("open")});const s=document.querySelectorAll(".sector-container");s.length>0&&s.forEach(o=>{const a=o.querySelectorAll(".sector-tabs li"),n=o.querySelectorAll(".sector-content");a.forEach(e=>{e.addEventListener("mouseover",()=>{a.forEach(t=>t.classList.remove("active")),e.classList.add("active"),n.forEach(t=>t.classList.remove("active"));const c=e.getAttribute("data-tab"),r=document.getElementById(c);r&&r.classList.add("active")})})});
