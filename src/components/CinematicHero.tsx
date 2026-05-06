'use client';

import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

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
        paddingTop: '68px', paddingBottom: '60px',
      }}
    >

      {/* ── 居中内容容器 ── */}
      <div style={{
        maxWidth: 1200, width: '100%',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 0.9fr',
        gap: '80px',
        alignItems: 'center',
        zIndex: 10,
      }}>

        {/* 左：文案 */}
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >

          {/* 主标题 */}
          <motion.h1 variants={fadeUp} style={{
            fontFamily: "'Inter','Noto Sans SC',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem,3.8vw,3.5rem)',
            lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#0d0d0d', margin: 0,
          }}>
            筑造空间叙事 <br />
            <span style={{
              background: 'linear-gradient(130deg,#3a6650 0%,#5d9070 55%,#80b595 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>重塑文化体验</span>
          </motion.h1>

          {/* 副文案 */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 1.5, background: 'linear-gradient(to right,#3a6650,transparent)', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter','Noto Sans SC',sans-serif",
                fontSize: 11, letterSpacing: '0.1em', color: '#aaa', textTransform: 'uppercase',
              }}>空间叙事者 / 文化与科技链接</span>
            </div>
            <p style={{
              fontFamily: "'Inter','Noto Sans SC',sans-serif",
              fontSize: 15, lineHeight: 1.85, color: '#555', maxWidth: 400, margin: 0,
            }}>
              瑞承文化 —— 专注展览展示、数字交互的一体化解决方案。
            </p>
          </motion.div>
        </motion.div>

        {/* 右：Canvas 动态交互 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 'clamp(320px,46vh,480px)' }}
        >
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
            style={{
              width: '100%', height: '100%', overflow: 'hidden', position: 'relative',
              background: 'linear-gradient(145deg,#f5faf7 0%,#eef5f0 50%,#f8fbf9 100%)',
              border: '1px solid rgba(58,102,80,0.1)',
            }}
          >
            <HeroCanvas />
            {/* 四角装饰线 */}
            <div style={{ position:'absolute', top:12, left:12, width:20, height:20, borderTop:'1.5px solid rgba(58,102,80,0.4)', borderLeft:'1.5px solid rgba(58,102,80,0.4)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', top:12, right:12, width:20, height:20, borderTop:'1.5px solid rgba(58,102,80,0.4)', borderRight:'1.5px solid rgba(58,102,80,0.4)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:12, left:12, width:20, height:20, borderBottom:'1.5px solid rgba(58,102,80,0.4)', borderLeft:'1.5px solid rgba(58,102,80,0.4)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', bottom:12, right:12, width:20, height:20, borderBottom:'1.5px solid rgba(58,102,80,0.4)', borderRight:'1.5px solid rgba(58,102,80,0.4)', pointerEvents:'none' }} />
            {/* 提示文字 */}
            <div style={{ position:'absolute', bottom:16, left:0, right:0, textAlign:'center', pointerEvents:'none' }}>
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, letterSpacing:'0.12em', color:'rgba(58,102,80,0.45)', textTransform:'uppercase' }}>move cursor to interact</span>
            </div>
          </motion.div>
          {/* 偶数框 */}
          <div style={{ position: 'absolute', bottom: -12, right: -12, width: '100%', height: '100%', border: '1.5px solid rgba(58,102,80,0.18)', zIndex: -1 }} />
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
