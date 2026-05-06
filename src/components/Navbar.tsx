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
        nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.05)';
      } else {
        nav.style.background = 'rgba(255,255,255,0.80)';
        nav.style.borderBottomColor = 'transparent';
        nav.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 60, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 max(48px, calc((100vw - 1200px) / 2 + 48px))',
        background: 'rgba(255,255,255,0.80)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'linear-gradient(135deg,#5d9070,#3a6650)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 900, fontSize: 12, fontFamily: 'Georgia,serif',
          boxShadow: '0 2px 8px rgba(58,102,80,0.22)',
          flexShrink: 0,
        }}>R</div>
        <span style={{
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
          fontWeight: 700, fontSize: 13, letterSpacing: '0.09em',
          color: '#111', textTransform: 'uppercase',
        }}>瑞承文化</span>
      </button>

      {/* Links */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            className="nav-link-btn"
            onClick={() => scrollTo(id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px 2px',
              fontFamily: "'Inter','Noto Sans SC',sans-serif",
              fontWeight: 500, fontSize: 13, color: '#666',
              letterSpacing: '0.04em',
              outline: 'none',
              position: 'relative',
              transition: 'color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#3a6650';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#666';
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
            bottom: -1px; left: 2px; right: 2px;
            height: 1.5px;
            background: linear-gradient(to right, #3a6650, #5d9070);
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: left center;
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-link-btn:hover::after { transform: scaleX(1); }
        `}</style>
      </div>
    </nav>
  );
}
