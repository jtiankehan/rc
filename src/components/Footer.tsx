'use client';

import { motion } from 'framer-motion';

const EMAIL = 'Hello@reicen.com';
const WECHAT_KF = 'https://work.weixin.qq.com/kfid/kfc4029faea9a56f196';

export default function Footer() {

  return (
    <>
    <footer id="contact" style={{ background:'#fff', borderTop:'1px solid rgba(0,0,0,0.07)', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(58,102,80,0.25),transparent)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'100px 48px 48px' }}>

        {/* CTA hero text */}
        <motion.div
          initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-80px' }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          style={{ textAlign:'center', paddingBottom:64, borderBottom:'1px solid rgba(0,0,0,0.07)', marginBottom:56 }}>

          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:14, marginBottom:24 }}>
            <div style={{ width:20, height:1.5, background:'rgba(0,0,0,0.15)' }} />
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#3a6650' }}>CONTACT US</span>
            <div style={{ width:20, height:1.5, background:'rgba(0,0,0,0.15)' }} />
          </div>

          <h2 style={{ fontFamily:"'Inter','Helvetica Neue',sans-serif", fontWeight:900, fontSize:'clamp(1.8rem,4.5vw,3.8rem)', letterSpacing:'-0.03em', color:'#0d0d0d', margin:'0 0 36px', lineHeight:1.15 }}>
            准备好讲述您的<br />
            <span style={{ background:'linear-gradient(130deg,#3a6650,#5d9070)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              空间故事
            </span>了吗？
          </h2>

          {/* 企业微信 CTA 按钮 */}
          <motion.a
            href={WECHAT_KF}
            target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display:'inline-flex', alignItems:'center', gap:12,
              textDecoration:'none',
              background:'linear-gradient(135deg,#5d9070,#3a6650)',
              color:'#fff',
              fontFamily:"'Inter','Noto Sans SC',sans-serif",
              fontSize:'clamp(1rem,2vw,1.25rem)',
              fontWeight:700, letterSpacing:'0.02em',
              padding:'18px 44px', borderRadius:100,
              boxShadow:'0 4px 24px rgba(58,102,80,0.32)',
              transition:'box-shadow 0.2s',
            }}
            onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 36px rgba(58,102,80,0.46)'; }}
            onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 4px 24px rgba(58,102,80,0.32)'; }}
          >
            {/* WeChat icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9.5 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="white"/>
              <path d="M12 2C6.477 2 2 6.253 2 11.5c0 2.304.87 4.41 2.308 6.032L3.5 21l3.632-1.817A10.45 10.45 0 0 0 12 21c5.523 0 10-4.253 10-9.5S17.523 2 12 2Zm0 17c-1.47 0-2.864-.37-4.075-1.022l-.29-.16-2.156 1.078.549-2.195-.202-.24A7.522 7.522 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5S16.418 19 12 19Z" fill="white"/>
            </svg>
            免费获取策划方案
          </motion.a>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'#bbb', marginTop:14, letterSpacing:'0.04em' }}>点击即可通过企业微信与我们沟通</p>
        </motion.div>

        {/* info grid */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-80px' }}
          transition={{ duration:0.6, delay:0.3 }}
          style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40 }}>

          {/* brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:30, height:30, borderRadius:8, background:'linear-gradient(135deg,#5d9070,#3a6650)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:13, fontFamily:'Georgia,serif' }}>R</div>
              <div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:14, color:'#111' }}>瑞承文化</div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:'#ccc', letterSpacing:'0.06em' }}>Ruicheng Culture</div>
              </div>
            </div>
            <p style={{ fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:13, lineHeight:1.8, color:'#999', margin:0 }}>
              专注展览展示、数字交互与工程落地的一体化文化解决方案服务商。
            </p>
          </div>

          {/* services */}
          <div>
            <h4 style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#3a6650', marginBottom:18, marginTop:0 }}>核心服务</h4>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:10 }}>
              {['展馆设计与施工','数字虚拟体验','多媒体互动系统','商业空间重塑','策展与品牌策划'].map(s => (
                <li key={s} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:13, color:'#888' }}>
                  <span style={{ width:4, height:4, borderRadius:'50%', background:'#3a6650', opacity:0.5, flexShrink:0 }} />{s}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#3a6650', marginBottom:18, marginTop:0 }}>联系方式</h4>
            {[
              { label:'总部地址', value:'四川省成都市', path:'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              { label:'邮件',    value: EMAIL, path:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            ].map(item => (
              <div key={item.label} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:16 }}>
                <div style={{ width:30, height:30, borderRadius:8, background:'rgba(58,102,80,0.07)', border:'1px solid rgba(58,102,80,0.14)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(58,102,80,0.8)" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.path} /></svg>
                </div>
                <div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, color:'#ccc', letterSpacing:'0.06em', marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:13, color:'#666' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* 微信客服 */}
            <a
              href="https://work.weixin.qq.com/kfid/kfc4029faea9a56f196"
              target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'flex-start', gap:12, textDecoration:'none' }}
            >
              <div style={{ width:30, height:30, borderRadius:8, background:'rgba(58,102,80,0.07)', border:'1px solid rgba(58,102,80,0.14)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {/* WeChat icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="rgba(58,102,80,0.8)"/>
                  <path d="M12 2C6.477 2 2 6.253 2 11.5c0 2.304.87 4.41 2.308 6.032L3.5 21l3.632-1.817A10.45 10.45 0 0 0 12 21c5.523 0 10-4.253 10-9.5S17.523 2 12 2Zm0 17c-1.47 0-2.864-.37-4.075-1.022l-.29-.16-2.156 1.078.549-2.195-.202-.24A7.522 7.522 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5S16.418 19 12 19Z" fill="rgba(58,102,80,0.8)"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, color:'#ccc', letterSpacing:'0.06em', marginBottom:2 }}>微信客服</div>
                <div style={{ fontFamily:"'Inter','Noto Sans SC',sans-serif", fontSize:13, color:'#3a6650' }}>点击联系在线客服 →</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* copyright */}
        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true, margin:'-80px' }}
          transition={{ delay:0.5, duration:0.5 }}
          style={{ marginTop:40, paddingTop:20, borderTop:'1px solid rgba(0,0,0,0.06)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'#ccc', margin:0 }}>© 2026 瑞承文化 (Ruicheng Culture). All rights reserved.</p>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(58,102,80,0.5)', margin:0 }}>立足四川，服务全国。</p>
        </motion.div>
      </div>
    </footer>

      {/* ── 右下角浮动微信客服按钮 ── */}
      <a
        id="wechat-float-btn"
        href="https://work.weixin.qq.com/kfid/kfc4029faea9a56f196"
        target="_blank" rel="noreferrer"
        title="微信客服"
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 9999,
          width: 52, height: 52, borderRadius: '50%',
          background: 'linear-gradient(135deg,#5d9070,#3a6650)',
          boxShadow: '0 4px 20px rgba(58,102,80,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(58,102,80,0.45)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(58,102,80,0.35)';
        }}
      >
        {/* WeChat bubble icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="white"/>
          <path d="M12 2C6.477 2 2 6.253 2 11.5c0 2.304.87 4.41 2.308 6.032L3.5 21l3.632-1.817A10.45 10.45 0 0 0 12 21c5.523 0 10-4.253 10-9.5S17.523 2 12 2Zm0 17c-1.47 0-2.864-.37-4.075-1.022l-.29-.16-2.156 1.078.549-2.195-.202-.24A7.522 7.522 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5S16.418 19 12 19Z" fill="white"/>
        </svg>
        {/* 脉冲光圈 */}
        <span style={{
          position: 'absolute', inset: -4,
          borderRadius: '50%',
          border: '2px solid rgba(93,144,112,0.5)',
          animation: 'wechatPulse 2s ease-out infinite',
        }} />
        <style>{`
          @keyframes wechatPulse {
            0%   { transform: scale(1);   opacity: 0.7; }
            100% { transform: scale(1.6); opacity: 0;   }
          }
        `}</style>
      </a>
    </>
  );
}
