// ─── CaseStudy.jsx ───────────────────────────────────
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CASES = [
  {
    id: 1, image: '/assets/project1.jpg', client: 'NovaPay Inc.', category: 'Fintech',
    title: 'How We Reduced Abandonment by 81% for a Digital Bank',
    summary: 'A 14-week design sprint that transformed NovaPay\'s user experience and drove $12M in retained annual revenue.',
    results: ['81% drop in abandonment', '$12M retained revenue', '4.8★ App Store rating'],
  },
  {
    id: 2, image: '/assets/project2.jpg', client: 'Luminos Corp.', category: 'SaaS',
    title: 'Rebuilding Luminos\'s Dashboard to Handle 10× Data Volume',
    summary: 'An engineering and design overhaul that improved dashboard load time by 74% and boosted user retention by 38%.',
    results: ['74% faster load time', '38% retention increase', '12K new signups/month'],
  },
  {
    id: 3, image: '/assets/project3.jpg', client: 'Orion Fashion', category: 'E-Commerce',
    title: 'Brand Relaunch That Drove 220% Growth in Online Sales',
    summary: 'A complete rebrand and Shopify rebuild for a luxury fashion house entering D2C markets across 8 countries.',
    results: ['220% revenue growth', '8 markets launched', '3.2M impressions in 30 days'],
  },
];

export function CaseStudy() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Case Studies</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Real Work. <span className="gradient-text">Real Results.</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Deep dives into how we solve complex problems and deliver measurable outcomes.
            </motion.p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {CASES.map((cs, i) => (
                <motion.div
                  key={cs.id}
                  style={{
                    display: 'grid', gridTemplateColumns: '400px 1fr', gap: 0,
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: 'var(--border-accent)' }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 280 }} />
                  </div>
                  <div style={{ padding: 40 }}>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                      <span className="tag">{cs.category}</span>
                      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{cs.client}</span>
                    </div>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: 16 }}>{cs.title}</h2>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>{cs.summary}</p>
                    <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
                      {cs.results.map(r => (
                        <div key={r} style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ color: 'var(--accent-cyan)' }}>✓</span>{r}
                        </div>
                      ))}
                    </div>
                    <Link to={`/portfolio/${cs.id}`} className="btn-outline" style={{ display: 'inline-flex', fontSize: 13 }}>
                      Read Full Case Study →
                    </Link>
                  </div>
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

// ─── LiveDemo.jsx ─────────────────────────────────────
export function LiveDemo() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Interactive Demo</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Experience Our <span className="gradient-text">Design Process</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              A live walkthrough of how we approach design challenges and deliver solutions.
            </motion.p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                boxShadow: 'var(--shadow-card), var(--shadow-glow)',
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Browser chrome */}
              <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-subtle)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                {['#ff6b6b', '#ffd93d', '#6bcb77'].map(c => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
                <div style={{ flex: 1, maxWidth: 400, margin: '0 auto', background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '5px 16px', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
                  demo.asvanstudio.com
                </div>
              </div>
              <img src="/assets/project1.jpg" alt="Live Demo" style={{ width: '100%', height: 480, objectFit: 'cover' }} />
            </motion.div>

            <div className="three-col" style={{ marginTop: 60 }}>
              {[
                { step: '01', title: 'Explore Components', desc: 'Browse our live component library with interactive examples from real client projects.' },
                { step: '02', title: 'Customize in Real Time', desc: 'Adjust colors, layouts, and content to see how our design system adapts.' },
                { step: '03', title: 'Export & Launch', desc: 'Take the demo components directly into your project or request a custom build.' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ fontSize: 36, fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'rgba(0,229,255,0.15)', marginBottom: 12 }}>{item.step}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="btn-primary">Request Custom Demo →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

// ─── PricingPage.jsx ──────────────────────────────────
const PLANS = [
  {
  name: 'Starter',
  price: '$1,200',
  period: '/project',
  featured: false,
  tagline: 'Perfect for small businesses',
  features: [
    'Up to 4 Pages',
    'UI/UX Design + Website Development',
    'Mobile Responsive Design',
    'Contact Form Integration',
    'Basic SEO Setup',
    '2 Revision Rounds',
    '1–2 Week Delivery'
  ]
},
 {
name: 'Growth',
price: '$2,800',
period: '/project',
featured: true,
tagline: 'Perfect for growing businesses',
features: [
  'Up to 8 Pages',
  'UI/UX Design + React Development',
  'Responsive Design (Mobile + Tablet)',
  'Contact Form Integration',
  'Basic Animations',
  '3 Revision Rounds',
  'Google Analytics Setup',
  '3-Week Delivery',
],
},
  {
  name: 'Scale',
  price: '$7,500',
  period: '/project',
  featured: false,
  tagline: 'For established brands & growing platforms',
  features: [
    'Up to 20 Pages',
    'Advanced UI/UX + React Development',
    'CMS Integration',
    'Up to 3 API Integrations',
    'Basic SEO Setup',
    'Performance Optimization',
    '4 Revision Rounds',
    '6-Week Delivery',
    'Priority Support (30 Days)'
  ]
},
  {
    name: 'Enterprise', price: 'Custom', period: '', featured: false,
    tagline: 'Tailored to your organization',
    features: [
      'Unlimited Scope',
      'Dedicated 5-Person Team',
      'Multi-Platform Development',
      'Full Brand System',
      'Strategy & Roadmapping',
      'Unlimited Revisions',
      'Ongoing Retainer Option',
    ],
  },
];

const ADDONS = [
  { name: 'Logo & Identity Package', price: '$1,200' },
  { name: 'Motion & Animation Pack', price: '$800' },
  { name: 'Extra Revision Round', price: '$400' },
  { name: 'Copywriting (per page)', price: '$180' },
  { name: 'Monthly Maintenance', price: '$320/mo' },
  { name: 'Analytics Setup', price: '$600' },
];

export function PricingPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Pricing</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Clear Pricing, <span className="gradient-text">Zero Surprises</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Every plan includes direct access to our senior team. No juniors, no outsourcing — ever.
            </motion.p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, alignItems: 'stretch', marginBottom: 80 }}>
              {PLANS.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  className={`pricing-card${plan.featured ? ' featured' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {plan.featured && <div className="pricing-badge">Most Popular</div>}
                  <div className="pricing-plan">{plan.name}</div>
                  <div className="pricing-price" style={{ fontSize: plan.price === 'Custom' ? 36 : 40 }}>{plan.price}</div>
                  <div className="pricing-period">{plan.period}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20, fontStyle: 'italic' }}>{plan.tagline}</div>
                  <ul className="pricing-features">
                    {plan.features.map(f => (
                      <li key={f} className="pricing-feature">
                        <span className="pricing-check">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={plan.featured ? 'btn-primary' : 'btn-outline'}
                    style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: 'auto' }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Add-ons */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', textAlign: 'center', marginBottom: 12 }}>
                Add-On Services
              </h2>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: 15, marginBottom: 36 }}>
                Enhance any plan with these optional extras.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {ADDONS.map(a => (
                  <div key={a.name} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)', padding: '18px 22px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{a.name}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ row */}
        <section style={{ padding: '0 0 100px' }}>
          <div className="container">
            <motion.div
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(255,107,53,0.04))',
                border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)',
                padding: 'clamp(40px, 6vw, 60px)', textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Not Sure Which Plan Fits?
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
                Book a free 30-minute strategy call. We'll scope your project and recommend the right approach.
              </p>
              <Link to="/contact" className="btn-primary">Book Free Consultation →</Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default CaseStudy;
