'use client';

import HeroCanvas from './HeroCanvas';

export default function CinematicHero() {
  return (
    <section
      id="hero"
      style={{
        width: '100vw',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-start',
        background: '#fff',
        position: 'relative', overflow: 'hidden',
        paddingTop: '80px', paddingBottom: '80px',
      }}
    >
      {/* ── 居中内容容器 ── */}
      <div id="hero-grid" style={{
        maxWidth: 1200, width: '100%',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 0.9fr',
        gap: '80px',
        alignItems: 'center',
        zIndex: 10,
      }}>

        {/* 左：文案 */}
        <div className="hero-text-col">
          {/* 主标题 */}
          <h1 style={{
            fontFamily: "'Inter','Noto Sans SC',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 4.2vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#0d0d0d',
            margin: '0 0 28px 0',
          }}>
            筑造空间叙事 <br />
            <span style={{
              background: 'linear-gradient(130deg,#3a6650 0%,#5d9070 55%,#80b595 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>重塑文化体验</span>
          </h1>

          {/* 副文案 */}
          <div className="hero-sub" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 1.5, background: 'linear-gradient(to right,#3a6650,transparent)', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter','Noto Sans SC',sans-serif",
                fontSize: 11, letterSpacing: '0.12em', color: '#999', textTransform: 'uppercase',
                fontWeight: 600
              }}>空间叙事者 / 文化与科技链接</span>
            </div>
            <p style={{
              fontFamily: "'Inter','Noto Sans SC',sans-serif",
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              lineHeight: 1.85,
              color: '#555',
              maxWidth: 460,
              margin: 0,
            }}>
              瑞承文化 —— 专注展览展示、数字交互的一体化解决方案。通过艺术与数字科技的融合，为品牌打造跨越物理维度的沉浸式叙事空间。
            </p>
          </div>
        </div>

        {/* 右：视觉区域 */}
        <div
          id="hero-canvas-wrap"
          className="hero-canvas-anim"
          style={{
            position: 'relative',
            height: 'clamp(320px, 48vh, 500px)',
            zIndex: 5
          }}
        >
          <div
            style={{
              width: '100%', height: '100%', overflow: 'hidden', position: 'relative',
              background: 'linear-gradient(145deg,#f5faf7 0%,#eef5f0 50%,#f8fbf9 100%)',
              border: '1px solid rgba(58,102,80,0.1)',
              borderRadius: 4
            }}
          >
            {/* 手机端背景图降级 */}
            <div className="mobile-bg" style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'url("/hero-arch.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'none'
            }} />

            <HeroCanvas />

            {/* 装饰边框 */}
            <div style={{ position: 'absolute', inset: 12, border: '1px solid rgba(58,102,80,0.2)', pointerEvents: 'none' }} />

            {/* 提示文字 */}
            <div style={{ position:'absolute', bottom:16, left:0, right:0, textAlign:'center', pointerEvents:'none' }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, letterSpacing:'0.12em', color:'rgba(58,102,80,0.45)', textTransform:'uppercase' }}>move cursor to interact</span>
            </div>
          </div>
          {/* 装饰阴影/框 */}
          <div className="hero-deco-border" style={{ position: 'absolute', bottom: -12, right: -12, width: '100%', height: '100%', border: '1.5px solid rgba(58,102,80,0.12)', zIndex: -1 }} />
        </div>
      </div>

      <style>{`
        .hero-text-col {
          animation: heroFadeUp 0.8s ease both;
        }
        .hero-sub {
          animation: heroFadeUp 0.8s 0.15s ease both;
        }
        .hero-canvas-anim {
          animation: heroFadeRight 0.9s 0.2s ease both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          #hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 0 24px !important;
          }
          #hero-canvas-wrap {
            height: 260px !important;
          }
          .mobile-bg { display: block !important; }
          .hero-deco-border { display: none !important; }
        }
      `}</style>
    </section>
  );
}
