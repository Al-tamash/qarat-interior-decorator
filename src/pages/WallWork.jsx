import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote , Trophy, Users , PlayCircle , CheckCircle , Clock, Award } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const WallWork = () => {
  // Service Data with exact Wall & Decorative Contractor titles (4 True Wall Solutions)
  const services = [
    {
      id: "wpc-panel",
      title: "WPC Louvers & Fluted Panel Contractor",
      img: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-02.webp",
      desc: "Heavy-duty Wood Plastic Composite louvers and fluted vertical wall cladding offering rich architectural wood texture, acoustic depth, and zero maintenance."
    },
    {
      id: "pvc-panel",
      title: "PVC Panel Wall Cladding Contractor",
      img: "/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp",
      desc: "100% waterproof and termite-proof decorative wall cladding. Ideal for damp walls, rapid renovation, and low-maintenance residential and commercial interiors."
    },
    {
      id: "uv-marble",
      title: "UV Marble Sheet Contractor",
      img: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp",
      desc: "Seamless 8x4 ft high-gloss Italian marble sheets installed with precision edge-trims for luxury TV backdrops, lobby feature walls, and lift facades."
    },
    {
      id: "wallpaper",
      title: "Designer Wallpaper Contractor",
      img: "/images/qarat/wallpapers/qarat-designer-wallpaper-interior-06.webp",
      desc: "Professional installation of imported non-woven, 3D embossed, and metallic vinyl wallpapers for living rooms, bedrooms, and boutique retail spaces."
    }
  ];

  const reviews = [
    {
      name: "Manish Agarwal",
      location: "Gomti Nagar Extension, Lucknow",
      text: "Got a Statuario UV marble sheet TV feature wall with warm backlit shelves installed in our Gomti Nagar home. The seamless joints and edge-trim precision are remarkable. It completely elevated our living room."
    },
    {
      name: "Dr. Sunita Tandon",
      location: "Hazratganj, Lucknow",
      text: "We hired Qarat for WPC fluted louvers and acoustic vertical paneling behind our sofa in Hazratganj. The linear LED lighting integration and wood texture quality are top class. Very clean execution team."
    },
    {
      name: "Mohd Rizwan",
      location: "Indira Nagar, Lucknow",
      text: "Installed waterproof PVC wall panels for our damp bedroom walls and an embossed designer wallpaper accent in Indira Nagar. Solved our seepage issue permanently while giving the room a luxury boutique hotel finish."
    },
    {
      name: "Anurag Kashyap",
      location: "Aliganj, Lucknow",
      text: "The Calacatta Gold UV marble sheets and brass T-profile trims installed by Qarat in our dining lounge look absolutely stunning. High-gloss mirror shine and zero bubbles or waviness."
    },
    {
      name: "Er. Vikas Verma",
      location: "Vibhuti Khand, Gomti Nagar",
      text: "Turnkey execution for our home office accent wall using charcoal fluted louvers and geometric 3D panels. Completed on schedule within 2 days with meticulous attention to detail."
    }
  ];

  const faqs = [
    {
      q: "Do you provide free site measurement and wall assessment in Lucknow?",
      a: "Yes. Our team visits your home or office in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, or any Lucknow locality to inspect wall conditions (dampness, unevenness), take laser measurements, and provide design samples with transparent pricing."
    },
    {
      q: "What is the difference between WPC louvers and PVC wall panels?",
      a: "WPC (Wood Plastic Composite) louvers are heavy-duty, dense, 3D ribbed architectural panels offering authentic wood texture and acoustic depth, best for TV feature walls and living rooms. PVC wall panels are lightweight, 100% waterproof tongue-and-groove sheets ideal for budget-friendly damp wall cladding, bathrooms, and corridors."
    },
    {
      q: "What is the installation cost for UV Marble Sheets in Lucknow?",
      a: "UV Marble Sheets (standard 8x4 ft, 3mm thickness) typically cost ₹1,600 to ₹2,500 per sheet for materials, and complete turnkey installation (including adhesive, T-profile brass/charcoal trims, and cutting) ranges between ₹85 to ₹130 per sq ft."
    },
    {
      q: "Can PVC or WPC panels be installed on walls with seepage or dampness?",
      a: "Yes! PVC panels and WPC louvers are 100% termite-proof and moisture-resistant. When installed over an aluminum or GI sub-framing with a vapor barrier, they conceal wall dampness permanently without peeling or paint blistering."
    },
    {
      q: "How long does it take to install a UV Marble or WPC panel TV wall?",
      a: "A single accent feature wall or TV unit backdrop is typically completed in just 1 to 2 days, including electrical wiring for concealed LED profile lights and wall mounting brackets."
    },
    {
      q: "Do you supply imported wallpapers or only provide installation?",
      a: "We offer both. You can choose from our extensive catalog of imported non-woven, 3D embossed, and metallic vinyl wallpaper rolls, and our skilled paste-and-hang craftsmen ensure bubble-free seamless alignment."
    },
    {
      q: "Are UV Marble sheets scratch-resistant and easy to clean?",
      a: "Yes. Premium UV marble sheets have a cured polyurethane topcoat that resists everyday scuffs and UV fading. They can be wiped down easily with a soft damp microfiber cloth with zero maintenance."
    },
    {
      q: "Do you provide design guidance and 3D preview before installation?",
      a: "Yes. We help you choose the right combination—such as pairing Statuario UV marble with charcoal fluted louvers and warm linear LEDs—and share 3D renderings to visualize the final outcome before execution."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-page">
                  {/* 2. Hero Section */}
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">INTERIOR WORK</span>
            </div>
            
            <h1 className="sp-title">Decorative Wall Paneling & Treatments in Lucknow</h1>
            <p className="sp-desc">
              Transform plain walls into premium focal points with our expert installation of WPC louvers, PVC panels, UV Marble Sheets, and modern wallpapers.
            </p>

            <div className="sp-hero-buttons">
              <Link to="/get-quote" className="sp-btn sp-btn-primary">Get Quote <ArrowRight size={18} /></Link>
              <button onClick={() => handleScroll('services')} className="sp-btn sp-btn-play">
                <span className="play-icon-wrap"><PlayCircle size={20} /></span>
                Our Services
              </button>
            </div>
            
            <div className="sp-hero-glass-stats">
              <div className="sp-stat-item">
                <Trophy size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">20+</span>
                <span className="sp-stat-label">Years Experience</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Star size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">4.9</span>
                <span className="sp-stat-label">Average Rating</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Users size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">1,200+</span>
                <span className="sp-stat-label">Projects Completed</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

{/* 3. What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Professional Wall Solutions</span>
            <h2>What We Offer</h2>
          </div>

          <div className="sp-services-grid">
            {services.map(service => (
              <div key={service.id} className="sp-service-card">
                <div className="sp-service-img-wrap">
                  <img src={service.img} alt={service.title} className="sp-service-img" />
                </div>
                <div className="sp-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="sp-service-actions">
                    <Link to="/get-quote" className="sp-btn-text">Get Quote <ArrowRight size={18} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 4. About Section */}
      <section className="sp-about-section">
        <div className="sp-container sp-about-grid">
          
          <div className="sp-about-content">
            <h2>Who We Are</h2>
            <p>Qarat Interior Decorator provides professional wall treatment and interior work services in Lucknow. We specialize in high-quality wall panels, UV sheets, and wallpapers for residential and commercial spaces, focusing on quality workmanship, durable materials, and customer satisfaction.</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={36} strokeWidth={1.5} />
                <span>Quality Work</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={36} strokeWidth={1.5} />
                <span>On-Time Delivery</span>
              </div>
              <div className="sp-feature-item">
                <Users size={36} strokeWidth={1.5} />
                <span>Experienced Team</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp" alt="Wall Treatment Details" className="sp-main-img" />
            <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-02.webp" alt="WPC Fluted Wall Louvers Detail" className="sp-circle-img" />
          </div>

        </div>
      </section>

      
      <ProjectGallery category="wall" />

      {/* 5. Customer Reviews */}
      <section className="sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-section-eyebrow">CLIENT REVIEWS</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Verified feedback from homeowners and commercial spaces who got wall paneling and decorative treatments installed by Qarat in Lucknow.</p>
          </div>
          
          <div className="sp-reviews-flex">
            {reviews.map((review, idx) => (
              <div key={idx} className="sp-review-card">
                <div className="sp-stars">
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                </div>
                <p className="sp-review-text">"{review.text}"</p>
                <div className="sp-review-footer">
                  <div className="sp-review-avatar">{review.name.charAt(0)}</div>
                  <div className="sp-review-author">
                    <h4>{review.name}</h4>
                    <p>{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="sp-faq-section" id="faq">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">FAQ — INTERIOR SOLUTIONS</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="sp-faq-container">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`sp-faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button className="sp-faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {faq.q}
                  <ChevronDown size={20} className="sp-faq-icon" />
                </button>
                <div className="sp-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

    </div>
  );
};

export default WallWork;
