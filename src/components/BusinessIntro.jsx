import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Cuboid, Sofa, Sparkles } from 'lucide-react';
import './BusinessIntro.css';

const BusinessIntro = () => {
  return (
    <section className="business-intro-section">
      <div className="bi-container">
        
        {/* Top Header Row matching the 3-column layout in the screenshot */}
        <div className="bi-header-row">
          <div className="bi-header-left">
            <span className="bi-eyebrow">ABOUT QARAT</span>
            <h2 className="bi-title">Complete Interior Solutions, From Work to Materials</h2>
          </div>
          
          <div className="bi-header-middle">
            <p className="bi-desc">
              Qarat Interior Decorator provides interior work and material supply solutions for homes, offices and commercial spaces in Lucknow. From ceiling and wall solutions to decorative materials, modular kitchen and furniture requirements, Qarat brings interior work and material options together in one place.
            </p>
          </div>
          
          <div className="bi-header-right">
            <Link to="/about" className="bi-btn">
              ABOUT US <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Cards Row matching the grid of image cards in the screenshot */}
        <div className="bi-cards-row">
          
          {/* Card 1 */}
          <Link to="/interior-work/ceiling-work" className="bi-card">
            <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Ceiling & Partition Solutions" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Hammer size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">Ceiling &amp; Partition Work</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/interior-work/wall-decorative-work" className="bi-card">
            <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="Decorative Wall Panels & Louvers" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Cuboid size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">Decorative Wall Panels</h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/interior-work/modular-kitchen-furniture" className="bi-card">
            <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp" alt="Modular Kitchen & Cabinetry" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Sofa size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">Modular Kitchens</h3>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/interior-work/wall-decorative-work" className="bi-card">
            <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp" alt="UV Marble Sheet TV Entertainment Units" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Sparkles size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">UV Marble TV Units</h3>
            </div>
          </Link>

        </div>
        
      </div>
    </section>
  );
};

export default BusinessIntro;
