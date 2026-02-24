import{h as d,f as l}from"./header-DmZfBCRa.js";/* empty css             */const u=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Network Infrastructure</h1>
        <p>Robust LAN, MAN & WAN Solutions</p>
        <a href="#services" class="btn">Build Your Network</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>The Backbone of Your Business</h2>
            <p>We design, implement, and maintain scalable network infrastructures. From local office networks (LAN) to city-wide (MAN) and global (WAN) connections, we ensure your data flows efficiently and securely.</p>
        </div>
    </div>
</section>

<section id="services" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Our Expertise</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-network-wired fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>LAN & WAN Design</h3>
                <p>Custom network architecture designed for performance, redundancy, and future growth.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-project-diagram fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>SD-WAN Solutions</h3>
                <p>Optimize your wide area network with software-defined networking for better control and cost savings.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-cogs fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Structured Cabling</h3>
                <p>Professional installation of copper and fiber cabling systems adhering to international standards.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${d}
  ${u}
  ${l}
`;const s=document.querySelector(".hamburger"),f=document.querySelector(".nav-links");s&&s.addEventListener("click",()=>{f.classList.toggle("open")});const i=document.querySelectorAll(".sector-container");i.length>0&&i.forEach(r=>{const o=r.querySelectorAll(".sector-tabs li"),n=r.querySelectorAll(".sector-content");o.forEach(e=>{e.addEventListener("mouseover",()=>{o.forEach(t=>t.classList.remove("active")),e.classList.add("active"),n.forEach(t=>t.classList.remove("active"));const c=e.getAttribute("data-tab"),a=document.getElementById(c);a&&a.classList.add("active")})})});
