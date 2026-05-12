'use client';

import Image from 'next/image';

const cards = [
  {
    id:'hw', title:'硬件与互动', subtitle:'数字人 · 触感系统', accent:'#2a6e6e',
    desc:'集成数字人与触控系统，通过多感官交互技术，让单向参观变为有温度的双向对话，打造品牌记忆点。',
    img:'/digital-human.png',
    icon:<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.403 2.399l-3.593-.828-3.963 3.963-3.963-3.963-3.593.828c-1.434.3-2.403-1.4-1.403-2.399L5 14.5" /></svg>,
  },
  {
    id:'web', title:'线上数字展厅', subtitle:'Web平台 · 品牌网站', accent:'#3a6650',
    desc:'定制化云端数字展厅，突破地理与时间限制，为品牌提供 7×24 小时的全球化展示与交互入口。',
    img:'/digital-web.png',
    icon:<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" /></svg>,
  },
];

function TiltCard({ card }: { card: typeof cards[0] }) {
  return (
    <div className="digital-card"
      style={{
        background:'#fff', border:'1px solid rgba(0,0,0,0.06)',
        borderRadius:8, overflow:'hidden',
        boxShadow:'0 15px 45px rgba(0,0,0,0.05)',
        transition:'all 0.4s cubic-bezier(0.22,1,0.36,1)',
      }}>
      {/* image */}
      <div style={{ height:260, overflow:'hidden', position:'relative' }}>
        <Image
          src={card.img}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="dc-img"
          style={{ objectFit:'cover', transition:'transform 0.8s ease' }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.9) 100%)' }} />
        {/* icon badge */}
        <div style={{
          position:'absolute', top:20, left:20,
          width:42, height:42, borderRadius:12,
          background:'rgba(255,255,255,0.95)',
          border:`1px solid ${card.accent}25`,
          display:'flex', alignItems:'center', justifyContent:'center',
          color: card.accent,
          boxShadow:'0 4px 12px rgba(0,0,0,0.08)'
        }}>{card.icon}</div>
      </div>

      {/* text */}
      <div style={{ padding:'28px 32px 36px' }}>
        <p style={{
          fontFamily:"'Inter', sans-serif", fontSize:11, letterSpacing:'0.15em',
          textTransform:'uppercase', color:card.accent, marginBottom:10, fontWeight:700
        }}>{card.subtitle}</p>
        <h3 style={{
          fontFamily:"'Inter','Noto Sans SC',sans-serif", fontWeight:800,
          fontSize:'clamp(1.2rem, 2vw, 1.6rem)', color:'#0d0d0d', margin:'0 0 12px',
          letterSpacing:'-0.01em'
        }}>{card.title}</h3>
        <div style={{ width:32, height:1.5, background:card.accent, opacity:0.3, marginBottom:16 }} />
        <p style={{
          fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:15,
          lineHeight:1.8, color:'#555', margin:0
        }}>{card.desc}</p>
      </div>
    </div>
  );
}

export default function DigitalSection() {
  return (
    <section id="digital" style={{ background:'#f0f5f2', padding:'100px 0', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(58,102,80,0.15),transparent)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 48px' }} className="digital-container">
        <div style={{ textAlign:'center', marginBottom:72 }}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:14, marginBottom:24 }}>
            <div style={{ width:32, height:1.5, background:'linear-gradient(to right, transparent, #3a6650)' }} />
            <span style={{
              fontFamily:"'Inter', sans-serif", fontSize:11, fontWeight:700,
              letterSpacing:'0.16em', textTransform:'uppercase', color:'#3a6650'
            }}>
              数字交互
            </span>
            <div style={{ width:32, height:1.5, background:'linear-gradient(to left, transparent, #3a6650)' }} />
          </div>
          <h2 style={{
            fontFamily:"'Inter','Noto Sans SC',sans-serif", fontWeight:900,
            fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', color:'#0d0d0d', margin:'0 0 16px',
            lineHeight:1.1, letterSpacing: '-0.02em'
          }}>
            不仅仅是物理空间，<br />
            更是<span style={{ color: '#3a6650' }}>数字维度</span>的延伸
          </h2>
          <p style={{
            fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:15, color:'#888',
            maxWidth:500, margin:'0 auto', lineHeight:1.6
          }}>
            虚实融合，连接当下与未来的文化叙事。通过数字化身与云端平台，赋予空间无限可能。
          </p>
        </div>

        <div id="digital-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
          {cards.map((c) => <TiltCard key={c.id} card={c} />)}
        </div>
      </div>

      <style>{`
        .digital-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.1) !important;
        }
        .digital-card:hover .dc-img { transform: scale(1.06); }
        @media (max-width: 768px) {
          .digital-container { padding: 0 20px !important; }
          #digital-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          #digital { padding: 80px 0 !important; }
          .digital-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
