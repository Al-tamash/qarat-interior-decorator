import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './MaterialSupplyHome.css';

const MaterialSupplyHome = () => {
  return (
    <section className="material-home-section">
      <div className="material-home-container">
        
        {/* Left Side: Content */}
        <div className="mhs-left-col">
          <div className="mhs-eyebrow-container">
            <span className="mhs-eyebrow-icon">❖</span>
            <span className="mhs-eyebrow">Material Supply</span>
          </div>
          
          <h2 className="mhs-title">Materials for Your Interior Project</h2>
          <p className="mhs-desc">
            Explore interior materials available through Qarat for ceiling, wall and decorative applications.
          </p>
          
          <div className="mhs-actions">
            <Link to="/material-supply" className="mhs-btn-primary">
              Explore Materials <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Side: 4 Cards */}
        <div className="mhs-right-col">
          
          {/* Card 1 */}
          <Link to="/material-supply/gypsum-boards-ceiling-materials" className="mhs-card">
            <img src="/images/india-gypsum-stack.png" alt="Gypsum Boards & Plaster" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Gypsum Boards &amp; Plaster</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/material-supply/framing-hardware" className="mhs-card">
            <img src="/images/metal-channels.jpg" alt="Ceiling Framing & Hardware" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Ceiling Framing &amp; Hardware</h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/material-supply/panels" className="mhs-card">
            <img src="/images/new-upload-1.jpg" alt="PVC and WPC Panels" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Panels (PVC &amp; WPC)</h3>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/material-supply/decorative-materials" className="mhs-card">
            <img src="/images/marble-wall-1.jpg" alt="Decorative Surfaces & Sheets" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Decorative Surfaces &amp; Sheets</h3>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default MaterialSupplyHome;
