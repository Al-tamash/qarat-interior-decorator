import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Hammer, 
  Ruler, 
  FileCheck, 
  Award, 
  Check, 
  Truck
} from 'lucide-react';
import LocationHome from '../components/LocationHome';
import './InteriorPages.css';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Established 2005 &bull; Lucknow, Uttar Pradesh</p>
          <h1 className="page-title">About Qarat Interior Decorator</h1>
          <p className="page-desc">
            Over 20 years of dedicated turnkey interior contracting and authorized wholesale material distribution across Lucknow and Central Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* 2. Main About Content Container */}
      <section className="about-section">
        <div className="about-container">
          
          {/* Key Impact Numbers (Stats Bar) */}
          <div className="about-stats-bar">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Experience (Est. 2005)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Turnkey Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25–30</div>
              <div className="stat-label">Skilled In-House Craftsmen</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Dedicated Site Supervisors</div>
            </div>
          </div>

          {/* 3. Who We Are & The Dual-Strength Advantage */}
          <div className="about-intro">
            <div className="about-image-wrapper">
              <div className="about-image-card">
                <img 
                  src="/images/ceiling-hero-new.png" 
                  alt="Precision interior craftsmanship by Qarat Interior Decorator" 
                  className="about-main-img" 
                />
                <div className="about-image-badge">
                  <Award size={20} className="badge-icon" />
                  <div>
                    <span className="badge-title">20+ Years Legacy</span>
                    <span className="badge-sub">Ali Nawab Market, Dubagga</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-text-content">
              <span className="about-eyebrow">Who We Are</span>
              <h2 className="about-title">Craftsmanship Backed by Direct Wholesale Material Supply</h2>
              <p className="about-desc">
                Founded in 2005 in Dubagga, Lucknow, Qarat Interior Decorator was built on a practical observation: true quality in interior work requires complete control over both the artisans on site and the raw materials used.
              </p>
              <p className="about-desc">
                Most contracting firms rely on external retail shops with markups, or hire casual daily-wage labor. Qarat operates with a distinct <strong>Dual-Strength Model</strong>: we are an authorized wholesale distributor of India's leading building brands, combined with a permanent in-house workforce of master craftsmen.
              </p>
              
              <div className="about-dual-highlights">
                <div className="dual-point">
                  <div className="dual-point-icon">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="dual-point-title">Authorized Wholesale Supply</h4>
                    <p className="dual-point-desc">Direct factory-level pricing on genuine Gyproc, India Gypsum, and Knauf materials with zero middleman markups.</p>
                  </div>
                </div>
                <div className="dual-point">
                  <div className="dual-point-icon">
                    <Hammer size={20} />
                  </div>
                  <div>
                    <h4 className="dual-point-title">Turnkey Site Contracting</h4>
                    <p className="dual-point-desc">Full execution by permanent in-house gypsum installers, carpenters, and supervisors with laser-level precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Execution Standards / How We Work */}
          <div className="standards-section">
            <div className="section-header-center">
              <span className="about-eyebrow">Our Work Standards</span>
              <h2 className="about-title">How We Guarantee Quality on Every Site</h2>
              <p className="about-desc section-subtitle">
                We believe in structured execution, transparent estimates, and strict technical supervision. Every site follows these four benchmarks.
              </p>
            </div>

            <div className="standards-grid">
              <div className="standard-card">
                <div className="standard-icon-box">
                  <Users size={26} />
                </div>
                <h3 className="standard-card-title">Zero Sub-Contracting</h3>
                <p className="standard-card-desc">
                  We never outsource your project to third-party thekedars. Your site is handled exclusively by our permanent in-house team of 25 to 30 skilled craftsmen.
                </p>
                <div className="standard-tag">Direct Accountability</div>
              </div>

              <div className="standard-card">
                <div className="standard-icon-box">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="standard-card-title">100% Genuine Materials</h3>
                <p className="standard-card-desc">
                  As authorized distributors, every gypsum board, heavy 0.50mm GI channel, and acoustic tile comes directly from verified manufacturing partners.
                </p>
                <div className="standard-tag">Lab-Tested Quality</div>
              </div>

              <div className="standard-card">
                <div className="standard-icon-box">
                  <Ruler size={26} />
                </div>
                <h3 className="standard-card-title">Laser-Level Precision</h3>
                <p className="standard-card-desc">
                  4 dedicated site supervisors inspect alignment with precision laser equipment, ensuring straight grid lines, level ceilings, and flawless joint finishes.
                </p>
                <div className="standard-tag">Millimeter Accuracy</div>
              </div>

              <div className="standard-card">
                <div className="standard-icon-box">
                  <FileCheck size={26} />
                </div>
                <h3 className="standard-card-title">Itemized BOQ &amp; Timelines</h3>
                <p className="standard-card-desc">
                  Clear, transparent billing from day one. You get an itemized bill of quantities with defined stages, so there are no unexpected costs or endless delays.
                </p>
                <div className="standard-tag">On-Time Handover</div>
              </div>
            </div>
          </div>

          {/* 5. Authorized Brand Partnerships / Material Distribution */}
          <div className="brands-supply-section">
            <div className="section-header-center">
              <span className="about-eyebrow">Authorized Distribution</span>
              <h2 className="about-title">Direct Procurement from Industry Leaders</h2>
              <p className="about-desc section-subtitle">
                Commercial contractors, architects, and property owners across Lucknow rely on our wholesale warehouse for genuine interior materials.
              </p>
            </div>

            <div className="brand-partners-grid">
              <div className="brand-box">
                <div className="brand-badge">Authorized Dealer</div>
                <h3 className="brand-name">India Gypsum</h3>
                <p className="brand-desc">Direct wholesale supply of regular, moisture-resistant, and fire-resistant plasterboards.</p>
                <ul className="brand-features">
                  <li><Check size={16} className="check-icon" /> Certified 12.5mm boards</li>
                  <li><Check size={16} className="check-icon" /> Bulk warehouse inventory</li>
                </ul>
              </div>

              <div className="brand-box">
                <div className="brand-badge">Supply Partner</div>
                <h3 className="brand-name">Saint-Gobain Gyproc</h3>
                <p className="brand-desc">High-grade designer false ceiling boards, jointing compounds, and acoustic ceiling tiles.</p>
                <ul className="brand-features">
                  <li><Check size={16} className="check-icon" /> High-density acoustic core</li>
                  <li><Check size={16} className="check-icon" /> Factory-sealed authentic stock</li>
                </ul>
              </div>

              <div className="brand-box">
                <div className="brand-badge">Authorized Channel</div>
                <h3 className="brand-name">USG Knauf</h3>
                <p className="brand-desc">Commercial drywall systems, heavy-duty suspension grids, and ceiling accessories.</p>
                <ul className="brand-features">
                  <li><Check size={16} className="check-icon" /> Commercial framing hardware</li>
                  <li><Check size={16} className="check-icon" /> Rigid anti-sag suspension</li>
                </ul>
              </div>

              <div className="brand-box">
                <div className="brand-badge">Wholesale Distributor</div>
                <h3 className="brand-name">Modern Wall Surfaces</h3>
                <p className="brand-desc">High-gloss UV marble sheets (8x4 ft), exterior WPC louvers, and luxury designer wallpapers.</p>
                <ul className="brand-features">
                  <li><Check size={16} className="check-icon" /> 100+ patterns in stock</li>
                  <li><Check size={16} className="check-icon" /> Direct dealer pricing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. In-House Workforce Highlight */}
          <div className="workforce-banner">
            <div className="workforce-info">
              <span className="wf-eyebrow">Our Operational Strength</span>
              <h3>25–30 In-House Craftsmen &amp; 4 Dedicated Supervisors</h3>
              <p>
                Every project is supervised daily by experienced site engineers who verify grid spacing, channel gauge, and joint finishing. Having our own permanent workforce allows us to deliver consistent craftsmanship without relying on seasonal labor.
              </p>
            </div>
            <div className="workforce-tags">
              <span className="wf-tag">Zero Sub-Contracting</span>
              <span className="wf-tag">Laser-Level Checked</span>
              <span className="wf-tag">Daily Site Supervision</span>
              <span className="wf-tag">Commercial &amp; Residential</span>
            </div>
          </div>

          {/* 7. Leadership Section */}
          <div className="leadership-section">
            <div className="section-header-center">
              <span className="about-eyebrow">Company Leadership</span>
              <h2 className="about-title">Directors &amp; Executive Management</h2>
              <p className="about-desc section-subtitle">
                Over two decades of hands-on expertise across turnkey interior execution, civil contracting, and material wholesale distribution.
              </p>
            </div>

            <div className="leadership-grid">
              <div className="director-card">
                <div className="director-top-bar">
                  <div className="director-avatar">AK</div>
                  <span className="director-badge">Director</span>
                </div>
                <h3 className="director-name">Mr. Ataullah Khan</h3>
                <p className="director-role">Director &bull; Project Execution &amp; On-Site Operations</p>
                <p className="director-desc">
                  Directs turnkey project execution, craftsman deployment, and strict on-site quality compliance across residential and commercial developments in Lucknow and Central UP.
                </p>
                <div className="director-focus">
                  <span className="focus-label">Primary Focus:</span>
                  <div className="focus-pills">
                    <span>Turnkey Execution</span>
                    <span>Site Quality</span>
                    <span>Workforce Safety</span>
                  </div>
                </div>
              </div>

              <div className="director-card">
                <div className="director-top-bar">
                  <div className="director-avatar">AK</div>
                  <span className="director-badge">Director</span>
                </div>
                <h3 className="director-name">Mr. Abdul Kareem</h3>
                <p className="director-role">Director &bull; Supply Chain, Wholesale &amp; Dealer Relations</p>
                <p className="director-desc">
                  Manages brand distribution partnerships with Saint-Gobain Gyproc, India Gypsum, and USG Knauf, guaranteeing direct-from-factory pricing and bulk warehouse availability.
                </p>
                <div className="director-focus">
                  <span className="focus-label">Primary Focus:</span>
                  <div className="focus-pills">
                    <span>Brand Partnerships</span>
                    <span>Wholesale Logistics</span>
                    <span>Procurement Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Single, Clear Location & Service Area Component */}
      <LocationHome />
    </div>
  );
};

export default About;
