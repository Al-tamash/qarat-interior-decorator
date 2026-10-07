import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectGallery.css';

const ProjectGallery = ({ category = "all" }) => {
    const allImages = [
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-06.webp", alt: "Grand Multi-Tier Stepped Cove False Ceiling", tags: ["ceiling", "gypsum"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-05.webp", alt: "Luxury Designer Tray False Ceiling with Chandelier", tags: ["ceiling", "gypsum"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-07.webp", alt: "Grand Designer Tray False Ceiling in Luxury Hall", tags: ["ceiling"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-02.webp", alt: "Modern Living Room Cove Perimeter False Ceiling", tags: ["ceiling", "gypsum"] },
    { src: "/images/qarat/ceiling/qarat-pop-murga-jali-ceiling-01.webp", alt: "POP Murga Jali Ornamental Ceiling with Floral Carvings", tags: ["ceiling"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-04.webp", alt: "Stepped Square Cove LED Gypsum False Ceiling Detail", tags: ["ceiling"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-false-ceiling-01.webp", alt: "Minimalist Recessed Cove False Ceiling", tags: ["ceiling"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-02.webp", alt: "Corporate 2x2 Modular Grid Ceiling with Integrated LED Panels", tags: ["ceiling", "framing", "gypsum"] },
    { src: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp", alt: "Commercial Office T-Grid Acoustic Drop Ceiling", tags: ["ceiling", "framing"] },
    { src: "/images/qarat/ceiling/qarat-pvc-panel-ceiling-01.webp", alt: "Waterproof Designer PVC Panel Tongue & Groove False Ceiling", tags: ["ceiling", "panels"] },
    { src: "/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp", alt: "India Gypsum Board Warehouse Stock", tags: ["gypsum"] },
    { src: "/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp", alt: "Saint-Gobain Gyproc 12.5mm Plasterboard Stock", tags: ["gypsum"] },
    { src: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-03.webp", alt: "USG Knauf Standard 12.5mm Gypsum Plasterboards", tags: ["gypsum"] },
    { src: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-04.webp", alt: "Suspended Ceiling GI Grid Framing Structure On-Site", tags: ["framing", "gypsum"] },
    { src: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-02.webp", alt: "Ceiling Grid Suspension Installation on Site", tags: ["framing", "gypsum"] },
    { src: "/images/qarat/materials/qarat-gyproc-saint-gobain-material-01.webp", alt: "Saint-Gobain Gyproc Gypframe Metal Channel Profile", tags: ["framing"] },
    { src: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-02.webp", alt: "USG Knauf ST50 Metal Profiles & Studs", tags: ["framing"] },
    { src: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-01.webp", alt: "Knauf Uni T-Grid 15mm Modular Ceiling Suspension", tags: ["framing"] },
    { src: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-01.webp", alt: "Suspended Ceiling GI Grid Framing Structure", tags: ["framing"] },
    { src: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-03.webp", alt: "Heavy Gauge Galvanized GI Channels Warehouse Stock", tags: ["framing"] },

    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-01.webp", alt: "Luxury Modern Island Kitchen with Marble Counter", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-02.webp", alt: "Contemporary L-Shape Modular Kitchen", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-03.webp", alt: "Acrylic Finish Modular Kitchen Cabinets", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-04.webp", alt: "Parallel Modular Kitchen with Built-in Appliances", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-05.webp", alt: "Modern Modular Kitchen with Soft-Close Tandem Drawers", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-06.webp", alt: "Custom Overhead Storage Cabinets & Pantry Units", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-07.webp", alt: "Sleek Modular Kitchen Layout with Tile Backsplash", tags: ["kitchen"] },
    { src: "/images/qarat/kitchen/qarat-modular-kitchen-cabinetry-08.webp", alt: "High-Gloss Finish Modular Kitchen Countertop", tags: ["kitchen"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-01.webp", alt: "Corporate Office Statuario Marble Reception", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-06.webp", alt: "Large Scale Corporate Office with Glass Cabins", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-04.webp", alt: "Executive Director Cabin with Brass Shelving", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-07.webp", alt: "Managing Director Cabin with Fluted Desk", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-02.webp", alt: "Open-Plan Corporate Workstations & Desks", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-03.webp", alt: "Modern Corporate Lobby with Acoustic Slats", tags: ["commercial"] },
    { src: "/images/qarat/commercial/qarat-corporate-office-interior-05.webp", alt: "Private Executive Study & Office Desk", tags: ["commercial"] },
    { src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-01.webp", alt: "Luxury Master Bedroom Turnkey Setup", tags: ["residential", "commercial"] },
    { src: "/images/qarat/residential/qarat-residential-turnkey-bedroom-02.webp", alt: "Floor to Ceiling Modular Acrylic Wardrobe", tags: ["residential", "commercial"] },

    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-03.webp", alt: "Living Room WPC Fluted Louver Feature Wall", tags: ["panels", "wall"] },
    { src: "/images/qarat/pvc-panels/qarat-pvc-panel-ceiling-wall-01.webp", alt: "Designer Fluted Louvers & UV Marble Accent Room", tags: ["panels", "wall"] },
    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-05.webp", alt: "Charcoal Fluted Louvers TV Feature Wall with Profile LEDs", tags: ["panels", "wall"] },
    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-01.webp", alt: "3D Vertical Ribbed Accent Wall with Linear LEDs", tags: ["panels", "wall"] },
    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-07.webp", alt: "Warm Wooden Fluted Louvers Living Room Accent Wall", tags: ["panels", "wall"] },
    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-04.webp", alt: "Fluted Panel Accent Wall with Backlit Mirror", tags: ["panels", "wall"] },
    { src: "/images/qarat/wall-panels/qarat-wpc-fluted-wall-panel-02.webp", alt: "Charcoal WPC Fluted Louvers with Wall-Mounted TV", tags: ["panels", "wall"] },
    { src: "/images/qarat/pvc-panels/qarat-pvc-panel-wall-01.webp", alt: "Waterproof Dual-Tone PVC Wall Panel Cladding", tags: ["panels", "wall"] },
    { src: "/images/qarat/pvc-panels/qarat-pvc-panel-ceiling-wall-03.webp", alt: "Waterproof Designer PVC Tongue & Groove False Ceiling", tags: ["panels"] },
    { src: "/images/qarat/pvc-panels/qarat-pvc-panel-ceiling-wall-05.webp", alt: "Architectural Fluted Wall Paneling & Backlit Marble Feature", tags: ["panels", "wall"] },
    { src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-01.webp", alt: "Statuario UV Marble Feature Wall with Backlit Shelves", tags: ["wall", "decorative"] },
    { src: "/images/qarat/uv-marble/qarat-uv-marble-sheet-tv-wall-02.webp", alt: "Calacatta Gold UV Marble TV Console Wall", tags: ["wall", "decorative"] },
    { src: "/images/qarat/wallpapers/qarat-designer-wallpaper-interior-06.webp", alt: "Luxury Living Room Botanical Gold Wallpaper Mural", tags: ["wall", "decorative"] },
    { src: "/images/qarat/wallpapers/qarat-designer-wallpaper-interior-08.webp", alt: "Luxury Black & Gold Damask Accent Feature Wall", tags: ["wall", "decorative"] },
    { src: "/images/qarat/wallpapers/qarat-designer-wallpaper-interior-05.webp", alt: "3D Textured Wall Blocks Mural with Lighting", tags: ["wall", "decorative"] }
  ];

  const images = category === "all" ? allImages : allImages.filter(img => img.tags.includes(category));

  return (
    <section className="sp-section sp-gallery-section">
      <div className="sp-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="sp-section-header sp-center" style={{ marginBottom: '3rem' }}>
          <div className="sp-eyebrow-pill">OUR PORTFOLIO</div>
          <h2>Project Gallery</h2>
          <p className="sp-header-desc">A glimpse into our latest installations and premium material applications.</p>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper horizontal-gallery"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="gallery-slide">
              <div className="slide-content">
                <img src={img.src} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectGallery;
