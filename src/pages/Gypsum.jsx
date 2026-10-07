import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote, Trophy, Users, PlayCircle, CheckCircle, Clock, Award, ShieldCheck, Truck } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const Gypsum = () => {
  const services = [
    {
      id: "gyproc-boards",
      title: "Saint-Gobain Gyproc Plasterboards",
      img: "/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp",
      desc: "Authorized wholesale supply of genuine Gyproc 12.5mm regular, moisture-resistant (MR), and firestop plasterboards for false ceilings and drywall partitions."
    },
    {
      id: "india-gypsum",
      title: "India Gypsum Plasterboards (Authorized Dealer)",
      img: "/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp",
      desc: "ISI-certified India Gypsum regular, fire-rated, and moisture-resistant boards. Reliable, cost-effective, and available in ready bulk stock for Lucknow contractors."
    },
    {
      id: "usg-knauf",
      title: "USG Knauf Drywall & Ceiling Systems",
      img: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-03.webp",
      desc: "High-performance USG Knauf 12.5mm plasterboards and acoustic drywall partition systems engineered for corporate offices, hospitals, and commercial fit-outs."
    },
    {
      id: "jointing-compounds",
      title: "Gypsum Jointing Compounds & POP/Plaster",
      img: "/images/qarat/materials/qarat-sakarni-pop-gypsum-plaster-01.webp",
      desc: "Premium Sakarni POP gypsum plaster, Gyproc Elite-90, Knauf jointing powder, fiberglass self-adhesive joint tape, and paper tape for crack-free seamless finishing."
    }
  ];

  const reviews = [
    {
      name: "Er. Ashish Tandon",
      location: "Gomti Nagar Extension, Lucknow",
      text: "We regularly source genuine Saint-Gobain Gyproc 12.5mm boards and Gypframe channels from Qarat for our residential projects across Gomti Nagar. Best wholesale rates in Lucknow, zero transit damage, and prompt same-day tempo delivery from their godown."
    },
    {
      name: "Mohd Fahad",
      location: "Hazratganj, Lucknow",
      text: "For high-volume gypsum ceiling projects in Hazratganj and commercial sites, Qarat is our go-to distributor. Ready stock of India Gypsum ISI boards, original Sakarni POP, and GI perimeter channels always available at distributor pricing."
    },
    {
      name: "Sanjay Mehrotra",
      location: "Vibhuti Khand, Gomti Nagar",
      text: "Ordered bulk USG Knauf acoustic drywall systems and Knauf T-Grid sections for our corporate office fit-out in Vibhuti Khand. Every bundle was factory sealed with authentic batch codes. Outstanding logistical support."
    },
    {
      name: "Dr. R. K. Srivastava",
      location: "Aliganj, Lucknow",
      text: "Purchased genuine Gyproc moisture-resistant plasterboards and Sakarni plaster for our house renovation in Aliganj. Their team provided honest guidance on sheet counts and delivered directly to our doorstep at honest wholesale prices."
    },
    {
      name: "Deepak Awasthi",
      location: "Indira Nagar, Lucknow",
      text: "Finding genuine Saint-Gobain plasterboards and heavy gauge GI channels at honest rates used to be difficult in Lucknow. Qarat maintains ready stock in Indira Nagar and their material quality is 100% authentic."
    }
  ];

  const faqs = [
    {
      q: "Which brands of gypsum plasterboards do you stock in Lucknow?",
      a: "We maintain ready bulk warehouse inventory of Saint-Gobain Gyproc (Regular, Moisture Resistant MR, and Firestop FR), India Gypsum ISI-marked boards, and USG Knauf high-performance drywall systems in standard 6x4 ft and 12.5mm / 9.5mm thickness."
    },
    {
      q: "What are the wholesale prices for Gyproc and India Gypsum boards in Lucknow?",
      a: "India Gypsum regular plasterboards generally range between ₹340 to ₹420 per sheet, while genuine Saint-Gobain Gyproc boards range between ₹450 to ₹550 per sheet depending on grade (Regular vs MR) and order volume. Contact us on WhatsApp for exact current daily wholesale rate sheets."
    },
    {
      q: "Do you offer same-day site delivery across Lucknow?",
      a: "Yes. We arrange prompt same-day or scheduled tempo delivery across all Lucknow localities including Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Shaheed Path, Ashiyana, and Transport Nagar directly from our local godowns."
    },
    {
      q: "How can I verify that the Saint-Gobain Gyproc boards are genuine?",
      a: "All our Saint-Gobain Gyproc plasterboards feature original branded side-tapes, laser-printed manufacturing batch codes along the edge, and genuine Gyproc Saint-Gobain watermarks. We provide authentic tax invoices with every dispatch."
    },
    {
      q: "What is the difference between regular Gypsum board and Moisture Resistant (MR) board?",
      a: "Regular gypsum boards (ivory face paper) are ideal for standard living rooms and bedrooms. Moisture Resistant (MR) boards (green face paper) contain silicone additives in the core and water-repellent liners, making them essential for false ceilings in kitchens, bathrooms, and seepage-prone areas."
    },
    {
      q: "Do you supply complete GI framing channels, screws, and accessories as well?",
      a: "Yes. Along with gypsum boards, we provide the complete framing and finishing ecosystem: heavy-gauge intermediate channels, ceiling sections, perimeter channels, L-angles, rawl plugs, drywall bugle-head screws, fiberglass self-adhesive joint tape, paper tape, and Sakarni POP/Gyproc Elite-90 jointing compound."
    },
    {
      q: "Can contractors, architects, and builders purchase in bulk with GST invoicing?",
      a: "Absolutely. We cater directly to interior contractors, builders, and corporate clients with official GST invoices for input tax credit (ITC) and offer tiered wholesale slab discounts for bulk quantities."
    },
    {
      q: "Do you only supply materials, or do you also provide ceiling installation services?",
      a: "While our primary division is direct wholesale material supply, we also have an experienced in-house contracting team and an extensive network of verified, skilled false ceiling fabricators across Lucknow for complete turnkey execution."
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
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">MATERIAL SUPPLY</span>
            </div>
            
            <h1 className="sp-title">Gypsum Boards & Ceiling Materials Supplier in Lucknow</h1>
            <p className="sp-desc">
              Wholesale distributor and bulk supplier of genuine Gyproc, India Gypsum, and USG Knauf plasterboards, GI metal channels, and drywall accessories with ready stock in Lucknow.
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
                <Award size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">20+</span>
                <span className="sp-stat-label">Years in Trade</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <ShieldCheck size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">3</span>
                <span className="sp-stat-label">Authorized Brands</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Truck size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">Ready</span>
                <span className="sp-stat-label">Bulk Stock & Dispatch</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

{/* 3. What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Premium Supply</span>
            <h2>Gypsum Materials</h2>
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
            <p>Qarat is a trusted material supplier in Lucknow, specializing in high-quality gypsum boards, metal framing systems, and interior materials. We cater to interior contractors, builders, and direct clients with wholesale pricing, ready stock, and fast delivery to ensure your projects run smoothly.</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={36} strokeWidth={1.5} />
                <span>Genuine Brands</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={36} strokeWidth={1.5} />
                <span>Wholesale Pricing</span>
              </div>
              <div className="sp-feature-item">
                <Users size={36} strokeWidth={1.5} />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp" alt="India Gypsum Warehouse Stock Lucknow" className="sp-main-img" />
            <img src="/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp" alt="Saint-Gobain Gyproc 12.5mm Plasterboard Stack" className="sp-circle-img" />
          </div>

        </div>
      </section>

      
      <ProjectGallery category="gypsum" />

      {/* 5. Customer Reviews */}
      <section className="sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-section-eyebrow">CLIENT REVIEWS</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Verified feedback from contractors, builders, and homeowners sourcing gypsum boards and ceiling materials from Qarat in Lucknow.</p>
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

export default Gypsum;
