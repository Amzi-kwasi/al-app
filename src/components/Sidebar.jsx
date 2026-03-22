import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { icon: '⊞', label: 'Dashboard', to: '/admin' },
  { icon: '📁', label: 'Projects', to: '/admin/projects', badge: '12' },
  { icon: '👥', label: 'Clients', to: '/admin/clients' },
  { icon: '✉️', label: 'Messages', to: '/admin/messages', badge: '5' },
  { icon: '📊', label: 'Analytics', to: '/admin/analytics' },
  { icon: '💰', label: 'Invoices', to: '/admin/invoices' },
];

const SETTINGS = [
  { icon: '⚙️', label: 'Settings', to: '/admin/settings' },
  { icon: '🔔', label: 'Notifications', to: '/admin/notifications' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <motion.aside
      className={`dashboard-sidebar${isOpen ? ' open' : ''}`}
      initial={false}
      animate={{ x: 0 }}
    >
      {/* Brand */}
      <div className="sidebar-brand">
        <img src="/assets/logo.jpg" alt="Asvan" style={{ height: 32, width: 32, objectFit: 'contain' }} />
        <span className="sidebar-brand-name gradient-text">Asvan Studio</span>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <span className="sidebar-section-label">Main</span>
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin'}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            <span className="sidebar-item-icon">{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span className="sidebar-item-badge">{item.badge}</span>
            )}
          </NavLink>
        ))}

        <span className="sidebar-section-label" style={{ marginTop: 24 }}>Settings</span>
        {SETTINGS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            <span className="sidebar-item-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom profile */}
      <div className="sidebar-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px' }}>
          <img
            src="/assets/avatar1.jpg"
            alt="Admin"
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-accent)' }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Alex Rivera
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Admin</div>
          </div>
          <button style={{
            background: 'none', color: 'var(--text-muted)', fontSize: 18,
            padding: 4, borderRadius: 6, transition: 'var(--transition)',
          }}>
            ↩
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
