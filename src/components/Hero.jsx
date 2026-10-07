import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section-3d">
      <div className="hero-content-center">
        <h1 className="hero-title">Crafting Spaces Beyond the Ordinary</h1>
        <p className="hero-desc">
          Explore extraordinary designs, compare material options, and uncover interior experiences that match your style. Build smarter, discover more, and make every detail count.
        </p>
        <Link to="/get-quote" className="hero-btn">
          <span className="btn-icon"></span> Get a Quote
        </Link>
      </div>

      <div className="hero-carousel-3d">
        <Link to="/interior-work/wall-decorative-work" className="hero-card card-far-left">
          <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="Decorative WPC Wall Panels" />
          <div className="card-overlay">
            <h3>Wall Panels</h3>
          </div>
        </Link>

        <Link to="/interior-work/modular-kitchen-furniture" className="hero-card card-mid-left">
          <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp" alt="Modular Kitchen" />
          <div className="card-overlay">
            <h3>Modular Kitchen</h3>
          </div>
        </Link>

        <Link to="/interior-work/ceiling-work" className="hero-card card-center">
          <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Designer False Ceiling" />
          <div className="card-overlay">
            <h3>False Ceiling</h3>
          </div>
        </Link>

        <Link to="/interior-work/wall-decorative-work" className="hero-card card-mid-right">
          <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp" alt="UV Marble TV Unit" />
          <div className="card-overlay">
            <h3>UV Marble Wall</h3>
          </div>
        </Link>

        <Link to="/interior-work/commercial-turnkey-interiors" className="hero-card card-far-right">
          <img src="/images/qarat/commercial/qarat-corporate-office-interior-01.webp" alt="Commercial Office Turnkey" />
          <div className="card-overlay">
            <h3>Commercial Turnkey</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
