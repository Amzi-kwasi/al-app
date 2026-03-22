import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CONTACT_INFO = [
  { icon: '✉️', title: 'Email', value: 'hello@asvanstudio.com', sub: 'Response within 24 hours' },
  { icon: '📞', title: 'Phone', value: '+1 (415) 820-9400', sub: 'Mon–Fri, 9AM–6PM PST' },
  { icon: '📍', title: 'Office', value: '24 Innovation Way', sub: 'San Francisco, CA 94103' },
  { icon: '💬', title: 'Live Chat', value: 'Start a Conversation', sub: 'Usually replies in minutes' },
];

const SERVICES_LIST = [
  'UI/UX Design', 'Web Development', 'Mobile App', 'Brand Identity', 'Motion Design', 'Digital Strategy', 'Full Project Suite', 'Not Sure Yet',
];

const BUDGET_OPTIONS = [
  'Under $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Hero */}
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="glow-orb cyan" style={{ width: 500, height: 500, top: -100, right: -50 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              Get In Touch
            </motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Let's Build Something <span className="gradient-text">Great Together</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto' }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Tell us about your project. We'll review your brief and get back to you with a tailored proposal within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section style={{ padding: '60px 0 0' }}>
          <div className="container">
            <div className="four-col">
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.title}
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)', padding: 24, textAlign: 'center',
                    transition: 'var(--transition)',
                  }}
                  {...fadeUp(i * 0.08)}
                  whileHover={{ y: -4, borderColor: 'var(--border-accent)' }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{item.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--accent-cyan)' }}>{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form */}
        <section className="section">
          <div className="container">
            <div className="two-col" style={{ gap: 64, alignItems: 'flex-start' }}>

              {/* Left: Info */}
              <motion.div {...fadeUp(0)}>
                <span className="section-tag">Project Brief</span>
                <h2 className="section-title" style={{ fontSize: 36, marginBottom: 20 }}>
                  Start Your <span className="gradient-text">Project Brief</span>
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 36 }}>
                  The more detail you share, the better we can tailor our proposal. We typically respond within one business day with a detailed brief and project timeline.
                </p>

                {/* What to expect */}
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)', padding: 28, marginBottom: 28,
                }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>What Happens Next</h4>
                  {[
                    { step: '1', text: 'We review your brief within 24 hours' },
                    { step: '2', text: 'Discovery call scheduled (30 min)' },
                    { step: '3', text: 'Detailed proposal + timeline delivered' },
                    { step: '4', text: 'Project kickoff within 3 business days' },
                  ].map(item => (
                    <div key={item.step} style={{ display: 'flex', gap: 14, marginBottom: 14, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%',
                        background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 800, color: 'var(--accent-cyan)', flexShrink: 0,
                      }}>
                        {item.step}
                      </div>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', paddingTop: 2 }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="avatar-group">
                    <img src="/assets/avatar1.jpg" alt="" />
                    <img src="/assets/avatar2.jpg" alt="" />
                    <img src="/assets/avatar1.jpg" alt="" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>Trusted by 42+ companies</div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>⭐⭐⭐⭐⭐ 4.9/5 average rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div {...fadeUp(0.15)}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(0,180,216,0.04))',
                      border: '1px solid var(--border-accent)',
                      borderRadius: 'var(--radius-xl)', padding: 56, textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 56, marginBottom: 20 }}>✓</div>
                    <h3 style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                      Thanks for reaching out, <strong style={{ color: 'var(--text-primary)' }}>{form.name}</strong>! We've received your brief and will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-xl)', padding: 'clamp(28px, 4vw, 44px)',
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Alex Smith" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="alex@company.com" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / Project Name</label>
                      <input className="form-input" name="company" value={form.company} onChange={handleChange} placeholder="Your company or project name" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Service You Need</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                        {SERVICES_LIST.map(s => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setActiveService(s)}
                            style={{
                              padding: '7px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                              cursor: 'pointer', transition: 'all 0.2s ease',
                              background: activeService === s ? 'rgba(0,229,255,0.1)' : 'var(--bg-card)',
                              color: activeService === s ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                              border: activeService === s ? '1px solid rgba(0,229,255,0.3)' : '1px solid var(--border-subtle)',
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Budget Range</label>
                        <select className="form-select" name="budget" value={form.budget} onChange={handleChange}>
                          <option value="">Select range</option>
                          {BUDGET_OPTIONS.map(b => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Desired Timeline</label>
                        <select className="form-select" name="timeline" value={form.timeline} onChange={handleChange}>
                          <option value="">Select timeline</option>
                          <option>ASAP (Rush)</option>
                          <option>1–2 Weeks</option>
                          <option>1 Month</option>
                          <option>2–3 Months</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Details *</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, current challenges, and what success looks like..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px 32px' }}>
                      Send Project Brief →
                    </button>

                    <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 16 }}>
                      🔒 Your information is 100% confidential. We never share client data.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map / Location Banner */}
        <section style={{ padding: '0 0 100px' }}>
          <div className="container">
            <motion.div
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: 260,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}
              {...fadeUp()}
            >
              <div className="grid-deco" />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📍</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
                  24 Innovation Way, San Francisco, CA 94103
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                  By appointment only — coffee's on us ☕
                </div>
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
