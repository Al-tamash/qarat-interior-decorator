import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import './InteriorPages.css';
import './Projects.css';

const projectData = [
  // 1. Ceiling Work (6 projects)
  {
    id: 1,
    image: '/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Stepped Square Cove False Ceiling',
    desc: 'Dual-step cove ceiling with warm indirect LED strip lighting and recessed spotlights in living hall.'
  },
  {
    id: 2,
    image: '/images/qarat/ceiling/qarat-gypsum-false-ceiling-06.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Multi-Tier Living Room Tray Ceiling',
    desc: 'Architectural stepped tray gypsum ceiling designed for central chandelier placement and ambient glow.'
  },
  {
    id: 3,
    image: '/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Ornamental POP Murga Jali Ceiling',
    desc: 'Traditional wire-mesh reinforced Plaster of Paris ceiling with intricate custom floral moldings.'
  },
  {
    id: 4,
    image: '/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Perimeter Cove Gypsum Ceiling',
    desc: 'Clean perimeter false ceiling with concealed curtain pelmet and dimmable architectural track lights.'
  },
  {
    id: 5,
    image: '/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-02.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Corporate 2x2 Modular Grid Ceiling',
    desc: 'Commercial acoustic drop ceiling with galvanized T-grid suspension and integrated square LED panels.'
  },
  {
    id: 6,
    image: '/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Waterproof Tongue & Groove PVC Ceiling',
    desc: 'Durable moisture-proof PVC ceiling panels with contrasting dark borders for balconies and utility areas.'
  },

  // 2. Wall & Decorative Work (6 projects)
  {
    id: 7,
    image: '/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Teak Finish WPC Fluted Louver Wall',
    desc: 'Vertical woodgrain composite louvers with acoustic sound-dampening backing for drawing room accents.'
  },
  {
    id: 8,
    image: '/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Statuario White & Gold UV Marble Wall',
    desc: 'High-gloss UV marble sheet entertainment feature wall flanked by backlit open display shelving.'
  },
  {
    id: 9,
    image: '/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Calacatta Black-Gold UV Marble TV Console',
    desc: 'High-impact marble sheet backdrop with gold T-profile inlays and floating wooden media cabinetry.'
  },
  {
    id: 10,
    image: '/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-05.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Charcoal Fluted Panels with Profile LEDs',
    desc: 'Modern matte charcoal WPC wall paneling featuring embedded vertical linear LED strip profiles.'
  },
  {
    id: 11,
    image: '/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Dual-Tone 3D PVC Wall Paneling',
    desc: 'Zero-maintenance waterproof PVC wall cladding with geometric accents for living spaces.'
  },
  {
    id: 12,
    image: '/images/qarat/wallpapers/qarat-designer-wallpaper-interior-06.webp',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Botanical Gold Luxury Wallpaper Mural',
    desc: 'Textured designer wall mural installed with seamless jointing for master bedroom feature walls.'
  },

  // 3. Modular Kitchen & Furniture (6 projects)
  {
    id: 13,
    image: '/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Luxury Island Modular Kitchen',
    desc: 'Custom island kitchen crafted with BWP Marine plywood, quartz countertop, and fluted island base.'
  },
  {
    id: 14,
    image: '/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Contemporary L-Shaped Modular Kitchen',
    desc: 'Ergonomic dual-tone kitchen with anti-scratch acrylic shutters, hydraulic lift-ups, and pull-out pantry.'
  },
  {
    id: 15,
    image: '/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-05.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'U-Shaped Modular Kitchen with Pantry',
    desc: 'Complete U-layout kitchen with soft-close tandem drawer systems and integrated chimney hood.'
  },
  {
    id: 16,
    image: '/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-03.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Parallel High-Gloss Modular Kitchen',
    desc: 'Twin-counter efficient workflow kitchen with seamless acrylic finishes and under-cabinet strip lighting.'
  },
  {
    id: 17,
    image: '/images/qarat/residential/qarat-residential-turnkey-bedroom-02.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Floor-to-Ceiling Sliding Wardrobe',
    desc: 'Custom built-in sliding wardrobe in warm champagne acrylic finish with integrated loft storage.'
  },
  {
    id: 18,
    image: '/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-06.webp',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Modular Tall Storage & Overhead Pantry',
    desc: 'Heavy-duty Marine ply tall storage units with Blum soft-close hinges and customized cutlery organizers.'
  },

  // 4. Commercial & Turnkey (6 projects)
  {
    id: 19,
    image: '/images/qarat/commercial/qarat-corporate-office-interior-06.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Corporate Headquarters Reception Desk',
    desc: 'Grand reception lobby in Vibhuti Khand, Lucknow with Statuario marble reception desk and cove lighting.'
  },
  {
    id: 20,
    image: '/images/qarat/commercial/qarat-corporate-office-interior-02.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Open-Plan Modular Workstations',
    desc: '40-seater ergonomic office layout with acoustic partition dividers and cable raceways.'
  },
  {
    id: 21,
    image: '/images/qarat/commercial/qarat-corporate-office-interior-04.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Executive Director Cabin & Library',
    desc: 'Executive workspace with custom brass display shelving, fluted backdrop, and executive conference desk.'
  },
  {
    id: 22,
    image: '/images/qarat/commercial/qarat-corporate-office-interior-07.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Managing Director MD Cabin',
    desc: 'Contemporary private cabin with fluted louver desk, acoustic paneling, and designer lounge seating.'
  },
  {
    id: 23,
    image: '/images/qarat/commercial/qarat-corporate-office-interior-03.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Corporate Conference & Meeting Suite',
    desc: 'Sound-dampened meeting room equipped with acoustic wall slats and motorized projection bay.'
  },
  {
    id: 24,
    image: '/images/qarat/residential/qarat-residential-turnkey-bedroom-01.webp',
    category: 'Commercial & Turnkey',
    subcategories: ['All', 'Commercial & Turnkey'],
    title: 'Turnkey Luxury Villa Master Suite',
    desc: 'End-to-end turnkey residential execution including false ceiling, bedhead panelling, wardrobe, and lighting.'
  }
];

const categories = [
  'All', 
  'Ceiling Work', 
  'Wall & Decorative Work', 
  'Modular Kitchen & Furniture',
  'Commercial & Turnkey'
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on the active category
  const filteredProjects = projectData.filter(project => 
    project.subcategories.includes(activeFilter)
  );

  return (
    <div className="projects-page">
      
      {/* SECTION 1 — PROJECTS HERO */}
      <section className="page-hero projects-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Our Projects</p>
          <h1 className="page-title">Spaces That Reflect the Work</h1>
          <p className="page-desc">
            Explore interior work and material applications by Qarat Interior Decorator across residential, office and commercial spaces in Lucknow.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROJECT INTRODUCTION */}
      <section className="projects-intro">
        <span className="projects-intro-eyebrow">Our Work</span>
        <h2 className="projects-intro-title">Interior Work Across Different Spaces</h2>
        <p className="projects-intro-desc">
          From ceiling and wall solutions to modular kitchen, furniture and commercial turnkey applications, explore the type of interior work executed by Qarat.
        </p>
      </section>

      {/* SECTION 3 — PROJECT CATEGORY FILTER */}
      <section className="projects-filters">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* BENTO GRID PROJECTS */}
      {filteredProjects.length > 0 && (
        <section className="bento-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="bento-card">
              <div className="bento-card-img-wrap">
                <img src={project.image} alt={project.title} className="bento-card-img" />
              </div>
              <div className="bento-card-content">
                <span className="bento-category">{project.category}</span>
                <h3 className="bento-title">{project.title}</h3>
                <p className="bento-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* SECTION 5 — CALL TO ACTION */}
      <FinalCTA />

    </div>
  );
};

export default Projects;
