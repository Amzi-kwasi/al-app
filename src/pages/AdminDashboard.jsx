import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';

/* ─── DATA ───────────────────────────────────────────── */
const STATS_CARDS = [
  { icon: '💼', label: 'Active Projects', value: '12', change: '+2', up: true, color: 'rgba(0,229,255,0.1)', iconColor: 'var(--accent-cyan)' },
  { icon: '💰', label: 'Revenue (MTD)', value: '$84K', change: '+18%', up: true, color: 'rgba(72,199,142,0.1)', iconColor: '#48c78e' },
  { icon: '👥', label: 'Total Clients', value: '42', change: '+3', up: true, color: 'rgba(167,139,250,0.1)', iconColor: '#a78bfa' },
  { icon: '✉️', label: 'Unread Messages', value: '5', change: '-2', up: false, color: 'rgba(255,107,53,0.1)', iconColor: 'var(--accent-orange)' },
];

const PROJECTS = [
  { thumb: '/assets/project1.jpg', name: 'NovaPay Platform', client: 'NovaPay Inc.', value: '$24,000', status: 'active', date: 'Dec 12, 2024', progress: 72 },
  { thumb: '/assets/project2.jpg', name: 'Luminos Dashboard', client: 'Luminos Corp.', value: '$14,500', status: 'completed', date: 'Nov 28, 2024', progress: 100 },
  { thumb: '/assets/project3.jpg', name: 'Orion Rebrand', client: 'Orion Fashion', value: '$8,200', status: 'pending', date: 'Jan 5, 2025', progress: 20 },
  { thumb: '/assets/project1.jpg', name: 'Apex Mobile App', client: 'Apex Financial', value: '$18,000', status: 'active', date: 'Jan 18, 2025', progress: 45 },
  { thumb: '/assets/project2.jpg', name: 'Vega Health Portal', client: 'Vega Health', value: '$11,000', status: 'active', date: 'Feb 3, 2025', progress: 60 },
];

const MESSAGES = [
  { avatar: '/assets/avatar1.jpg', sender: 'Marcus Chen', preview: 'Hey, can we schedule the final review for Wednesday?', time: '2m ago', unread: true },
  { avatar: '/assets/avatar2.jpg', sender: 'Sarah Williams', preview: 'The new dashboard looks incredible! One small change...', time: '38m ago', unread: true },
  { avatar: '/assets/avatar1.jpg', sender: 'James Okafor', preview: 'Invoice received, payment processing today.', time: '2h ago', unread: false },
  { avatar: '/assets/avatar2.jpg', sender: 'Priya Nair', preview: 'Team sync moved to 3PM, please update your calendar.', time: '4h ago', unread: false },
  { avatar: '/assets/avatar1.jpg', sender: 'David Lim', preview: 'Can you share the Figma prototype link again?', time: 'Yesterday', unread: false },
];

const TABLE_ROWS = [
  { id: 'INV-2401', client: 'NovaPay Inc.', project: 'Platform Redesign', amount: '$24,000', status: 'active', due: 'Jan 15, 2025' },
  { id: 'INV-2402', client: 'Luminos Corp.', project: 'SaaS Dashboard', amount: '$14,500', status: 'completed', due: 'Dec 10, 2024' },
  { id: 'INV-2403', client: 'Orion Fashion', project: 'Brand Identity', amount: '$8,200', status: 'pending', due: 'Feb 1, 2025' },
  { id: 'INV-2404', client: 'Apex Financial', project: 'Mobile App', amount: '$18,000', status: 'active', due: 'Mar 10, 2025' },
  { id: 'INV-2405', client: 'Vega Health', project: 'Health Portal', amount: '$11,000', status: 'active', due: 'Feb 20, 2025' },
];

const CHART_DATA = [
  { month: 'Jul', value: 55 }, { month: 'Aug', value: 72 }, { month: 'Sep', value: 60 },
  { month: 'Oct', value: 88 }, { month: 'Nov', value: 78 }, { month: 'Dec', value: 95 },
  { month: 'Jan', value: 84 },
];

const ACTIVITIES = [
  { color: 'cyan', text: <><strong>NovaPay Inc.</strong> approved the homepage prototype.</>, time: '5m ago' },
  { color: 'green', text: <>Invoice <strong>#INV-2402</strong> has been paid — $14,500.</>, time: '1h ago' },
  { color: 'orange', text: <><strong>New message</strong> from Sarah Williams.</>, time: '2h ago' },
  { color: 'purple', text: <><strong>Orion Fashion</strong> project moved to Design phase.</>, time: '4h ago' },
  { color: 'cyan', text: <><strong>Apex Mobile App</strong> milestone reached: 45% complete.</>, time: 'Yesterday' },
];

const DONUT_SEGMENTS = [
  { label: 'Design', pct: 38, color: 'var(--accent-cyan)' },
  { label: 'Dev', pct: 32, color: '#a78bfa' },
  { label: 'Branding', pct: 18, color: 'var(--accent-orange)' },
  { label: 'Strategy', pct: 12, color: '#48c78e' },
];

/* ─── Sub-Components ─────────────────────────────────── */
function StatsCards() {
  return (
    <div className="dashboard-cards">
      {STATS_CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          className="dash-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
        >
          <div className="dash-card-header">
            <div className="dash-card-icon" style={{ background: card.color }}>
              <span style={{ fontSize: 20 }}>{card.icon}</span>
            </div>
            <span className={`dash-card-change ${card.up ? 'up' : 'down'}`}>
              {card.up ? '↑' : '↓'} {card.change}
            </span>
          </div>
          <div className="dash-card-value">{card.value}</div>
          <div className="dash-card-label">{card.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function RevenueChart() {
  const max = Math.max(...CHART_DATA.map(d => d.value));
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <div className="chart-title">Revenue Overview</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Last 7 months</div>
        </div>
        <select className="form-select" style={{ width: 'auto', padding: '6px 12px', fontSize: 12 }}>
          <option>Last 7 months</option>
          <option>Last 12 months</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="chart-bars">
        {CHART_DATA.map((d, i) => (
          <div key={d.month} className="chart-bar-wrap">
            <motion.div
              className="chart-bar"
              style={{ height: `${(d.value / max) * 100}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(d.value / max) * 100}%` }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              title={`$${d.value}K`}
            />
            <span className="chart-bar-label">{d.month}</span>
          </div>
        ))}
      </div>
      <div className="quick-stats">
        {[
          { val: '$84K', lbl: 'This Month' },
          { val: '$612K', lbl: 'YTD' },
          { val: '+18%', lbl: 'Growth' },
        ].map(s => (
          <div key={s.lbl} className="quick-stat">
            <div className="quick-stat-val gradient-text">{s.val}</div>
            <div className="quick-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceDonut() {
  let cumulative = 0;
  const r = 42;
  const cx = 60;
  const cy = 60;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div className="chart-title">Revenue by Service</div>
      </div>
      <div className="donut-wrap" style={{ marginBottom: 20 }}>
        <svg className="donut-svg" width="120" height="120" viewBox="0 0 120 120">
          {DONUT_SEGMENTS.map((seg) => {
            const dashArray = (seg.pct / 100) * circumference;
            const dashOffset = -cumulative * circumference / 100;
            cumulative += seg.pct;
            return (
              <motion.circle
                key={seg.label}
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth="18"
                strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                strokeDashoffset={dashOffset}
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray: `${dashArray} ${circumference - dashArray}` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            );
          })}
        </svg>
        <div className="donut-center">
          <div className="donut-value">100%</div>
          <div className="donut-sub">Services</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {DONUT_SEGMENTS.map(seg => (
          <div key={seg.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: seg.color }} />
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{seg.label}</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsTable() {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div className="section-header-row">
        <div className="section-header-title">All Projects</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)',
            padding: '7px 14px', fontSize: 13, color: 'var(--text-secondary)', cursor: 'pointer',
          }}>Filter</button>
          <button className="btn-primary" style={{ padding: '7px 16px', fontSize: 13 }}>+ New Project</button>
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Project</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: 13 }}>{row.id}</td>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{row.client}</td>
                <td>{row.project}</td>
                <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>{row.amount}</td>
                <td>
                  <span className={`table-status ${row.status}`}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: row.status === 'active' ? 'var(--accent-cyan)' : row.status === 'completed' ? '#48c78e' : 'var(--accent-orange)',
                      display: 'inline-block',
                    }} />
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
                <td>{row.due}</td>
                <td>
                  <button style={{
                    background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
                    borderRadius: 6, padding: '5px 12px', fontSize: 12, color: 'var(--text-secondary)',
                    cursor: 'pointer', transition: 'var(--transition)',
                  }}>
                    View
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RecentProjectsList() {
  return (
    <div className="recent-projects">
      <div className="section-header-row">
        <div className="section-header-title">Recent Projects</div>
        <a href="#" className="section-header-link">View All →</a>
      </div>
      {PROJECTS.slice(0, 4).map((proj, i) => (
        <div key={proj.name} className="project-list-item">
          <img src={proj.thumb} alt={proj.name} className="project-list-thumb" />
          <div className="project-list-info">
            <div className="project-list-name">{proj.name}</div>
            <div className="project-list-client">{proj.client}</div>
            <div style={{ marginTop: 6 }}>
              <div style={{ height: 4, background: 'var(--border-subtle)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-teal), var(--accent-cyan))', borderRadius: 2 }}
                  initial={{ width: 0 }}
                  animate={{ width: `${proj.progress}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </div>
          </div>
          <div className="project-list-meta">
            <div className="project-list-value">{proj.value}</div>
            <div className="project-list-date">{proj.date}</div>
            <span className={`table-status ${proj.status}`} style={{ fontSize: 11, padding: '2px 8px', marginTop: 4, display: 'inline-flex' }}>
              {proj.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MessagesPanel() {
  return (
    <div className="messages-panel">
      <div className="section-header-row">
        <div className="section-header-title">Messages</div>
        <a href="#" className="section-header-link">All Messages →</a>
      </div>
      {MESSAGES.map((msg, i) => (
        <div key={msg.sender + i} className={`message-item${msg.unread ? ' unread' : ''}`}>
          <img src={msg.avatar} alt={msg.sender} className="message-avatar" />
          <div className="message-content">
            <div className="message-sender" style={{ fontWeight: msg.unread ? 700 : 600 }}>{msg.sender}</div>
            <div className="message-preview">{msg.preview}</div>
          </div>
          <div className="message-meta">
            <div className="message-time">{msg.time}</div>
            {msg.unread && <div className="message-unread-dot" />}
          </div>
        </div>
      ))}
    </div>
  );
}

function ActivityFeed() {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20 }}>Recent Activity</div>
      {ACTIVITIES.map((act, i) => (
        <div key={i} className="activity-item">
          <div className={`activity-dot ${act.color}`} />
          <div className="activity-text">{act.text}</div>
          <div className="activity-time">{act.time}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Dashboard Page ─────────────────────────────────── */
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main">
        {/* Topbar */}
        <div className="dashboard-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              style={{ display: 'none', background: 'none', color: 'var(--text-secondary)', fontSize: 22, padding: 4 }}
              className="hamburger-dash"
              onClick={() => setSidebarOpen(v => !v)}
            >
              ☰
            </button>
            <div className="topbar-search">
              <span className="topbar-search-icon">🔍</span>
              <input placeholder="Search projects, clients..." />
            </div>
          </div>
          <div className="topbar-right">
            <ThemeToggle />
            <button className="topbar-icon-btn">
              🔔
              <span className="topbar-notif-dot" />
            </button>
            <button className="topbar-icon-btn">⚙️</button>
            <div className="topbar-user">
              <img src="/assets/avatar1.jpg" alt="Admin" className="topbar-avatar" />
              <div>
                <div className="topbar-user-name">Alex Rivera</div>
                <div className="topbar-user-role">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="dashboard-content">
          {/* Page header */}
          <motion.div
            style={{ marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
                Good morning, Alex 👋
              </h1>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                Here's what's happening with your projects today.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
                📊 Reports
              </button>
              <button className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
                + New Project
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <StatsCards />

          {/* Charts Row */}
          <div className="dashboard-grid">
            <RevenueChart />
            <ServiceDonut />
          </div>

          {/* Projects Table */}
          <motion.div
            style={{ marginBottom: 24 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ProjectsTable />
          </motion.div>

          {/* Bottom Row */}
          <div className="dashboard-grid">
            <RecentProjectsList />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <MessagesPanel />
              <ActivityFeed />
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 32, padding: '20px 0', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2025 Asvan Studio Admin</p>
            <Link to="/" style={{ fontSize: 13, color: 'var(--accent-cyan)', fontWeight: 600 }}>← Back to Website</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
