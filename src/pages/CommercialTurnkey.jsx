import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Trophy, Users, PlayCircle, CheckCircle, Clock, Award, Building2 } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const CommercialTurnkey = () => {
  const services = [
    {
      id: "office-interior",
      title: "Office & Corporate Interior Contractor",
      img: "/images/interior-work-new.jpg",
      desc: "Turnkey office fit-outs in Lucknow. From acoustic drywall cabin partitions and modular workstations to executive conference rooms and LED grid ceilings."
    },
    {
      id: "shop-interior",
      title: "Shop & Showroom Interior Contractor",
      img: "/images/new-upload-3.jpg",
      desc: "High-impact retail environments with custom display shelving, cashier counters, spot track lighting, and luxury UV marble or fluted wall facades."
    },
    {
      id: "home-turnkey",
      title: "Home & Residential Turnkey Contractor",
      img: "/images/ceiling-hero-new.png",
      desc: "Complete flat and villa turnkey execution. Combining designer false ceilings, modular kitchens, custom wardrobes, and wall panelling under one contract."
    },
    {
      id: "commercial-spaces",
      title: "Commercial & Institutional Spaces Contractor",
      img: "/images/new-upload-4.jpg",
      desc: "Hospital clinics, educational institutes, banquet halls, cafes, and restaurant interiors engineered for durability, safety, and customer flow."
    }
  ];

  const reviews = [
    {
      name: "Mohd Faizan",
      location: "Gomti Nagar, Lucknow",
      text: "Qarat handled our 2,500 sq ft corporate office setup from bare shell to final handover. The drywall partitions and grid ceilings were finished ahead of schedule."
    },
    {
      name: "Dr. Alok Srivastava",
      location: "Hazratganj, Lucknow",
      text: "Exceptional turnkey work on my diagnostic clinic. Their in-house team was disciplined, neat, and the finishing is top-notch."
    },
    {
      name: "Tariq Ahmad",
      location: "Dubagga, Lucknow",
      text: "Having a single contractor handle false ceilings, modular kitchen, and wardrobes saved us time and hassle. Very transparent pricing."
    }
  ];

  const faqs = [
    {
      q: "What does turnkey interior contracting include?",
      a: "Turnkey means single-point accountability. We handle 3D design alignment, false ceilings, partition walls, electrical conduits, modular furniture, wall cladding, and final cleanup."
    },
    {
      q: "How large is your execution workforce?",
      a: "Qarat has an in-house permanent team of 25 to 30 skilled craftsmen and 4 experienced on-site supervisors, ensuring zero third-party delays."
    },
    {
      q: "Do you execute commercial projects outside Lucknow?",
      a: "Yes. While our headquarters is in Lucknow, we execute turnkey commercial and residential projects across Ayodhya, Kanpur, and Central Uttar Pradesh."
    },
    {
      q: "Can you execute fast-track retail shop interiors?",
      a: "Yes. For retail shops and showrooms where rental costs are active, our mobilized team can work double shifts to deliver retail spaces within 10 to 18 days."
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
      {/* Hero Section */}
      <section className="sp-hero" style={{ backgroundImage: `url(/images/interior-work-new.jpg)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">TURNKEY EXECUTION</span>
            </div>
            
            <h1 className="sp-title">Commercial &amp; Turnkey Interior Contractor in Lucknow</h1>
            <p className="sp-desc">
              Complete interior execution for corporate offices, retail showrooms, clinics, and luxury homes. Driven by our in-house workforce of 25–30 skilled craftsmen.
            </p>

            <div className="sp-hero-buttons">
              <Link to="/get-quote" className="sp-btn sp-btn-primary">Get Turnkey Quote <ArrowRight size={18} /></Link>
              <button onClick={() => handleScroll('services')} className="sp-btn sp-btn-play">
                <span className="play-icon-wrap"><PlayCircle size={20} /></span>
                Our Solutions
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
                <Building2 size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">1,200+</span>
                <span className="sp-stat-label">Projects Completed</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Users size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">25–30</span>
                <span className="sp-stat-label">In-House Craftsmen</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Turnkey Contracting</span>
            <h2>Spaces We Transform</h2>
          </div>

          <div className="sp-services-grid">
            {services.map(service => (
              <div key={service.id} className="sp-service-card">
                <div className="sp-service-img-wrap">
                  <img src={service.img} alt={service.title} className="sp-service-img" />
                </div>
                <div className="sp-service-content">
                  <h3 className="sp-service-card-title">{service.title}</h3>
                  <p className="sp-service-card-desc">{service.desc}</p>
                  <Link to="/get-quote" className="sp-service-btn">
                    Get Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="sp-section sp-trust-section">
        <div className="sp-container">
          <div className="sp-trust-box">
            <div className="sp-trust-item">
              <Award size={36} className="sp-trust-icon" />
              <h4>20+ Years Legacy</h4>
              <p>Serving Lucknow &amp; UP since 2005 with verified contractor credentials.</p>
            </div>
            <div className="sp-trust-item">
              <Users size={36} className="sp-trust-icon" />
              <h4>Permanent Workforce</h4>
              <p>25 to 30 skilled craftsmen &amp; dedicated on-site supervisors on every project.</p>
            </div>
            <div className="sp-trust-item">
              <Clock size={36} className="sp-trust-icon" />
              <h4>On-Time Delivery</h4>
              <p>Strict milestones with penalty-backed handover guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery category="all" />

      {/* Client Reviews */}
      <section className="sp-section sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-eyebrow-dark">Verified Feedback</span>
            <h2>Client Experiences</h2>
          </div>

          <div className="sp-reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="sp-review-card">
                <div className="sp-review-stars">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#B79A6B" color="#B79A6B" />
                  ))}
                </div>
                <p className="sp-review-text">"{r.text}"</p>
                <div className="sp-review-author">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="sp-section sp-faq-section">
        <div className="sp-container sp-faq-container">
          <div className="sp-section-header sp-center">
            <span className="sp-eyebrow-dark">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="sp-faq-list">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`sp-faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="sp-faq-question">
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === i && (
                  <div className="sp-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default CommercialTurnkey;
