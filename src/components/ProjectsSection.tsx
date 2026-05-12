'use client';

import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'cigar', name: '长城雪茄厂博物馆', tags: ['展陈改造', '文化溯源'],
    desc: '百年烟雨的时光回溯，二楼展区展示空间的整体焕新与叙事表达。', img: '/proj-cigar.png', accent: '#8b6a3a'
  },
  {
    id: 'tea', name: '生物多样性博览园', tags: ['生态展陈', '沉浸体验'],
    desc: '以生物多样性为叙事核心，融合数字影像与互动装置，打造自然与科技共鸣的沉浸式展览空间。', img: '/proj-tea.png', accent: '#3a7260'
  },
  {
    id: 'wuliang', name: '五粮液博物馆', tags: ['历史叙事', '沉浸体验'],
    desc: '以酒文化为核心叙事轴，打造融合历史文献、互动体验与感官沉浸的白酒文化旗舰展馆。', img: '/proj-bio.png', accent: '#7a5a2a'
  },
  {
    id: 'art', name: '天府艺术公园"破土：春"', tags: ['青年艺术', '策展单元'],
    desc: '联合本地中学打造的实验性艺术孵化场，探索青年视觉的无限可能。', img: '/proj-art.png', accent: '#5a3a7a'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#fff', padding: '100px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right,transparent,rgba(0,0,0,0.07),transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }} className="proj-container">
        {/* heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1.5, background: 'linear-gradient(to right, transparent, #3a6650)' }} />
            <span style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3a6650'
            }}>
              精选案例
            </span>
            <div style={{ width: 32, height: 1.5, background: 'linear-gradient(to left, transparent, #3a6650)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Inter','Noto Sans SC',sans-serif", fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0d0d0d', margin: '0 0 15px',
            letterSpacing: '-0.02em'
          }}>
            经典案例<span style={{ color: '#3a6650' }}>大赏</span>
          </h2>
          <p style={{
            fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 15, color: '#888',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.6
          }}>
            每一个项目都凝聚着创意与匠心，我们用数字技术重塑空间叙事。
          </p>
        </div>

        {/* 2×2 grid */}
        <div id="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {PROJECTS.map((p) => (
            <div key={p.id}>
              <div className="proj-card" style={{
                height: 'clamp(280px, 32vw, 420px)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 8,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="proj-img"
                  style={{ objectFit: 'cover' }}
                />
                {/* gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.2) 50%,transparent 100%)' }} />

                {/* content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 32px', zIndex: 2 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700,
                        padding: '4px 10px', borderRadius: 4,
                        background: 'rgba(255,255,255,0.12)', color: '#fff',
                        backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)'
                      }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: "'Inter','Noto Sans SC',sans-serif", fontWeight: 800,
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', color: '#fff', margin: '0 0 8px'
                  }}>{p.name}</h3>
                  <p style={{
                    fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 13,
                    color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5,
                    maxWidth: '90%'
                  }}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <span className="btn-case" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 36px', borderRadius: 100,
              border: '1.5px solid rgba(58,102,80,0.2)',
              color: '#3a6650',
              fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14,
              transition: 'all 0.3s',
              background: 'transparent',
              cursor: 'pointer',
            }}>案例赏析 →</span>
          </Link>
        </div>
      </div>

      <style>{`
        .proj-card:hover .proj-img { transform: scale(1.06); }
        .proj-img { transition: transform 0.7s ease; }
        .btn-case:hover {
          background: rgba(58,102,80,0.05);
          border-color: rgba(58,102,80,0.4);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .proj-container { padding: 0 20px !important; }
          #projects-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          #projects { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
