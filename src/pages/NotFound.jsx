import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '80vh', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-deco" />
        <div className="glow-orb cyan" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '40px 24px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            <div style={{
              fontSize: 'clamp(100px, 20vw, 180px)',
              fontWeight: 900,
              fontFamily: 'var(--font-mono)',
              lineHeight: 1,
              marginBottom: 16,
              background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(255,107,53,0.1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'blur(0px)',
            }}>
              404
            </div>
          </motion.div>

          <motion.h2
            style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.75 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Looks like this page went off the grid. Let's get you back to somewhere familiar.
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link to="/" className="btn-primary">← Back to Home</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            style={{ marginTop: 52, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { label: 'Services', to: '/services' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'About', to: '/about' },
              { label: 'Pricing', to: '/pricing' },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  padding: '8px 20px', borderRadius: 100,
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
