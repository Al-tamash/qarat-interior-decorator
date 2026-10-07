import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote , Trophy, Users , PlayCircle , CheckCircle , Clock, Award } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const CeilingWork = () => {
  // Service Data with exact False Ceiling Contractor titles (4 True Ceiling Services)
  const services = [
    {
      id: "gypsum-false-ceiling",
      title: "Gypsum False Ceiling Contractor",
      img: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp",
      desc: "Turnkey designer false ceilings with cove LED lighting, stepped profiles, and flawless fire-resistant gypsum board finishing for living rooms and commercial spaces."
    },
    {
      id: "pop-murga-jali",
      title: "POP Murga Jali False Ceiling Contractor",
      img: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp",
      desc: "Heavy-duty wire mesh (Murga Jali) and Plaster of Paris construction. Perfect for intricate ornamental cornices, domes, and lasting structural durability."
    },
    {
      id: "gypsum-grid-ceiling",
      title: "Gypsum 2x2 Grid False Ceiling Contractor",
      img: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
      desc: "Modular T-grid ceiling systems with PVC-laminated washable or acoustic tiles. Standard for corporate offices, IT setups, and institutional halls."
    },
    {
      id: "pvc-panel-ceiling",
      title: "PVC Panel Ceiling Contractor",
      img: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp",
      desc: "100% waterproof and termite-proof tongue-and-groove PVC panel ceiling cladding in luxury wood and matte textures. Ideal for damp zones, balconies, and kitchens."
    }
  ];

  const reviews = [
    {
      name: "Rahul Verma",
      location: "Gomti Nagar, Lucknow",
      text: "Qarat did the gypsum false ceiling with warm cove LED lighting for our drawing room and lobby in Gomti Nagar. The laser level alignment was razor sharp and they completed the framing and putty finishing in just 4 days."
    },
    {
      name: "Er. Amit Srivastava",
      location: "Hazratganj, Lucknow",
      text: "We hired them for a 2x2 modular grid ceiling across our corporate branch office in Hazratganj. Genuine Gyproc T-grid channels, neat light panel cutouts, and zero material wastage. Very professional contractor team."
    },
    {
      name: "Dr. Alok Pandey",
      location: "Aliganj, Lucknow",
      text: "Got POP Murga Jali ceiling and bedroom tray ceilings done for our bungalow in Aliganj. The curved cornice finishing and concealed cove details came out exactly as planned with zero cracks or sagging."
    }
  ];

  const faqs = [
    {
      q: "Do you provide free site measurement and cost estimation in Lucknow?",
      a: "Yes. Our ceiling supervisor visits your site in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, or any Lucknow area with laser measuring tools to evaluate room dimensions, ceiling heights, and lighting needs for a transparent quote."
    },
    {
      q: "How do I choose between Gypsum, POP, and 2x2 Grid ceiling?",
      a: "Gypsum false ceilings are ideal for modern homes with clean cove lighting and fast installation. POP Murga Jali is preferred for traditional ornate cornices and curved mouldings. 2x2 Grid ceilings are standard for offices and commercial setups requiring quick access to overhead AC and electrical ducts."
    },
    {
      q: "What is the false ceiling installation cost per sq ft in Lucknow?",
      a: "Gypsum false ceiling with genuine Gyproc boards typically ranges from ₹95 to ₹125 per sq ft. POP Murga Jali ceilings range from ₹110 to ₹145 per sq ft, while commercial 2x2 Grid ceilings cost between ₹75 to ₹110 per sq ft, covering metal channels, boards, and seamless joint finishing."
    },
    {
      q: "How long does false ceiling installation take for a room or home?",
      a: "A standard bedroom or living room false ceiling is usually completed in 2 to 3 days. A full 3BHK flat installation across drawing room, dining, and bedrooms typically takes 6 to 9 days including metal framing, board fixing, and joint taping."
    },
    {
      q: "Do you provide 3D ceiling designs before starting execution?",
      a: "Yes. We share 3D visualizations and cove lighting plans so you can preview the stepped trays, concealed LED strip positions, and spotlight placements before metal framing begins on site."
    },
    {
      q: "Which false ceiling is best suited for Lucknow's humid weather?",
      a: "For general living spaces, branded Gyproc or USG Knauf boards with fiber mesh jointing tape prevent seasonal hairline cracks. For damp areas like kitchens, washrooms, or exterior balconies in Lucknow, moisture-resistant (MR) gypsum or waterproof PVC ceiling panels are recommended."
    },
    {
      q: "Is there a warranty on your false ceiling work?",
      a: "Yes. Qarat provides a 1-year service warranty against sagging, joint cracks, and alignment issues, alongside manufacturer warranties on genuine galvanized GI channels and gypsum plasterboards."
    },
    {
      q: "Do you also handle electrical wiring and LED cove light fittings?",
      a: "Yes, our electrical technicians coordinate all concealed conduit wiring, driver installations, warm white/ambient LED strips, and magnetic track light or spotlight fittings alongside the false ceiling framing."
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
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/ceiling/qarat-false-ceiling-hero.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">INTERIOR WORK</span>
            </div>
            
            <h1 className="sp-title">False Ceiling Design & Installation in Lucknow</h1>
            <p className="sp-desc">
              Professional false ceiling installation for homes, offices, showrooms, and commercial spaces. Expert craftsmen, genuine Gyproc materials, and clean finishing.
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
            <span className="sp-eyebrow-dark">Professional Ceiling Solutions</span>
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
            <p>Qarat Interior Decorator provides professional ceiling and interior work services in Lucknow. We specialize in high-quality ceiling solutions and elegant interior finishes for residential and commercial spaces, focusing on quality workmanship, durable materials, and customer satisfaction.</p>
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
            <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp" alt="Ceiling Work Execution" className="sp-main-img" />
            <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Stepped False Ceiling Cove Detail" className="sp-circle-img" />
          </div>

        </div>
      </section>

      
      <ProjectGallery category="ceiling" />

      {/* 5. Customer Reviews */}
      <section className="sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-section-eyebrow">CLIENT REVIEWS</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Verified feedback from homeowners and businesses who got false ceilings installed by Qarat in Lucknow.</p>
          </div>
          
          <div className="sp-reviews-grid">
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

export default CeilingWork;
