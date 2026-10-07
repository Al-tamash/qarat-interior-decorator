import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorWorkHome.css';

const InteriorWorkHome = () => {
  return (
    <section className="interior-bento-section">
      <div className="ib-container">
        
        <div className="ib-header-row">
          <div className="ib-header-left">
            <span className="ib-eyebrow">Our Interior Work</span>
            <h2 className="ib-title">Interior Solutions Designed Around Your Space</h2>
          </div>
          <div className="ib-header-right">
            <p className="ib-desc">
              From ceilings and decorative walls to modular kitchen and furniture solutions, Qarat provides practical interior work for residential, office and commercial spaces in Lucknow.
            </p>
            <Link to="/interior-work" className="ib-link-btn">
              Explore All Interior Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="ib-cards-wrapper">
          <Link to="/interior-work/ceiling-work" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Ceiling & Partition Work" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Ceiling &amp; Partition</h3>
              <p className="ib-card-desc">Gypsum false ceilings, drywall partition walls, POP Murga Jali, and 2x2 grid ceilings.</p>
            </div>
          </Link>

          <Link to="/interior-work/wall-decorative-work" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp" alt="Wall & Decorative Work" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Wall &amp; Decorative</h3>
              <p className="ib-card-desc">WPC louvers, PVC wall panels, high-gloss UV marble sheets, and 3D fluted panels.</p>
            </div>
          </Link>

          <Link to="/interior-work/modular-kitchen-furniture" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp" alt="Modular Kitchen & Furniture" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Modular Kitchens</h3>
              <p className="ib-card-desc">Custom modular kitchens in Marine ply, sliding wardrobes, and TV media consoles.</p>
            </div>
          </Link>

          <Link to="/interior-work/commercial-turnkey-interiors" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/qarat/commercial/qarat-corporate-office-interior-01.webp" alt="Commercial & Turnkey" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Commercial &amp; Turnkey</h3>
              <p className="ib-card-desc">Turnkey corporate office fit-outs, retail showroom interiors, and complete residential execution.</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InteriorWorkHome;
