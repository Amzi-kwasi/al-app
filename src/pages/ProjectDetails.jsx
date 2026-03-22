import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const PROJECTS_DATA = {
  1: {
    title: 'NovaPay — Fintech Platform',
    client: 'NovaPay Inc.',
    year: '2024',
    duration: '14 Weeks',
    services: ['UI/UX Design', 'Frontend Development', 'API Integration'],
    overview: 'NovaPay approached us to redesign their entire digital banking platform — a product used daily by over 500,000 active users. The challenge was massive: improve usability and trust while maintaining 99.9% uptime during a phased rollout.',
    challenge: 'The original platform had 60+ screens with inconsistent UI patterns, slow load times, and a mobile experience that ranked poorly in user testing. Users were abandoning critical flows like wire transfers at a 42% rate.',
    solution: 'We conducted 40+ user interviews, built a comprehensive design system, and rebuilt the entire UI in React with server-side rendering. The result was a 31% reduction in task completion time and a 40% drop in abandonment.',
    results: [
      { label: 'Abandonment Rate', before: '42%', after: '8%' },
      { label: 'App Store Rating', before: '3.1★', after: '4.8★' },
      { label: 'Task Completion Time', before: '180s', after: '124s' },
    ],
    images: ['/assets/project1.jpg', '/assets/project2.jpg', '/assets/project3.jpg'],
    tags: ['Fintech', 'UI/UX', 'React'],
  },
};

const fallback = {
  title: 'Project Details',
  client: 'Client Name',
  year: '2024',
  duration: '8 Weeks',
  services: ['Design', 'Development'],
  overview: 'A comprehensive digital transformation project delivering measurable business results.',
  challenge: 'The client needed a complete overhaul of their digital presence to compete in a rapidly evolving market.',
  solution: 'We delivered a phased redesign and rebuild, starting with the highest-impact user flows and systematically improving every touchpoint.',
  results: [
    { label: 'Conversion Rate', before: '2.1%', after: '5.4%' },
    { label: 'User Satisfaction', before: '68%', after: '94%' },
    { label: 'Load Time', before: '4.2s', after: '1.1s' },
  ],
  images: ['/assets/project1.jpg', '/assets/project2.jpg', '/assets/project3.jpg'],
  tags: ['Design', 'Development'],
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS_DATA[id] || fallback;

  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Hero */}
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/portfolio" style={{ fontSize: 14, color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                ← Back to Portfolio
              </Link>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h1 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 24 }}>
                {project.title}
              </h1>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                {[
                  { label: 'Client', val: project.client },
                  { label: 'Year', val: project.year },
                  { label: 'Duration', val: project.duration },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <img src={project.images[0]} alt={project.title} style={{ width: '100%', height: 'clamp(300px, 50vw, 520px)', objectFit: 'cover' }} />
        </motion.div>

        {/* Content */}
        <section className="section">
          <div className="container">
            <div className="two-col" style={{ marginBottom: 80 }}>
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>Project Overview</h2>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.85 }}>{project.overview}</p>
              </motion.div>
              <div>
                <motion.div
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}
                  initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                >
                  <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Services Provided</h3>
                  {project.services.map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: 14, color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-cyan)' }}>✓</span> {s}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="two-col" style={{ marginBottom: 80 }}>
              {[
                { label: 'The Challenge', text: project.challenge, color: 'var(--accent-orange)' },
                { label: 'The Solution', text: project.solution, color: 'var(--accent-cyan)' },
              ].map((item, i) => (
                <motion.div key={item.label}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 32 }}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: item.color, marginBottom: 16 }}>{item.label}</div>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 32, textAlign: 'center' }}>Measurable Results</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {project.results.map((r, i) => (
                  <div key={r.label} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)', padding: '28px 24px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>{r.label}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>Before</div>
                        <div style={{ fontSize: 22, fontWeight: 900, fontFamily: 'var(--font-mono)', color: '#ff6b6b' }}>{r.before}</div>
                      </div>
                      <div style={{ fontSize: 20, color: 'var(--text-muted)' }}>→</div>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>After</div>
                        <div style={{ fontSize: 22, fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{r.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* More Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
          {project.images.slice(1).map((img, i) => (
            <img key={i} src={img} alt="" style={{ width: '100%', height: 300, objectFit: 'cover' }} />
          ))}
        </div>

        {/* Nav */}
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <Link to="/portfolio" className="btn-outline">← All Projects</Link>
            <Link to="/contact" className="btn-primary">Start a Similar Project →</Link>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
