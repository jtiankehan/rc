'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    id:'hw', title:'硬件与互动', subtitle:'数字人 · 触感系统', accent:'#2a6e6e',
    desc:'集成数字人与触控系统，平均提升观众停留时长 200%+——让单向参观变为有温度的双向对话，展馆口碑自然裂变。',
    img:'/digital-human.webp',
    icon:<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.403 2.399l-3.593-.828-3.963 3.963-3.963-3.963-3.593.828c-1.434.3-2.403-1.4-1.403-2.399L5 14.5" /></svg>,
  },
  {
    id:'web', title:'线上数字展厅', subtitle:'Web平台 · 品牌网站', accent:'#3a6650',
    desc:'定制化数字展厅突破地理边界，让品牌文化 7×24 小时持续触达全国客群——线上曝光即是线下引流的最强入口。',
    img:'/digital-web.webp',
    icon:<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" /></svg>,
  },
];

const vp = { once: true, margin: '-80px' } as const;

function TiltCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame   = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = cardRef.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${y*-6}deg) rotateY(${x*8}deg)`;
    });
  }, []);
  const onLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    if (cardRef.current) cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }, []);

  return (
    <motion.div
      initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }} viewport={vp}
      transition={{ duration:0.7, delay, ease:[0.22,1,0.36,1] as const }}>
      <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}
        className="digital-card"
        style={{
          background:'#fff', border:'1px solid rgba(0,0,0,0.07)',
          borderRadius:4, overflow:'hidden',
          boxShadow:'0 2px 20px rgba(0,0,0,0.05)',
          willChange:'transform',
          transition:'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s',
        }}>
        {/* image */}
        <div style={{ height:220, overflow:'hidden', position:'relative' }}>
          <Image
            src={card.img}
            alt={card.title}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw"
            className="dc-img"
            style={{ objectFit:'cover', transition:'transform 0.65s ease' }}
            loading="lazy"
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.85) 100%)' }} />
          {/* icon badge */}
          <div style={{
            position:'absolute', top:16, left:16,
            width:36, height:36, borderRadius:10,
            background:'rgba(255,255,255,0.92)',
            border:`1px solid ${card.accent}30`,
            display:'flex', alignItems:'center', justifyContent:'center',
            color: card.accent,
          }}>{card.icon}</div>
        </div>

        {/* text */}
        <div style={{ padding:'22px 24px 28px' }}>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:card.accent, marginBottom:6 }}>{card.subtitle}</p>
          <h3 style={{ fontFamily:"'Inter','Helvetica Neue',sans-serif", fontWeight:800, fontSize:'1.25rem', color:'#0d0d0d', margin:'0 0 10px', letterSpacing:'-0.01em' }}>{card.title}</h3>
          <div style={{ width:28, height:1.5, background:card.accent, opacity:0.4, marginBottom:12 }} />
          <p style={{ fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:14, lineHeight:1.75, color:'#666', margin:0 }}>{card.desc}</p>
        </div>

        {/* hover color line */}
        <div className="dc-line" style={{ height:2, background:`linear-gradient(to right,transparent,${card.accent},transparent)`, opacity:0, transition:'opacity 0.3s' }} />
      </div>
    </motion.div>
  );
}

export default function DigitalSection() {
  return (
    <section id="digital" style={{ background:'#f0f5f2', padding:'80px 0', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(58,102,80,0.15),transparent)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 48px' }}>
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={vp}
          transition={{ duration:0.65 }} style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:14, marginBottom:20 }}>
            <div style={{ width:24, height:1.5, background:'rgba(0,0,0,0.15)' }} />
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#3a6650' }}>
              数字交互
            </span>
            <div style={{ width:24, height:1.5, background:'rgba(0,0,0,0.15)' }} />
          </div>
          <h2 style={{ fontFamily:"'Inter','Helvetica Neue',sans-serif", fontWeight:900, fontSize:'clamp(1.8rem,3.5vw,2.8rem)', letterSpacing:'-0.025em', color:'#0d0d0d', margin:'0 0 14px', lineHeight:1.2 }}>
            不仅是物理空间，<br />
            更是<span style={{ background:'linear-gradient(130deg,#3a6650,#5d9070)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>数字维度</span>的延伸
          </h2>
          <p style={{ fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:15, color:'#888', maxWidth:420, margin:'0 auto' }}>
            虚实融合，连接当下与未来的文化叙事
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
          {cards.map((c,i) => <TiltCard key={c.id} card={c} delay={0.12+i*0.14} />)}
        </div>
      </div>

      <style>{`
        .digital-card:hover { box-shadow: 0 12px 48px rgba(0,0,0,0.1) !important; }
        .digital-card:hover .dc-img { transform: scale(1.04); }
        .digital-card:hover .dc-line { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
