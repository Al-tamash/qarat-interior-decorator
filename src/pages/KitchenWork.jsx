import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote , Trophy, Users , PlayCircle , CheckCircle , Clock, Award } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const KitchenWork = () => {
  const services = [
    {
      id: "l-shaped-kitchen",
      title: "L-Shaped Modular Kitchen",
      img: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp",
      desc: "Space-efficient two-wall corner layouts tailored for Indian cooking with boiling waterproof (BWP) marine ply, corner carousel units, and chimney integration."
    },
    {
      id: "island-parallel-kitchen",
      title: "Island & Parallel Modular Kitchen",
      img: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp",
      desc: "Spacious luxury layouts featuring central dining and prep islands, quartz waterfall countertops, parallel prep workflows, and ceiling pendant lighting."
    },
    {
      id: "acrylic-pu-cabinets",
      title: "Acrylic & PU Modular Cabinets",
      img: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-03.webp",
      desc: "High-gloss scratch-resistant acrylic and PU finishes with tinted glass profile shutters, under-cabinet warm LEDs, and Blum soft-close tandem drawers."
    },
    {
      id: "u-shaped-kitchen",
      title: "U-Shaped Kitchen & Tall Pantry",
      img: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-05.webp",
      desc: "Continuous three-wall counter layout offering maximum storage, integrated tall pantry open racks, corner utility, and separate wet and dry prep zones."
    }
  ];

  const reviews = [
    {
      name: "Suresh Gupta",
      location: "Gomti Nagar, Lucknow",
      text: "Qarat installed our L-shaped modular kitchen with BWP marine ply and Blum soft-close drawers. The finish is stunning and the corner carousel storage works smoothly."
    },
    {
      name: "Ananya Saxena",
      location: "Aliganj, Lucknow",
      text: "Got an island modular kitchen done for our new home. Excellent quartz countertop cutting, neat chimney ducting, and completed right on the promised timeline."
    },
    {
      name: "Mohd Tariq",
      location: "Indira Nagar, Lucknow",
      text: "Very professional team for kitchen cabinetry and modular bedroom wardrobes. Transparent pricing with branded Hettich hardware and zero hidden costs."
    }
  ];

  const faqs = [
    {
      q: "What material do you use for modular kitchen carcasses?",
      a: "We use 100% Boiling Water Proof (BWP) 710 Grade Marine Plywood for all base and sink carcass cabinets to guarantee protection against water, humidity, and termites."
    },
    {
      q: "What shutter finishes are available for modular kitchens?",
      a: "We offer Anti-scratch High-Gloss Acrylic, PU Lacquer, Matte European Laminates, and Tinted Glass shutters with sleek aluminum profile handles."
    },
    {
      q: "Which hardware and channel brands do you install?",
      a: "We use authentic German and European hardware including Blum, Hettich, and Hafele for soft-close hinges, tandem box drawers, and tall pantry pull-outs."
    },
    {
      q: "How long does a modular kitchen take from order to installation?",
      a: "Factory precision cutting and edge-banding takes 12 to 15 days, followed by 2 to 3 days of clean on-site assembly and appliance fitting at your home in Lucknow."
    },
    {
      q: "Do you provide 3D designs before starting the work?",
      a: "Yes, our team creates realistic 3D visualizations and ergonomic layout drawings so you can review colors, storage configurations, and counter heights before fabrication."
    },
    {
      q: "Is there a warranty on your modular kitchen installations?",
      a: "Yes. All our installations carry an in-house 1-year service warranty, along with manufacturer warranties up to 10 years on marine ply and lifetime warranties on premium hardware."
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
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">INTERIOR WORK</span>
            </div>
            
            <h1 className="sp-title">Custom Modular Kitchens & Interior Furniture in Lucknow</h1>
            <p className="sp-desc">
              Bespoke modular kitchens, custom wardrobes, and smart furniture designed for durability, ergonomics, and seamless space utilization.
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
            <span className="sp-eyebrow-dark">Professional Modular Solutions</span>
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
            <p>Qarat Interior Decorator provides professional modular kitchen and furniture solutions in Lucknow. We specialize in bespoke designs, maximizing space utility, and using premium hardware for long-lasting performance and customer satisfaction.</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={36} strokeWidth={1.5} />
                <span>Quality Materials</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={36} strokeWidth={1.5} />
                <span>On-Time Delivery</span>
              </div>
              <div className="sp-feature-item">
                <Users size={36} strokeWidth={1.5} />
                <span>Custom Designs</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp" alt="Modular Kitchen Installation" className="sp-main-img" />
            <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-03.webp" alt="Modular Kitchen Cabinet Detail" className="sp-circle-img" />
          </div>

        </div>
      </section>

      
      <ProjectGallery category="kitchen" />

      {/* 5. Customer Reviews */}
      <section className="sp-section sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-eyebrow-dark">Verified Feedback</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Real feedback from homeowners who got modular kitchens and wardrobes made by Qarat in Lucknow.</p>
          </div>
          
          <div className="sp-reviews-grid">
            {reviews.map((review, idx) => (
              <div key={idx} className="sp-review-card">
                <div className="sp-review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#B79A6B" color="#B79A6B" />
                  ))}
                </div>
                <p className="sp-review-text">"{review.text}"</p>
                <div className="sp-review-author">
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
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

export default KitchenWork;
