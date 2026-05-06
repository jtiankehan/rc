'use client';

import { motion } from 'framer-motion';
import ScrollVideo from './ScrollVideo';

const tags = ['展馆设计与施工', '数字虚拟体验', '商业空间重塑'];
const textLines = [
  { text: '扎根成都，辐射全国。', bold: true },
  { text: '我们认为，每一个空间都拥有独特的文化心跳。', bold: false },
  { text: '从传统的文化展馆到前沿的数字化交互空间，', bold: false },
  { text: '我们打破静态边界，提供从概念策划、', bold: false },
  { text: '视觉设计到精工落地实施的全链路服务。', bold: false },
];

const vp = { once: true, margin: '-80px' } as const;
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22,1,0.36,1] as const } },
});

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#f5f8f6', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* subtle top divider */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(58,102,80,0.2),transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.78fr', gap: '80px', alignItems: 'center' }}>

          {/* Left: text */}
          <div>
            {/* eyebrow */}
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={vp}>
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
                <div style={{ width:32, height:1.5, background:'linear-gradient(to right,#3a6650,transparent)' }} />
                <span style={{
                  fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700,
                  letterSpacing:'0.16em', textTransform:'uppercase', color:'#3a6650',
                }}>关于我们</span>
              </div>
            </motion.div>

            {/* H2 */}
            <motion.h2 variants={fadeUp(0.08)} initial="hidden" whileInView="visible" viewport={vp}
              style={{
                fontFamily:"'Inter','Helvetica Neue',sans-serif", fontWeight:900,
                fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.1,
                letterSpacing:'-0.025em', color:'#0d0d0d', margin:'0 0 28px',
              }}>
              跨越物理边界的<br />
              <span style={{ background:'linear-gradient(130deg,#3a6650,#5d9070)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                展示艺术
              </span>
            </motion.h2>

            {/* body lines — stagger */}
            <div style={{ marginBottom:28 }}>
              {textLines.map((l,i) => (
                <motion.p key={i} variants={fadeUp(0.12+i*0.07)} initial="hidden" whileInView="visible" viewport={vp}
                  style={{
                    fontFamily:"'Inter','Noto Sans SC',sans-serif",
                    fontSize:15, lineHeight:1.85, margin:'0 0 2px',
                    color: l.bold ? '#111' : '#666',
                    fontWeight: l.bold ? 600 : 400,
                  }}>{l.text}</motion.p>
              ))}
            </div>

            {/* tags */}
            <motion.div variants={fadeUp(0.55)} initial="hidden" whileInView="visible" viewport={vp}
              style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:36 }}>
              {tags.map(t => (
                <span key={t} style={{
                  display:'inline-flex', alignItems:'center', gap:7,
                  padding:'7px 18px', borderRadius:100,
                  background:'rgba(58,102,80,0.07)', border:'1px solid rgba(58,102,80,0.2)',
                  fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:13,
                  fontWeight:500, color:'#3a6650',
                }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#3a6650', flexShrink:0 }} />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* stats */}
            <motion.div variants={fadeUp(0.65)} initial="hidden" whileInView="visible" viewport={vp}
              style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:'1px solid rgba(0,0,0,0.07)', paddingTop:28 }}>
              {[['10+','年行业积累'],['50+','落地项目'],['11+','合作品牌']].map(([n,l],i) => (
                <div key={l} style={{ textAlign:'center', borderRight:i<2?'1px solid rgba(0,0,0,0.07)':'none', padding:'0 12px' }}>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:900, fontSize:'clamp(1.6rem,2.8vw,2.2rem)', color:'#111', letterSpacing:'-0.02em' }}>{n}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'#aaa', marginTop:4, letterSpacing:'0.06em' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: scroll-driven video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }}
            style={{ position: 'relative', height: 'clamp(360px,52vh,520px)', overflow: 'hidden' }}
          >
            <ScrollVideo src="/show.webm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
