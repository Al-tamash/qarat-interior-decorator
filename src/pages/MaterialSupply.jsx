import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorPages.css';
import FinalCTA from '../components/FinalCTA';

const MaterialSupply = () => {
  return (
    <div className="interior-work-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Material Supply</p>
          <h1 className="page-title">Premium Interior Materials</h1>
          <p className="page-desc">
            We supply high-quality interior materials to contractors, builders, and homeowners across Lucknow.
          </p>
        </div>
      </section>

      {/* Authorized Dealership Banners */}
      <section className="page-section" style={{ paddingBottom: '20px' }}>
        <div className="page-container">
          <div className="dealer-header">
            <span className="dealer-eyebrow">Direct Brand Partnerships</span>
            <h2>Authorized Dealers &amp; Material Stockists</h2>
          </div>

          <div className="dealer-grid">
            <div className="dealer-card">
              <span className="dealer-tag">Authorized Dealer</span>
              <h3 className="dealer-card-title">India Gypsum Board</h3>
              <ul className="dealer-bullets">
                <li><span className="check">✓</span> Regular Gypsum Plasterboards</li>
                <li><span className="check">✓</span> Moisture Resistant (MR) Boards</li>
                <li><span className="check">✓</span> Fire Resistant (FR) Boards</li>
                <li><span className="check">✓</span> Complete India Gypsum Range</li>
              </ul>
            </div>

            <div className="dealer-card">
              <span className="dealer-tag">Material Supply</span>
              <h3 className="dealer-card-title">Saint-Gobain Gyproc</h3>
              <ul className="dealer-bullets">
                <li><span className="check">✓</span> Genuine Gyproc Plasterboards</li>
                <li><span className="check">✓</span> Ultra GI Channels &amp; Framing</li>
                <li><span className="check">✓</span> Elite-90 Jointing Compounds</li>
                <li><span className="check">✓</span> Screws, Fasteners &amp; Tapes</li>
              </ul>
            </div>

            <div className="dealer-card">
              <span className="dealer-tag">Material Supply</span>
              <h3 className="dealer-card-title">USG Knauf Systems</h3>
              <ul className="dealer-bullets">
                <li><span className="check">✓</span> USG Knauf Plasterboards</li>
                <li><span className="check">✓</span> Jointing Compounds &amp; Plaster</li>
                <li><span className="check">✓</span> Acoustic Drywall Partition Systems</li>
                <li><span className="check">✓</span> Complete Ceiling Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="page-section">
        <div className="page-container">
          <div className="dealer-header" style={{ marginBottom: '35px' }}>
            <span className="dealer-eyebrow">Product Catalog</span>
            <h2>Explore Materials by Category</h2>
          </div>

          <div className="category-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            
            <Link to="/material-supply/gypsum-boards-ceiling-materials" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp" alt="Gypsum Boards and Drywall Systems" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Gypsum Boards &amp; Plaster</h3>
                <ul className="cat-list">
                  <li>Saint-Gobain Gyproc Plasterboards</li>
                  <li>India Gypsum Plasterboards (Dealer)</li>
                  <li>USG Knauf Drywall &amp; Ceiling Boards</li>
                  <li>Jointing Compounds, Tapes &amp; Plasters</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/material-supply/framing-hardware" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/materials/qarat-gi-channel-ceiling-framing-04.webp" alt="False Ceiling Framing and Hardware" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Ceiling Framing &amp; Hardware</h3>
                <ul className="cat-list">
                  <li>GI Ceiling Sections &amp; Perimeter (0.50mm)</li>
                  <li>Drywall Partition C-Studs &amp; Tracks</li>
                  <li>2x2 Modular T-Grid System &amp; Tiles</li>
                  <li>Bugle Drywall Screws &amp; Murga Jali</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/material-supply/panels" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="PVC and WPC Panels" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Wall &amp; Ceiling Panels</h3>
                <ul className="cat-list">
                  <li>PVC Wall &amp; Ceiling Planks</li>
                  <li>WPC Exterior &amp; Interior Louvers</li>
                  <li>Fluted 3D Decorative Panels</li>
                  <li>Charcoal Decorative Accent Panels</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/material-supply/decorative-materials" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp" alt="UV Marble Sheets and Designer Wallpapers" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Decorative Surfaces &amp; Sheets</h3>
                <ul className="cat-list">
                  <li>UV Marble Sheets (8x4 ft High Gloss)</li>
                  <li>Italian Faux Marble Patterns</li>
                  <li>Designer Wallpaper Rolls</li>
                  <li>Imported 3D &amp; Textured Rolls</li>
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

export default MaterialSupply;
