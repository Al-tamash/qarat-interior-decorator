import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectsShowcase.css';

const ProjectsShowcase = () => {
  return (
    <section className="projects-showcase">
      <h2 className="ps-title">Projects Showcase</h2>

      <div className="ps-container">
        <Link to="/projects" className="ps-card ps-top">
          <img src="/images/qarat/commercial/qarat-corporate-office-interior-06.webp" alt="Corporate Headquarters Reception" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/qarat/residential/qarat-residential-turnkey-bedroom-04.webp" alt="Contemporary Master Bedroom" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp" alt="UV Marble Sheet Media Wall" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp" alt="Island Modular Kitchen" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp" alt="Stepped Cove Ceiling" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp" alt="WPC Fluted Louvers" className="ps-img" />
        </Link>
      </div>

      <Link to="/projects" className="ps-btn">
        View All Projects <ArrowRight size={18} />
      </Link>
    </section>
  );
};

export default ProjectsShowcase;
