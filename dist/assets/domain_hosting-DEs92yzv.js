import{h as d,f as l}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Domain & Hosting Services</h1>
        <p>Your Digital Identity Starts Here</p>
        <a href="#packages" class="btn">View Packages</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>Reliable Hosting Solutions</h2>
            <p>We provide secure, high-performance web hosting and domain registration services. Whether you need a simple personal site or a robust enterprise cluster, we have the infrastructure to support your growth.</p>
        </div>
    </div>
</section>

<section id="packages" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Our Services</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-globe fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Domain Registration</h3>
                <p>Register .com, .tz, .co.tz, and other TLDs with ease. Secure your brand identity online.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-server fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Web Hosting</h3>
                <p>Shared hosting, VPS, and Dedicated Servers with 99.9% uptime guarantee.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-envelope fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Business Email</h3>
                <p>Professional email hosting for your organization with spam protection and archiving.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${d}
  ${p}
  ${l}
`;const r=document.querySelector(".hamburger"),g=document.querySelector(".nav-links");r&&r.addEventListener("click",()=>{g.classList.toggle("open")});const i=document.querySelectorAll(".sector-container");i.length>0&&i.forEach(a=>{const o=a.querySelectorAll(".sector-tabs li"),n=a.querySelectorAll(".sector-content");o.forEach(e=>{e.addEventListener("mouseover",()=>{o.forEach(t=>t.classList.remove("active")),e.classList.add("active"),n.forEach(t=>t.classList.remove("active"));const c=e.getAttribute("data-tab"),s=document.getElementById(c);s&&s.classList.add("active")})})});
