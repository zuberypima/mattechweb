import{h as l,f as d}from"./header-DmZfBCRa.js";/* empty css             */const p=`
<section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');">
    <div class="container hero-content">
        <h1>Customer Experience Solutions</h1>
        <p>Engage, Serve, and Retain Your Customers</p>
        <a href="#services" class="btn">Elevate Experience</a>
    </div>
</section>

<section id="overview" class="section">
    <div class="container">
        <div class="section-title text-center">
            <h2>The Heart of Modern Banking</h2>
            <p>In the digital age, customer experience is the key differentiator. We provide integrated solutions that bridge physical and digital channels, ensuring personalized, seamless, and responsive interactions at every touchpoint.</p>
        </div>
    </div>
</section>

<section id="services" class="section bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2>CX Technologies</h2>
        </div>
        <div class="row" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-headset fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Omni-channel Contact Centre</h3>
                <p>Unified platform for voice, chat, email, and social media interactions with AI-driven routing.</p>
                <a href="omni-channel.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-robot fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Branch Automation</h3>
                <p>Self-service kiosks, queue management systems, and paperless workflows for the modern branch.</p>
                <a href="branch-automation.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-shuttle-van fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Mobile Banking Branches</h3>
                <p>Fully equipped banking vans to reach underserved areas and provide on-the-spot services.</p>
                <a href="mobile-branches.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="feature-card" style="background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <i class="fas fa-users-cog fa-3x mb-3" style="color: var(--secondary-color); margin-bottom: 20px;"></i>
                <h3>Customer Relationship Management (CRM)</h3>
                <p>360-degree view of customer data to drive personalized marketing and proactive service.</p>
                <a href="crm-solutions.html" style="color: var(--primary-color); font-weight: bold; text-decoration: none; margin-top: 10px; display: inline-block;">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>

        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
             <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1556742524-1a3b53f6520b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Customer Service" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div class="col-md-6" style="flex: 1; min-width: 300px;">
                <h2>Drive Loyalty & Growth</h2>
                <ul style="list-style: none; padding: 0; margin-top: 20px;">
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Increased Customer Retention</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Personalized Cross-Selling</li>
                    <li style="margin-bottom: 15px; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--secondary-color); margin-right: 10px;"></i> Efficient Issue Resolution</li>
                </ul>
                <a href="#contact" class="btn mt-3">Transform Your CX</a>
            </div>
        </div>
    </div>
</section>
`;document.querySelector("#app").innerHTML=`
  ${l}
  ${p}
  ${d}
`;const i=document.querySelector(".hamburger"),m=document.querySelector(".nav-links");i&&i.addEventListener("click",()=>{m.classList.toggle("open")});const s=document.querySelectorAll(".sector-container");s.length>0&&s.forEach(r=>{const o=r.querySelectorAll(".sector-tabs li"),n=r.querySelectorAll(".sector-content");o.forEach(e=>{e.addEventListener("mouseover",()=>{o.forEach(a=>a.classList.remove("active")),e.classList.add("active"),n.forEach(a=>a.classList.remove("active"));const c=e.getAttribute("data-tab"),t=document.getElementById(c);t&&t.classList.add("active")})})});
