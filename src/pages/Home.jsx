import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

/* ─── Data ─────────────────────────────────────────── */
const SERVICES = [
  { icon: '◈', title: 'UI/UX Design', desc: 'Pixel-perfect interfaces built around user psychology, delivering experiences that convert and delight across every touchpoint.' },
  { icon: '⟨/⟩', title: 'Web Development', desc: 'Blazing-fast, scalable web applications engineered with cutting-edge stacks and optimized for performance at every layer.' },
  { icon: '⬡', title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps crafted for seamless performance, beautiful design, and maximum engagement.' },
  { icon: '◎', title: 'Brand Identity', desc: 'Strategic brand systems — logos, guidelines, and visual languages — that make your company instantly recognizable.' },
  { icon: '▷', title: 'Motion Design', desc: 'Captivating animations and motion graphics that breathe life into your brand story and elevate user engagement.' },
  { icon: '⊞', title: 'Digital Strategy', desc: 'Data-driven roadmaps that align creative vision with business goals, ensuring every pixel drives measurable ROI.' },
];

const STATS = [
  { value: 240, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 8, suffix: '+', label: 'Years of Excellence' },
  { value: 42, suffix: '', label: 'Global Clients' },
];

const PROJECTS = [
  {
    id: 1, image: '/assets/project1.jpg', title: 'NovaPay — Fintech Platform',
    description: 'A comprehensive digital banking platform serving 500K+ users with real-time payments and AI-driven insights.',
    tags: ['UI/UX', 'Development'], client: 'NovaPay Inc.',
  },
  {
    id: 2, image: '/assets/project2.jpg', title: 'Luminos — SaaS Dashboard',
    description: 'Enterprise analytics dashboard processing 2M daily events with beautiful data visualizations and custom reporting.',
    tags: ['Design', 'React'], client: 'Luminos Corp.',
  },
  {
    id: 3, image: '/assets/project3.jpg', title: 'Orion — E-commerce Rebrand',
    description: 'Complete brand overhaul and e-commerce platform for a luxury fashion house expanding into global markets.',
    tags: ['Branding', 'Shopify'], client: 'Orion Fashion',
  },
];

const TESTIMONIALS = [
  {
    text: "Asvan Studio transformed our entire digital presence. The team's attention to detail and strategic thinking delivered results that exceeded every KPI we set.",
    name: 'Marcus Chen', role: 'CEO, NovaPay Inc.', avatar: '/assets/avatar1.jpg', stars: 5,
  },
  {
    text: "Working with Asvan felt like having a world-class design team embedded in our company. They understood our vision from day one and executed flawlessly.",
    name: 'Sarah Williams', role: 'Product Director, Luminos', avatar: '/assets/avatar2.jpg', stars: 5,
  },
  {
    text: "The ROI on our redesign was visible within the first month — 40% increase in conversion rate. Asvan doesn't just design, they engineer growth.",
    name: 'James Okafor', role: 'Founder, Orion Fashion', avatar: '/assets/avatar1.jpg', stars: 5,
  },
];

const PLANS = [
  {
    name: 'Starter', price: '$2,400', period: '/project',
    features: ['Up to 5 Pages', 'UI/UX Design', 'Mobile Responsive', '2 Revision Rounds', '2-Week Delivery'],
    featured: false,
  },
  {
    name: 'Growth', price: '$5,800', period: '/project',
    features: ['Up to 15 Pages', 'UI/UX + Development', 'Custom Animations', '5 Revision Rounds', 'CMS Integration', '4-Week Delivery'],
    featured: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: '',
    features: ['Unlimited Scope', 'Full Digital Suite', 'Dedicated Team', 'Unlimited Revisions', 'Priority Support', 'Custom Timeline'],
    featured: false,
  },
];

const FAQS = [
  { q: 'How long does a typical project take?', a: 'Most projects range from 2–8 weeks depending on scope. A standard website redesign takes 3–4 weeks, while complex platforms may take 6–10 weeks. We always provide a detailed timeline during kickoff.' },
  { q: 'What information do you need to get started?', a: 'We start with a discovery call to understand your goals, brand, and audience. From there, we request a brief, brand assets (if any), competitor examples, and content drafts. We guide you through the whole process.' },
  { q: 'Do you offer post-launch support?', a: 'Absolutely. All projects include 30 days of complimentary post-launch support. We also offer monthly retainer plans for ongoing design updates, development, and strategy.' },
  { q: 'Can you work with our existing design system?', a: 'Yes — we work fluently in Figma, Sketch, and Adobe XD. We can extend, refine, or fully rebuild your design system while maintaining brand consistency throughout.' },
  { q: 'How do payments work?', a: 'We use a milestone-based payment structure: 40% upfront, 40% at design approval, and 20% at launch. For larger projects we can structure custom payment schedules.' },
];

/* ─── Logo Intro ────────────────────────────────────── */
function LogoIntro({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onDone, 300); return 100; }
        return p + 4;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="logo-intro"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="/assets/logo.jpg"
        alt="Asvan"
        className="logo-intro-img"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
      <motion.span
        className="logo-intro-text gradient-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Asvan Studio
      </motion.span>
      <div className="logo-intro-bar">
        <motion.div
          className="logo-intro-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Animated Counter ──────────────────────────────── */
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Section Components ────────────────────────────── */
function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
    }}>
      <div className="grid-deco" />
      <div className="glow-orb cyan" style={{ width: 600, height: 600, top: -100, left: -200 }} />
      <div className="glow-orb orange" style={{ width: 400, height: 400, bottom: 0, right: -100 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            className="section-tag hero-badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span>✦</span> Crafting Digital Excellence Since 2016
          </motion.div>

          <motion.h1
            className="hero-title section-title"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We Build{' '}
            <span className="gradient-text">Digital Products</span>
            <br />That Drive Growth
          </motion.h1>

          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto 40px', textAlign: 'center', maxWidth: 600 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Asvan Studio is a full-service digital agency helping ambitious brands design, build, and scale exceptional digital experiences.
          </motion.p>

          <motion.div
            className="hero-cta"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio" className="btn-primary">
              See Our Work →
            </Link>
            <Link to="/contact" className="btn-outline">
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            style={{ marginTop: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { label: '240+ Projects', icon: '◈' },
              { label: '98% Satisfaction', icon: '★' },
              { label: 'Global Clients', icon: '⊕' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
        <div className="scroll-indicator"><div className="scroll-dot" /></div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 60 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Services Built for<br /><span className="gradient-text">Modern Business</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            End-to-end digital solutions that turn your vision into high-performance products.
          </p>
        </motion.div>
        <div className="three-col">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="service-icon"><span style={{ fontSize: 22 }}>{s.icon}</span></div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="four-col">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stat-number gradient-text">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <Link to="/portfolio" className="btn-outline">View All Projects →</Link>
        </motion.div>
        <div className="three-col">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 60 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
        </motion.div>
        <div className="three-col">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 60 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="section-title">Investment That <span className="gradient-text">Pays Off</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No hidden fees. No surprises. Just clear, outcome-focused pricing.
          </p>
        </motion.div>
        <div className="three-col" style={{ alignItems: 'stretch' }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-card${plan.featured ? ' featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-plan">{plan.name}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-period">{plan.period}</div>
              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f} className="pricing-feature">
                    <span className="pricing-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className={plan.featured ? 'btn-primary' : 'btn-outline'}
                style={{ display: 'block', textAlign: 'center', width: '100%' }}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section">
      <div className="container">
        <div className="two-col" style={{ gap: 80 }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Everything you need to know before starting your project with us.
            </p>
            <Link to="/contact" className="btn-primary">Ask Us Anything →</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? ' open' : ''}`}
              >
                <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  {faq.q}
                  <span className="faq-chevron">⌄</span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(255,107,53,0.04))',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(40px, 6vw, 72px)',
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag" style={{ marginBottom: 16 }}>Newsletter</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Stay Ahead of the <span className="gradient-text">Curve</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Monthly insights on design trends, digital strategy, and case studies from our studio. No spam, ever.
          </p>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ color: 'var(--accent-cyan)', fontSize: 18, fontWeight: 700 }}
            >
              ✓ You're on the list! Welcome aboard.
            </motion.p>
          ) : (
            <div style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: 1, minWidth: 240 }}
              />
              <button
                className="btn-primary"
                onClick={() => email && setSubmitted(true)}
              >
                Subscribe
              </button>
            </div>
          )}
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 16 }}>
            Join 3,200+ designers & founders. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="two-col">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Build Something <span className="gradient-text">Remarkable</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Have a project in mind? We'd love to hear about it. Tell us what you're working on and we'll get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '✉️', title: 'Email Us', val: 'hello@asvanstudio.com' },
                { icon: '📞', title: 'Call Us', val: '+1 (415) 820-9400' },
                { icon: '📍', title: 'Visit Us', val: 'San Francisco, CA 94103' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="service-icon" style={{ marginBottom: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 36,
            }}
          >
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Project Budget</label>
              <select className="form-select">
                <option>Select a range</option>
                <option>$2,000 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000 – $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Tell us about your project</label>
              <textarea className="form-textarea" placeholder="Describe your project goals, timeline, and any specific requirements..." />
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─────────────────────────────────────── */
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <LogoIntro onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="page-wrapper">
          <Navbar />
          <main>
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <PortfolioPreview />
            <TestimonialsSection />
            <PricingPreview />
            <FAQSection />
            <NewsletterSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
