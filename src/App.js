import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import CaseStudy from './pages/CaseStudy';
import LiveDemo from './pages/LiveDemo';
import { PricingPage } from './pages/CaseStudy';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

// Styles
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/dashboard.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<About />} />
        <Route path="/services"       element={<ServicesPage />} />
        <Route path="/portfolio"      element={<Portfolio />} />
        <Route path="/portfolio/:id"  element={<ProjectDetails />} />
        <Route path="/case-study"     element={<CaseStudy />} />
        <Route path="/live-demo"      element={<LiveDemo />} />
        <Route path="/pricing"        element={<PricingPage />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/admin"          element={<AdminDashboard />} />
        <Route path="*"               element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}
