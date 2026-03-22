import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SERVICES_DETAIL = [
  {
    icon: '◈', title: 'UI/UX Design', color: 'var(--accent-cyan)',
    tagline: 'Interfaces users love',
    desc: 'We design digital experiences grounded in user research, conversion psychology, and aesthetic precision. From wireframes to polished high-fidelity designs, every screen is intentional.',
    deliverables: ['User Research & Personas', 'Information Architecture', 'Wireframes & Prototypes', 'High-Fidelity UI Design', 'Design Systems', 'Usability Testing'],
    tools: ['Figma', 'Principle', 'Maze', 'Hotjar'],
  },
  {
    icon: '⟨/⟩', title: 'Web Development', color: '#a78bfa',
    tagline: 'Code that performs',
    desc: 'We build scalable, high-performance web applications using modern stacks. From marketing sites to complex SaaS platforms, we engineer for speed, security, and scale.',
    deliverables: ['React / Next.js Apps', 'API Design & Integration', 'CMS Implementation', 'E-commerce Platforms', 'Performance Optimization', 'DevOps & Deployment'],
    tools: ['React', 'Next.js', 'Node.js', 'Vercel'],
  },
  {
    icon: '⬡', title: 'Mobile Apps', color: '#48c78e',
    tagline: 'Native-quality experiences',
    desc: 'iOS and Android apps that feel native, perform flawlessly, and keep users coming back. We use React Native and Flutter for cross-platform excellence.',
    deliverables: ['iOS & Android Apps', 'Cross-Platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Analytics Integration'],
    tools: ['React Native', 'Flutter', 'Firebase', 'TestFlight'],
  },
  {
    icon: '◎', title: 'Brand Identity', color: 'var(--accent-orange)',
    tagline: 'Brands that resonate',
    desc: 'We build comprehensive brand identities that communicate your unique value instantly. From logo design to full brand guidelines, we create systems that scale.',
    deliverables: ['Logo Design', 'Color & Typography', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Kit', 'Brand Voice & Tone'],
    tools: ['Illustrator', 'Photoshop', 'After Effects', 'Figma'],
  },
  {
    icon: '▷', title: 'Motion Design', color: '#f472b6',
    tagline: 'Stories that move',
    desc: 'From micro-interactions to full brand films, our motion team creates animations that captivate audiences and reinforce your brand story at every touchpoint.',
    deliverables: ['UI Micro-interactions', 'Brand Animations', 'Explainer Videos', 'Social Motion Content', 'Loading Animations', 'Lottie Integration'],
    tools: ['After Effects', 'Lottie', 'Framer', 'Cinema 4D'],
  },
  {
    icon: '⊞', title: 'Digital Strategy', color: 'var(--accent-teal)',
    tagline: 'Direction with purpose',
    desc: 'Strategy that bridges business goals with digital execution. We analyze your market, define your digital roadmap, and ensure every project decision ties back to growth.',
    deliverables: ['Market Analysis', 'Digital Roadmapping', 'Conversion Optimization', 'SEO Strategy', 'Growth Frameworks', 'KPI Definition'],
    tools: ['Google Analytics', 'Hotjar', 'Semrush', 'Notion'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, users, and competitive landscape.' },
  { step: '02', title: 'Strategy', desc: 'Define scope, timeline, and success metrics. Align on the plan.' },
  { step: '03', title: 'Design', desc: 'Wireframes, concepts, and iterations until we nail the vision.' },
  { step: '04', title: 'Build', desc: 'Engineering and development with regular demos and feedback loops.' },
  { step: '05', title: 'Launch', desc: 'QA, deployment, and a smooth go-live with post-launch monitoring.' },
  { step: '06', title: 'Grow', desc: 'Ongoing optimization based on real user data and performance metrics.' },
];

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Hero */}
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Services</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Everything You Need to <span className="gradient-text">Succeed Online</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              End-to-end digital solutions under one roof. No handoffs, no gaps — just cohesive execution from strategy to launch.
            </motion.p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {SERVICES_DETAIL.map((s, i) => (
                <motion.div
                  key={s.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                    gap: 64, alignItems: 'center',
                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 'var(--radius-md)',
                      background: `${s.color}15`, border: `1px solid ${s.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 26, marginBottom: 20,
                    }}>{s.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: s.color, marginBottom: 8 }}>
                      {s.tagline}
                    </div>
                    <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>{s.title}</h2>
                    <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                      {s.tools.map(t => (
                        <span key={t} style={{
                          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                          borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600,
                          color: 'var(--text-secondary)',
                        }}>{t}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                      Start This Service →
                    </Link>
                  </div>
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{
                      background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xl)', padding: 32,
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
                        Deliverables
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {s.deliverables.map(d => (
                          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--text-secondary)' }}>
                            <span style={{ color: s.color, fontSize: 16, flexShrink: 0 }}>✓</span>
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <motion.div style={{ textAlign: 'center', marginBottom: 60 }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">Our Proven <span className="gradient-text">6-Step Process</span></h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.step}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div style={{ fontSize: 40, fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'rgba(0,229,255,0.15)', marginBottom: 12 }}>{p.step}</div>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{p.title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
