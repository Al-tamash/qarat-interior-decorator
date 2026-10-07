import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded Pages for code-splitting
const Home = lazy(() => import('./pages/Home'));
const InteriorWork = lazy(() => import('./pages/InteriorWork'));
const CeilingWork = lazy(() => import('./pages/CeilingWork'));
const WallWork = lazy(() => import('./pages/WallWork'));
const KitchenWork = lazy(() => import('./pages/KitchenWork'));
const CommercialTurnkey = lazy(() => import('./pages/CommercialTurnkey'));

const MaterialSupply = lazy(() => import('./pages/MaterialSupply'));
const Gypsum = lazy(() => import('./pages/Gypsum'));
const FramingHardware = lazy(() => import('./pages/FramingHardware'));
const Panels = lazy(() => import('./pages/Panels'));
const Decorative = lazy(() => import('./pages/Decorative'));

const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const GetQuote = lazy(() => import('./pages/GetQuote'));

const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div
      style={{
        width: '36px',
        height: '36px',
        border: '3px solid rgba(183, 154, 107, 0.2)',
        borderTopColor: 'var(--accent-primary, #B79A6B)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const Layout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <main style={{ flex: 1 }}>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
    <WhatsAppWidget />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="interior-work">
            <Route index element={<InteriorWork />} />
            <Route path="ceiling-work" element={<CeilingWork />} />
            <Route path="wall-decorative-work" element={<WallWork />} />
            <Route path="modular-kitchen-furniture" element={<KitchenWork />} />
            <Route path="commercial-turnkey-interiors" element={<CommercialTurnkey />} />
          </Route>

          <Route path="material-supply">
            <Route index element={<MaterialSupply />} />
            <Route path="gypsum-boards-ceiling-materials" element={<Gypsum />} />
            <Route path="framing-hardware" element={<FramingHardware />} />
            <Route path="panels" element={<Panels />} />
            <Route path="decorative-materials" element={<Decorative />} />
          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="get-quote" element={<GetQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
