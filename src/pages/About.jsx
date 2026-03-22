import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const TEAM = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', avatar: 'https://lh3.googleusercontent.com/pw/AP1GczMl8wdr9VDmaWC4iQmy0RNn6tVRPg2I5JHvOOgvoQadI4eRQK0CV08McGCNHYtw-8MmykWWBW0qGB-DDpiV_kgNeXzOpItEdxqi5dBMCk2WftdNhi8', bio: '12+ years shaping digital products for Fortune 500 companies and high-growth startups.' },
  { name: 'Priya Nair', role: 'Head of UX Design', avatar: 'https://lh3.googleusercontent.com/pw/AP1GczMl8wdr9VDmaWC4iQmy0RNn6tVRPg2I5JHvOOgvoQadI4eRQK0CV08McGCNHYtw-8MmykWWBW0qGB-DDpiV_kgNeXzOpItEdxqi5dBMCk2WftdNhi8', bio: 'Former lead designer at Google and Airbnb, specializing in conversion-focused UX systems.' },
  { name: 'Jordan Miles', role: 'Technical Lead', avatar: 'https://lh3.googleusercontent.com/pw/AP1GczMl8wdr9VDmaWC4iQmy0RNn6tVRPg2I5JHvOOgvoQadI4eRQK0CV08McGCNHYtw-8MmykWWBW0qGB-DDpiV_kgNeXzOpItEdxqi5dBMCk2WftdNhi8', bio: 'Full-stack architect with deep expertise in React, Node.js, and cloud infrastructure.' },
  { name: 'Sofia Chen', role: 'Brand Strategist', avatar: 'https://lh3.googleusercontent.com/pw/AP1GczMl8wdr9VDmaWC4iQmy0RNn6tVRPg2I5JHvOOgvoQadI4eRQK0CV08McGCNHYtw-8MmykWWBW0qGB-DDpiV_kgNeXzOpItEdxqi5dBMCk2WftdNhi8', bio: 'Brand strategist who has built identity systems for over 80 global companies.' },
];

const VALUES = [
  { icon: '◈', title: 'Craft Over Speed', desc: 'We never ship work we aren't proud of. Every pixel, every line of code is deliberate.' },
  { icon: '◎', title: 'Client Partnership', desc: 'We embed ourselves in your goals. Your success metrics become our north star.' },
  { icon: '⊞', title: 'Data-Informed', desc: 'Design decisions backed by research, analytics, and proven UX principles.' },
  { icon: '⬡', title: 'Radical Transparency', desc: 'No surprises. We communicate proactively and keep you in the loop at every stage.' },
];

const TIMELINE = [
  { year: '2016', title: 'Founded in San Francisco', desc: 'Started as a two-person design consultancy, winning our first Fortune 500 contract within 6 months.' },
  { year: '2018', title: 'Expanded to Full-Service', desc: 'Added development and brand strategy capabilities, growing to a team of 12.' },
  { year: '2020', title: 'Went Global', desc: 'Opened remote operations across Europe and Asia, serving clients in 18 countries.' },
  { year: '2023', title: 'AI-Integrated Design', desc: 'Pioneered AI-enhanced design workflows, cutting project timelines by 30% without compromising quality.' },
  { year: '2024', title: '240+ Projects Delivered', desc: 'Crossed a major milestone — $40M+ in client revenue attributed to our work.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

export default function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Hero */}
        <section style={{ padding: '100px 0 80px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="grid-deco" />
          <div className="glow-orb cyan" style={{ width: 500, height: 500, top: -100, right: -100 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.span className="section-tag" {...fadeUp(0)}>Our Story</motion.span>
            <motion.h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 24 }} {...fadeUp(0.1)}>
              We Are <span className="gradient-text">Asvan Studio</span>
            </motion.h1>
            <motion.p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 640 }} {...fadeUp(0.2)}>
              A world-class digital agency founded on the belief that exceptional design and engineering, done right, transforms businesses. We've delivered $40M+ in attributed revenue for our clients across 25+ countries.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div className="two-col">
              <motion.div {...fadeUp(0)}>
                <span className="section-tag">Our Mission</span>
                <h2 className="section-title">Turning Ambition Into <span className="gradient-text">Digital Reality</span></h2>
                <p className="section-subtitle" style={{ marginBottom: 24 }}>
                  We don't just build websites and apps. We architect digital strategies that align creative vision with measurable business outcomes.
                </p>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                  Our multidisciplinary team of designers, engineers, and strategists work as an integrated unit — eliminating the silos that slow most agencies down. The result: faster delivery, tighter execution, and work that actually moves the needle.
                </p>
                <Link to="/contact" className="btn-primary">Work With Us →</Link>
              </motion.div>
              <motion.div {...fadeUp(0.15)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {VALUES.map(v => (
                  <div key={v.title} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)', padding: 24,
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 12 }}>{v.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{v.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <motion.div style={{ textAlign: 'center', marginBottom: 64 }} {...fadeUp()}>
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">From Startup to <span className="gradient-text">Industry Leader</span></h2>
            </motion.div>
            <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
              <div style={{ position: 'absolute', left: 80, top: 0, bottom: 0, width: 1, background: 'var(--border-subtle)' }} />
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  style={{ display: 'flex', gap: 32, marginBottom: 40 }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ width: 80, flexShrink: 0, textAlign: 'right' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {item.year}
                    </span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: -22, top: 4,
                      width: 10, height: 10, borderRadius: '50%',
                      background: 'var(--accent-cyan)', border: '3px solid var(--bg-secondary)',
                    }} />
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container">
            <motion.div style={{ textAlign: 'center', marginBottom: 64 }} {...fadeUp()}>
              <span className="section-tag">The Team</span>
              <h2 className="section-title">The Talent Behind <span className="gradient-text">Every Project</span></h2>
            </motion.div>
            <div className="four-col">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    transition: 'var(--transition)',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, borderColor: 'var(--border-accent)' }}
                >
                  <img src={member.avatar} alt={member.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{member.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: 12 }}>{member.role}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{member.bio}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <motion.div
              style={{ textAlign: 'center' }}
              {...fadeUp()}
            >
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Ready to Build <span className="gradient-text">Something Iconic?</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
                Let's talk about your project — no commitment, no pressure.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="#/contact" className="btn-primary">Start a Conversation</Link>
                <Link to="#/portfolio" className="btn-outline">View Our Work</Link>
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
