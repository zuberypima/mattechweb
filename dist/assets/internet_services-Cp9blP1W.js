import{h as d,f as l}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Internet Solutions</h1>
        <p>Seamless Connectivity for Indoors & Outdoors</p>
        <a href="#solutions" class="btn">Get Connected</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>High-Speed Internet Everywhere</h2>
            <p>We deliver reliable internet services tailored for businesses, campuses, and remote locations. Choose from high-speed fiber, dedicated wireless links, or mesh networks to stay connected.</p>
        </div>
    </div>
</section>

<section id="solutions" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Our Offerings</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-building fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Indoor Wi-Fi Solutions</h3>
                <p>Enterprise-grade Wi-Fi for offices, hotels, and schools with seamless roaming and guest access.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-signal fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Outdoor Wireless Links</h3>
                <p>Point-to-point (PTP) and Point-to-Multipoint (PTMP) links for connecting remote buildings or campuses.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-shield-alt fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Secure Access</h3>
                <p>Integrated firewalls and bandwidth management to ensure secure and fair usage.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${d}
  ${p}
  ${l}
`;const a=document.querySelector(".hamburger"),f=document.querySelector(".nav-links");a&&a.addEventListener("click",()=>{f.classList.toggle("open")});const i=document.querySelectorAll(".sector-container");i.length>0&&i.forEach(t=>{const o=t.querySelectorAll(".sector-tabs li"),n=t.querySelectorAll(".sector-content");o.forEach(e=>{e.addEventListener("mouseover",()=>{o.forEach(s=>s.classList.remove("active")),e.classList.add("active"),n.forEach(s=>s.classList.remove("active"));const c=e.getAttribute("data-tab"),r=document.getElementById(c);r&&r.classList.add("active")})})});
