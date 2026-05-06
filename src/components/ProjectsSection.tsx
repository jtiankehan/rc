'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 'cigar', name: '长城雪茄厂博物馆', tags: ['展陈改造', '文化溯源'],
    desc: '百年烟雨的时光回溯，二楼展区展示空间的整体焕新与叙事表达。', img: '/proj-cigar.webp', accent: '#8b6a3a'
  },
  {
    id: 'tea', name: '生物多样性博览园', tags: ['生态展陈', '沉浸体验'],
    desc: '以生物多样性为叙事核心，融合数字影像与互动装置，打造自然与科技共鸣的沉浸式展览空间。', img: '/proj-tea.webp', accent: '#3a7260'
  },
  {
    id: 'wuliang', name: '五粮液博物馆', tags: ['历史叙事', '沉浸体验'],
    desc: '以酒文化为核心叙事轴，打造融合历史文献、互动体验与感官沉浸的白酒文化旗舰展馆。', img: '/proj-bio.webp', accent: '#7a5a2a'
  },
  {
    id: 'art', name: '天府艺术公园"破土：春"', tags: ['青年艺术', '策展单元'],
    desc: '联合本地中学打造的实验性艺术孵化场，探索青年视觉的无限可能。', img: '/proj-art.webp', accent: '#5a3a7a'
  },
];

const vp = { once: true, margin: '-60px' } as const;

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#fff', padding: '80px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right,transparent,rgba(0,0,0,0.07),transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.65 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 24, height: 1.5, background: 'rgba(0,0,0,0.15)' }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3a6650' }}>
              精选案例
            </span>
            <div style={{ width: 24, height: 1.5, background: 'rgba(0,0,0,0.15)' }} />
          </div>
          <h2 style={{ fontFamily: "'Inter','Helvetica Neue',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.025em', color: '#0d0d0d', margin: '0 0 14px' }}>
            经典案例<span style={{ background: 'linear-gradient(130deg,#3a6650,#5d9070)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>大赏</span>
          </h2>
          <p style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 15, color: '#888', maxWidth: 440, margin: '0 auto' }}>
            每一个项目都凝聚着创意与匠心，见证品牌与文化的精彩呈现
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="proj-card" style={{ height: 'clamp(260px,30vw,380px)', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw"
                  className="proj-img"
                  style={{ objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }}
                  priority={i < 2}
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                {/* gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.3) 45%,transparent 100%)' }} />

                {/* top-right index */}
                <div style={{ position: 'absolute', top: 18, right: 20, fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* bottom content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', zIndex: 2 }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 700,
                        letterSpacing: '0.08em', padding: '3px 9px', borderRadius: 2,
                        background: `${p.accent}30`, border: `1px solid ${p.accent}60`, color: `${p.accent}`,
                        filter: 'brightness(1.8)',
                      }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontWeight: 900, fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: '#fff', margin: '0 0 6px', lineHeight: 1.25 }}>{p.name}</h3>
                  <p style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6, maxWidth: 340 }}>{p.desc}</p>
                </div>

                {/* shimmer on hover */}
                <div className="proj-shimmer" style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.04) 50%,rgba(255,255,255,0.06) 52%,rgba(255,255,255,0.04) 54%,transparent 62%)',
                  opacity: 0, transition: 'opacity 0.3s, transform 0.6s',
                  transform: 'translateX(-100%)',
                }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.6, delay: 0.5 }} style={{ textAlign: 'center', marginTop: 44 }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <span style={{
              display: 'inline-block',
              padding: '12px 32px', borderRadius: 100,
              border: '1.5px solid rgba(0,0,0,0.14)',
              background: 'transparent', color: '#333',
              fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 14,
              cursor: 'pointer', letterSpacing: '0.04em',
            }}>案例赏析 →</span>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .proj-card:hover .proj-img { transform: scale(1.05); }
        .proj-card:hover .proj-shimmer { opacity:1; transform:translateX(100%); }
      `}</style>
    </section>
  );
}
