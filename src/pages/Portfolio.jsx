import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

const ALL_PROJECTS = [
  { id: 1, image: '/assets/project1.jpg', title: 'NovaPay — Fintech Platform', description: 'Digital banking platform serving 500K+ users with real-time payments and AI-driven insights.', tags: ['UI/UX', 'Development'], client: 'NovaPay Inc.', category: 'Development' },
  { id: 2, image: '/assets/project2.jpg', title: 'Luminos — SaaS Dashboard', description: 'Enterprise analytics dashboard processing 2M daily events with custom data visualizations.', tags: ['Design', 'React'], client: 'Luminos Corp.', category: 'Design' },
  { id: 3, image: '/assets/project3.jpg', title: 'Orion — E-commerce Rebrand', description: 'Complete brand overhaul and e-commerce platform for a luxury fashion house.', tags: ['Branding', 'Shopify'], client: 'Orion Fashion', category: 'Branding' },
  { id: 4, image: '/assets/project1.jpg', title: 'Apex — Mobile Banking App', description: 'Cross-platform mobile banking app with biometric authentication and real-time analytics.', tags: ['Mobile', 'UI/UX'], client: 'Apex Financial', category: 'Mobile' },
  { id: 5, image: '/assets/project2.jpg', title: 'Vega — Healthcare Portal', description: 'Patient-facing health management platform with appointment scheduling and telemedicine.', tags: ['UX', 'Development'], client: 'Vega Health', category: 'Development' },
  { id: 6, image: '/assets/project3.jpg', title: 'Solaris — EdTech Platform', description: 'Interactive learning platform with AI-powered personalization serving 80K students.', tags: ['Design', 'Development'], client: 'Solaris Learn', category: 'Design' },
  { id: 7, image: '/assets/project1.jpg', title: 'Meridian — Brand System', description: 'Complete visual identity and brand system for a B2B SaaS company expanding globally.', tags: ['Branding', 'Strategy'], client: 'Meridian Labs', category: 'Branding' },
  { id: 8, image: '/assets/project2.jpg', title: 'Flux — Motion Reel', description: 'Brand motion system including animated logo, UI transitions, and social media templates.', tags: ['Motion', 'Brand'], client: 'Flux Studios', category: 'Motion' },
  { id: 9, image: '/assets/project3.jpg', title: 'Zenith — Admin Console', description: 'Complex enterprise admin console managing 200+ data sources with real-time monitoring.', tags: ['UI/UX', 'React'], client: 'Zenith Cloud', category: 'Development' },
];

const CATEGORIES = ['All', 'Design', 'Development', 'Branding', 'Mobile', 'Motion'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Hero */}
        <section style={{ padding: '100px 0 72px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Our Portfolio</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Work That <span className="gradient-text">Speaks for Itself</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              240+ projects delivered across industries. Every one of them built with obsessive care.
            </motion.p>
          </div>
        </section>

        {/* Filter */}
        <section className="section">
          <div className="container">
            <motion.div
              style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: '9px 22px', borderRadius: 100, fontSize: 14, fontWeight: 600,
                    transition: 'all 0.25s ease', cursor: 'pointer',
                    background: active === cat ? 'linear-gradient(135deg, var(--accent-cyan), var(--accent-teal))' : 'var(--bg-card)',
                    color: active === cat ? '#050b18' : 'var(--text-secondary)',
                    border: active === cat ? 'none' : '1px solid var(--border-subtle)',
                    boxShadow: active === cat ? '0 4px 16px rgba(0,229,255,0.25)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="three-col"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 0 100px' }}>
          <div className="container">
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(255,107,53,0.04))',
                border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)',
                padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Your Project Could Be <span className="gradient-text">Next</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
                Let's discuss your vision and create something that stands out.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn-primary">Start a Project →</a>
                <a href="/case-study" className="btn-outline">Read Case Studies</a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
