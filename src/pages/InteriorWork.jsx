import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorPages.css';
import FinalCTA from '../components/FinalCTA';

const InteriorWork = () => {
  return (
    <div className="interior-work-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Interior Work</p>
          <h1 className="page-title">Complete Interior Solutions</h1>
          <p className="page-desc">
            From custom false ceilings to premium wall treatments and modular kitchens, Qarat provides expert installation and flawless finishing.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="page-section">
        <div className="page-container">
          <div className="category-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            
            <Link to="/interior-work/ceiling-work" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Ceiling & Partition Work" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Ceiling &amp; Partition Work</h3>
                <ul className="cat-list">
                  <li>Gypsum False Ceiling Contractor</li>
                  <li>Gypsum Partition Wall Contractor</li>
                  <li>POP Murga Jali Ceiling Contractor</li>
                  <li>Gypsum 2x2 Grid Ceiling Contractor</li>
                  <li>PVC Panel Ceiling Contractor</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/interior-work/wall-decorative-work" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="Wall & Decorative Work" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Wall &amp; Decorative Work</h3>
                <ul className="cat-list">
                  <li>WPC Wall Panel Contractor</li>
                  <li>PVC Panel Wall Contractor</li>
                  <li>UV Marble Sheet Contractor</li>
                  <li>Fluted &amp; Charcoal Panel Contractor</li>
                  <li>Wallpaper Contractor</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/interior-work/modular-kitchen-furniture" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp" alt="Modular Kitchen & Furniture" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Modular Kitchen &amp; Furniture</h3>
                <ul className="cat-list">
                  <li>Modular Kitchen Contractor</li>
                  <li>Modular Wardrobe Contractor</li>
                  <li>TV Units &amp; Media Consoles</li>
                  <li>Custom Furniture &amp; Shop Displays</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/interior-work/commercial-turnkey-interiors" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/commercial/qarat-corporate-office-interior-01.webp" alt="Commercial & Turnkey Interiors" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Commercial &amp; Turnkey</h3>
                <ul className="cat-list">
                  <li>Office &amp; Corporate Interiors</li>
                  <li>Shop &amp; Retail Showroom Interiors</li>
                  <li>Home &amp; Flat Turnkey Execution</li>
                  <li>Commercial &amp; Institutional Fit-outs</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
};

export default InteriorWork;
