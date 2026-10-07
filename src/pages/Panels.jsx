import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote, Trophy, Users, PlayCircle, CheckCircle, Clock, Award, ShieldCheck, Layers, Truck } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const Panels = () => {
  const services = [
    {
      id: "pvc-panel",
      title: "PVC Wall & Ceiling Panels (Waterproof)",
      img: "/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp",
      desc: "100% waterproof, termite-proof PVC tongue & groove panels in high-gloss, matte, and wooden textures for rapid wall and damp ceiling cladding."
    },
    {
      id: "wpc-panel",
      title: "WPC Louvers & Fluted Exterior/Interior Panels",
      img: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-07.webp",
      desc: "Heavy-duty Wood Plastic Composite louvers for luxury exterior elevation cladding and moisture-proof interior feature walls."
    },
    {
      id: "charcoal-panels",
      title: "Charcoal Louver Panels & Acoustic Slats",
      img: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-05.webp",
      desc: "High-density charcoal polymer louvers offering scratch-resistant, termite-free luxury accents for bedrooms, TV backdrops, and executive offices."
    },
    {
      id: "uv-marble-panels",
      title: "UV Marble Sheets & PVC Marble Panels",
      img: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp",
      desc: "Seamless 8x4 ft high-gloss UV coated faux marble sheets and matching T-profile trims for luxury feature walls at a fraction of real marble cost."
    }
  ];

  const reviews = [
    {
      name: "Arunendra Dixit",
      location: "Gomti Nagar Extension, Lucknow",
      text: "Sourced charcoal fluted louvers and UV marble sheets from Qarat for our living room TV unit in Gomti Nagar. The interlocking joints are seamless, and the wood texture looks extraordinarily premium. Delivered on time directly from their Lucknow godown."
    },
    {
      name: "Mohd Zeeshan",
      location: "Hazratganj, Lucknow",
      text: "We regularly buy bulk PVC wall panels and exterior WPC louvers from Qarat for damp wall cladding projects in Hazratganj. 100% waterproof quality, zero warping, and best wholesale prices in UP."
    },
    {
      name: "Dr. Neha Mehrotra",
      location: "Aliganj, Lucknow",
      text: "Installed anti-bacterial PVC tongue-and-groove wall panels in our Aliganj clinic corridors. Completely eliminated our recurring dampness and flaking paint issues. Extremely easy to clean and sanitize."
    },
    {
      name: "Er. Ritesh Srivastava",
      location: "Indira Nagar, Lucknow",
      text: "Specified Qarat's high-density WPC louvers and vertical LED profile strips for a residential villa in Indira Nagar. The color consistency and dimensional stability of their louvers are top notch."
    },
    {
      name: "Vikas Agarwal",
      location: "Charbagh, Lucknow",
      text: "Purchased heavy-duty fluted wall panels and PVC ceiling sections for our hotel banquet reception. Their wholesale rates beat the Delhi market, with immediate same-day delivery right here in Lucknow."
    }
  ];

  const faqs = [
    {
      q: "What is the difference between PVC panels and WPC louvers?",
      a: "PVC panels are lightweight, 100% waterproof hollow tongue-and-groove sheets ideal for damp walls, bathrooms, and ceilings. WPC louvers are heavy-duty, dense wood-plastic composite architectural ribs offering authentic 3D wood texture for luxury feature walls and exterior elevations."
    },
    {
      q: "Can PVC and WPC panels permanently solve wall seepage and dampness (seelan)?",
      a: "Yes! Unlike paint or wallpaper which peels when exposed to moisture, PVC and WPC panels are 100% moisture-proof and termite-resistant. Installed over an aluminum or GI sub-frame, they form a permanent barrier against damp walls."
    },
    {
      q: "What are the wholesale prices for PVC and WPC wall panels in Lucknow?",
      a: "Standard PVC panels range between ₹25 to ₹45 per sq ft (or ₹150–₹350 per plank), while premium WPC/Charcoal fluted louvers range between ₹450 to ₹950 per panel (8x5 inch to 9.5x6 inch profiles). Contact us for bulk volume trade rates."
    },
    {
      q: "Can WPC louvers be used for exterior building elevations?",
      a: "Yes, our exterior-grade WPC louvers are UV-stabilized, weather-resistant, and heat-proof, designed to withstand intense Lucknow summers and monsoons without fading or cracking."
    },
    {
      q: "Do you supply matching corner trims, L-angles, and profile lights?",
      a: "Yes, we supply the complete installation ecosystem including matching PVC end-caps, inner/outer corner L-profiles, aluminum LED profile channels, silicon adhesives, and starter clips."
    },
    {
      q: "Do you offer same-day dispatch and delivery in Lucknow?",
      a: "Yes. We have ready stock at our Lucknow godown and arrange same-day tempo dispatch to Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Shaheed Path, Transport Nagar, and all surrounding areas."
    },
    {
      q: "Are charcoal louvers fire-retardant and scratch-resistant?",
      a: "Yes, our high-density charcoal polymer panels come with an anti-scratch protective coating, are borer/termite-proof, and have Class B fire-retardant certification suitable for commercial fit-outs."
    },
    {
      q: "Do you supply only materials or also provide installation service?",
      a: "We are direct wholesale distributors for contractors and architects, but we also provide experienced in-house installation craftsmen for turnkey wall paneling across Lucknow."
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
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-01.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">MATERIAL SUPPLY</span>
            </div>
            
            <h1 className="sp-title">PVC, WPC & Fluted Wall Panels Supplier in Lucknow</h1>
            <p className="sp-desc">
              Wholesale and retail distributor of premium PVC panels, WPC exterior louvers, fluted charcoal panels, and architectural wall claddings across Lucknow.
            </p>

            <div className="sp-hero-buttons">
              <Link to="/get-quote" className="sp-btn sp-btn-primary">Get Quote <ArrowRight size={18} /></Link>
              <button onClick={() => handleScroll('services')} className="sp-btn sp-btn-play">
                <span className="play-icon-wrap"><PlayCircle size={20} /></span>
                Our Materials
              </button>
            </div>
            
            <div className="sp-hero-glass-stats">
              <div className="sp-stat-item">
                <ShieldCheck size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">100%</span>
                <span className="sp-stat-label">Water & Termite Proof</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Layers size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">50+</span>
                <span className="sp-stat-label">Shades & Textures</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Truck size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">Ready</span>
                <span className="sp-stat-label">Wholesale Bulk Stock</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

{/* 3. What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Panel Types</span>
            <h2>Our Panel Selection</h2>
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
            <p>Qarat is the leading supplier of architectural wall and ceiling panels in Lucknow. We stock a massive variety of PVC, WPC, and charcoal panels to supply contractors, builders, and homeowners with high-quality, durable finishes for modern interiors.</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={36} strokeWidth={1.5} />
                <span>Huge Inventory</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={36} strokeWidth={1.5} />
                <span>Wholesale Pricing</span>
              </div>
              <div className="sp-feature-item">
                <Users size={36} strokeWidth={1.5} />
                <span>Ready Stock</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="Luxury WPC Fluted Wall Louvers Installation" className="sp-main-img" />
            <img src="/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp" alt="Dual-Tone PVC Wall Cladding Detail" className="sp-circle-img" />
          </div>

        </div>
      </section>

      
      <ProjectGallery category="panels" />

      {/* 5. Customer Reviews */}
      <section className="sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-section-eyebrow">CLIENT REVIEWS</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Verified feedback from homeowners, contractors, and architects sourcing PVC, WPC, and charcoal wall panels from Qarat in Lucknow.</p>
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

export default Panels;
