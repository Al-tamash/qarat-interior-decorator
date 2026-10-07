import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Trophy, Users, PlayCircle, CheckCircle, Clock, Award, ShieldCheck } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const FramingHardware = () => {
  const services = [
    {
      id: "gi-channels",
      title: "GI Ceiling & Perimeter Channels",
      img: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-04.webp",
      desc: "Rust-proof galvanized iron ceiling sections, intermediate channels, perimeter channels, and wall angles in 0.45mm and heavy-duty 0.50mm gauge."
    },
    {
      id: "drywall-studs",
      title: "Drywall Partition Studs & Tracks",
      img: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-03.webp",
      desc: "Galvanized C-Studs, Floor & Ceiling Tracks, and Deflection Heads designed for sturdy, sound-insulated gypsum partition wall framing."
    },
    {
      id: "t-grid-system",
      title: "2x2 Modular T-Grid Suspension & Tiles",
      img: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-01.webp",
      desc: "Main runners, cross tees (4ft & 2ft), wall angles, and PVC laminated washable ceiling tiles for corporate office modular drop ceilings."
    },
    {
      id: "screws-fasteners",
      title: "Drywall Screws, Fasteners & Murga Jali",
      img: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-02.webp",
      desc: "Zinc-coated and black phosphated bugle-head drywall screws (25mm, 35mm, 50mm), expansion anchors, fasteners, and heavy-gauge wire mesh (Murga Jali)."
    }
  ];

  const reviews = [
    {
      name: "Suresh Yadav",
      location: "Chinhat, Lucknow",
      text: "We source all GI framing channels and fasteners from Qarat for our commercial site works. Always genuine gauge thickness and immediate delivery."
    },
    {
      name: "Imran Khan",
      location: "Alambagh, Lucknow",
      text: "Best wholesale rates in Lucknow for GI ceiling channels and 2x2 grid accessories. No bent sections, zero quality compromises."
    },
    {
      name: "Ramesh Chandra",
      location: "Transport Nagar, Lucknow",
      text: "Reliable stock of drywall partition studs and hardware. They supply directly to contractors with transparent bundle pricing."
    }
  ];

  const faqs = [
    {
      q: "What gauge GI channels do you supply?",
      a: "We supply standard 0.45mm and heavy-duty 0.50mm gauge galvanized iron sections, fully rust-resistant and tested for high tensile load."
    },
    {
      q: "Do you supply both retail and wholesale contractor bundles?",
      a: "Yes. Homeowners can buy exact piece counts for single rooms, while contractors and developers receive discounted bundled pallet rates."
    },
    {
      q: "Can you deliver GI channels and materials across Lucknow?",
      a: "Yes, we arrange same-day or next-day site delivery across all areas of Lucknow and surrounding districts."
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
      <section className="sp-hero" style={{ backgroundImage: `url(/images/qarat/materials/qarat-gi-channel-ceiling-framing-01.webp)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">WHOLESALE HARDWARE</span>
            </div>
            
            <h1 className="sp-title">False Ceiling Framing, Channels &amp; Hardware Supply</h1>
            <p className="sp-desc">
              Heavy-gauge GI ceiling channels, drywall partition studs, 2x2 T-grids, fasteners, and Murga Jali available in ready stock for contractors in Lucknow.
            </p>

            <div className="sp-hero-buttons">
              <Link to="/get-quote" className="sp-btn sp-btn-primary">Get Wholesale Rates <ArrowRight size={18} /></Link>
              <button onClick={() => handleScroll('services')} className="sp-btn sp-btn-play">
                <span className="play-icon-wrap"><PlayCircle size={20} /></span>
                View Framing Materials
              </button>
            </div>
            
            <div className="sp-hero-glass-stats">
              <div className="sp-stat-item">
                <ShieldCheck size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">0.50mm</span>
                <span className="sp-stat-label">Heavy Gauge</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Trophy size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">Ready</span>
                <span className="sp-stat-label">Bulk Stock</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Users size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">200+</span>
                <span className="sp-stat-label">Contractor Partners</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Structural Interior Hardware</span>
            <h2>Framing &amp; Suspension Hardware</h2>
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
                    Order / Inquire <ArrowRight size={16} />
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
              <ShieldCheck size={36} className="sp-trust-icon" />
              <h4>Genuine Gauge Thickness</h4>
              <p>Guaranteed 0.45mm &amp; 0.50mm zinc-coated galvanized iron sections.</p>
            </div>
            <div className="sp-trust-item">
              <Clock size={36} className="sp-trust-icon" />
              <h4>Same-Day Site Delivery</h4>
              <p>Fleet delivery across Lucknow sites to keep your workers on schedule.</p>
            </div>
            <div className="sp-trust-item">
              <Award size={36} className="sp-trust-icon" />
              <h4>Contractor Wholesale Pricing</h4>
              <p>Direct dealer pricing for bulk bundling and repeat developer orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery category="framing" />

      {/* Client Reviews */}
      <section className="sp-section sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header sp-center">
            <span className="sp-eyebrow-dark">Contractor Reviews</span>
            <h2>Feedback from Builders &amp; Installers</h2>
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
            <span className="sp-eyebrow-dark">Material Queries</span>
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

export default FramingHardware;
