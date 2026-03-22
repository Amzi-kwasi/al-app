import { Link } from 'react-router-dom';


const SERVICES = [
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'Brand Identity',
  'Motion Design',
  'Digital Strategy',
];

const COMPANY = [
  { label: 'About Us', to: '#/about' },
  { label: 'Portfolio', to: '#/portfolio' },
  { label: 'Pricing', to: '#/pricing' },
  { label: 'Case Studies', to: '#/case-study' },
  { label: 'Contact', to: '#/contact' },
];

const SOCIALS = [
  { icon: '𝕏', href: '#/', label: 'Twitter' },
  { icon: 'in', href: '#/', label: 'LinkedIn' },
  { icon: 'be', href: '#/', label: 'Behance' },
  { icon: 'gh', href: '#/', label: 'GitHub' },
  { icon: '▶', href: '#/', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <Link to="#/" className="navbar-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <img src="/assets/logo.jpg" alt="Asvan Studio" className="navbar-logo" />
              <span className="navbar-brand-name gradient-text">Asvan Studio</span>
            </Link>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28, maxWidth: 300 }}>
              We craft exceptional digital experiences that drive growth. From strategy to execution, we partner with ambitious brands worldwide.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map(s => (
                <li key={s}>
                  <Link
                    to="#/services"
                    style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COMPANY.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📍', text: 'Accra, Ghana' },
                { icon: '✉️', text: 'asvstudio@gmail.com' },
                { icon: '📞', text: '0549271528, 0549548274' },
              ].map(item => (
                <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: 'var(--text-secondary)' }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 24,
              padding: '16px',
              background: 'rgba(0,229,255,0.05)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13,
              color: 'var(--text-secondary)',
            }}>
              Mon–Fri: 9:00 AM – 6:00 PM PST<br />
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Response within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Asvan Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
