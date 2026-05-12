'use client';

import { useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: '关于我们', id: 'about' },
  { label: '案例展示', id: 'projects' },
  { label: '数字业务', id: 'digital' },
  { label: '联系我们', id: 'contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 30) {
        nav.style.background = 'rgba(255,255,255,0.97)';
        nav.style.borderBottomColor = 'rgba(0,0,0,0.07)';
        nav.style.boxShadow = '0 1px 15px rgba(0,0,0,0.04)';
      } else {
        nav.style.background = 'rgba(255,255,255,0.85)';
        nav.style.borderBottomColor = 'transparent';
        nav.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 68, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 max(24px, calc((100vw - 1200px) / 2 + 24px))',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          nav {
            padding: 0 16px !important;
            height: 60px !important;
          }
          .nav-link-btn {
            font-size: 11px !important;
            white-space: nowrap !important;
            letter-spacing: 0.02em !important;
          }
          .nav-links-container {
            gap: 14px !important;
          }
          .nav-logo-text {
            display: none !important;
          }
        }
      `}</style>
      
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg,#5d9070,#3a6650)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 900, fontSize: 14, fontFamily: 'Georgia, serif',
          boxShadow: '0 3px 10px rgba(58,102,80,0.25)',
          flexShrink: 0,
        }}>R</div>
        <span className="nav-logo-text" style={{
          fontFamily: "'Inter','Noto Sans SC',sans-serif",
          fontWeight: 800, fontSize: 15, letterSpacing: '0.05em',
          color: '#111', textTransform: 'uppercase',
        }}>瑞承文化</span>
      </button>

      {/* Links */}
      <div className="nav-links-container" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            className="nav-link-btn"
            onClick={() => scrollTo(id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px 2px',
              fontFamily: "'Inter','Noto Sans SC',sans-serif",
              fontWeight: 600, fontSize: 13, color: '#555',
              letterSpacing: '0.02em',
              outline: 'none',
              position: 'relative',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#3a6650';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#555';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {label}
          </button>
        ))}
        <style>{`
          .nav-link-btn::after {
            content: '';
            position: absolute;
            bottom: 0px; left: 0px; width: 100%;
            height: 2px;
            background: linear-gradient(to right, #3a6650, #5d9070);
            border-radius: 4px;
            transform: scaleX(0);
            transform-origin: right center;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-link-btn:hover::after { 
            transform: scaleX(1);
            transform-origin: left center;
          }
        `}</style>
      </div>
    </nav>
  );
}
