'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ALL_PROJECTS = [
  {
    id: 'cigar', name: '长城雪茄厂博物馆',
    tags: ['展陈改造', '文化溯源'],
    desc: '百年烟雨的时光回溯，二楼展区展示空间的整体焕新与叙事表达。',
    img: '/proj-cigar.png', accent: '#8b6a3a',
  },
  {
    id: 'tea', name: '蒙顶山茶史博物馆',
    tags: ['数字孪生', '互动系统'],
    desc: '"虚拟茶园"全息交互体验，用数字技术复刻传统茶文化脉络。',
    img: '/proj-tea.png', accent: '#3a7260',
  },
  {
    id: 'wuliang', name: '五粮液博物馆',
    tags: ['历史叙事', '沉浸体验'],
    desc: '以酒文化为核心叙事轴，打造融合历史文献、互动体验与感官沉浸的白酒文化旗舰展馆。',
    img: '/proj-bio.png', /* 占位图，待替换 */ accent: '#7a5a2a',
  },
  {
    id: 'art', name: '天府艺术公园"破土：春"',
    tags: ['青年艺术', '策展单元'],
    desc: '联合本地中学打造的实验性艺术孵化场，探索青年视觉的无限可能。',
    img: '/proj-art.png', accent: '#5a3a7a',
  },
  {
    id: 'digital', name: '蒙顶山数字展厅',
    tags: ['数字展厅', 'LED 叙事'],
    desc: '大型 LED 沉浸叙事空间，融合雪山、茶园、古道三大文化意象。',
    img: '/digital-human.png', accent: '#3a6050',
  },
  {
    id: 'brand', name: '云叶茶空间品牌网站',
    tags: ['品牌数字化', 'Web 开发'],
    desc: '高端茶空间品牌官网，以"云上茶园"为视觉语言，兼顾预约与电商。',
    img: '/digital-web.png', accent: '#4a6a50',
  },
];

const vp = { once: true, margin: '-40px' } as const;

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '16px 48px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg,#5d9070,#3a6650)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 900, fontSize: 12, fontFamily: 'Georgia,serif',
          }}>R</div>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', color: '#111', textTransform: 'uppercase' }}>瑞承文化</span>
        </Link>
        <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: 14 }}>/</span>
        <span style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 13, color: '#666' }}>案例赏析</span>
      </header>

      {/* Page Hero */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px 56px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(to right,#3a6650,transparent)' }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3a6650' }}>
              ALL PROJECTS
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Inter','Noto Sans SC',sans-serif",
            fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)',
            letterSpacing: '-0.025em', color: '#0d0d0d', margin: '0 0 16px',
          }}>
            全部<span style={{ background: 'linear-gradient(130deg,#3a6650,#5d9070)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>案例</span>
          </h1>
          <p style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 15, color: '#888', maxWidth: 440, margin: 0 }}>
            凝聚创意与匠心，见证品牌与文化的精彩呈现
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {ALL_PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="proj-card" style={{ height: 'clamp(240px,28vw,340px)', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
                <Image src={p.img} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="proj-img" style={{ objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.3) 45%,transparent 100%)' }} />
                <div style={{ position: 'absolute', top: 18, right: 20, fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 22px', zIndex: 2 }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 7 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 700,
                        letterSpacing: '0.08em', padding: '3px 9px', borderRadius: 2,
                        background: `${p.accent}30`, border: `1px solid ${p.accent}60`,
                        color: p.accent, filter: 'brightness(1.8)',
                      }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontWeight: 900, fontSize: 'clamp(1rem,1.8vw,1.25rem)', color: '#fff', margin: '0 0 5px', lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={vp} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 64, paddingTop: 56, borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <p style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif", fontSize: 14, color: '#aaa', marginBottom: 20 }}>有意向合作？欢迎与我们聊聊</p>
          <a href="mailto:Hello@reicen.com" style={{
            display: 'inline-block',
            padding: '12px 32px', borderRadius: 100,
            border: '1.5px solid rgba(0,0,0,0.14)',
            fontFamily: "'Inter','Noto Sans SC',sans-serif", fontWeight: 600, fontSize: 14,
            color: '#333', textDecoration: 'none', letterSpacing: '0.04em',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#3a6650'; e.currentTarget.style.color = '#3a6650'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.14)'; e.currentTarget.style.color = '#333'; }}
          >联系我们 →</a>
        </motion.div>
      </section>

      <style>{`
        .proj-card:hover .proj-img { transform: scale(1.05); }
      `}</style>
    </main>
  );
}
