import{h as d,f as l}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Data Transmission & Broadcasting</h1>
        <p>Reliable Delivery of Content & Data</p>
        <a href="#services" class="btn">Discover More</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>High-Capacity Transport</h2>
            <p>We provide advanced solutions for data transport and broadcasting, ensuring your content reaches its destination with high fidelity and low latency.</p>
        </div>
    </div>
</section>

<section id="services" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>Solutions</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-broadcast-tower fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Broadcasting Services</h3>
                <p>End-to-end solutions for digital TV and radio broadcasting, including transmission and headend systems.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-exchange-alt fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Optical Transport</h3>
                <p>DWDM and OTN solutions for maximizing the capacity of your fiber optic network.</p>
            </div>
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-satellite-dish fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Microwave Links</h3>
                <p>High-capacity wireless backhaul for connecting sites where fiber is not feasible.</p>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${d}
  ${p}
  ${l}
`;const i=document.querySelector(".hamburger"),f=document.querySelector(".nav-links");i&&i.addEventListener("click",()=>{f.classList.toggle("open")});const r=document.querySelectorAll(".sector-container");r.length>0&&r.forEach(a=>{const s=a.querySelectorAll(".sector-tabs li"),n=a.querySelectorAll(".sector-content");s.forEach(e=>{e.addEventListener("mouseover",()=>{s.forEach(t=>t.classList.remove("active")),e.classList.add("active"),n.forEach(t=>t.classList.remove("active"));const c=e.getAttribute("data-tab"),o=document.getElementById(c);o&&o.classList.add("active")})})});
