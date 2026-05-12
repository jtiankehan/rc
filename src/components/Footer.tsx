'use client';

import { motion } from 'framer-motion';

const EMAIL = 'Hello@reicen.com';
const WECHAT_KF = 'https://work.weixin.qq.com/kfid/kfc4029faea9a56f196';

export default function Footer() {

  return (
    <>
    <footer id="contact" style={{ background:'#fff', borderTop:'1px solid rgba(0,0,0,0.07)', position:'relative', overflow: 'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right,transparent,rgba(58,102,80,0.2),transparent)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding: '80px 48px 40px' }} className="footer-container">
        {/* CTA hero text */}
        <div style={{ textAlign:'center', paddingBottom:60, borderBottom:'1px solid rgba(0,0,0,0.06)', marginBottom:60 }}>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:14, marginBottom:24 }}>
            <div style={{ width:32, height:1.5, background:'linear-gradient(to right, transparent, #3a6650)' }} />
            <span style={{ 
              fontFamily:"'Inter', sans-serif", fontSize:11, fontWeight:700, 
              letterSpacing:'0.16em', textTransform:'uppercase', color:'#3a6650' 
            }}>CONTACT US</span>
            <div style={{ width:32, height:1.5, background:'linear-gradient(to left, transparent, #3a6650)' }} />
          </div>

          <h2 style={{ 
            fontFamily:"'Inter','Noto Sans SC',sans-serif", fontWeight:900, 
            fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', color:'#0d0d0d', margin:'0 0 40px', 
            lineHeight:1.1, letterSpacing: '-0.02em'
          }}>
            准备好讲述您的<br />
            <span style={{ color: '#3a6650' }}>空间故事</span>了吗？
          </h2>

          {/* 企业微信 CTA 按钮 */}
          <a
            href={WECHAT_KF}
            target="_blank" rel="noreferrer"
            className="footer-cta-btn"
            style={{
              display:'inline-flex', alignItems:'center', gap:12,
              textDecoration:'none',
              background:'linear-gradient(135deg,#5d9070,#3a6650)',
              color:'#fff',
              fontSize:'16px',
              fontWeight:700,
              padding:'18px 44px', borderRadius:100,
              boxShadow:'0 8px 24px rgba(58,102,80,0.25)',
              transition: 'all 0.3s ease'
            }}
          >
            免费获取策划方案
          </a>
        </div>

        {/* info grid */}
        <div id="footer-grid" style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr', gap:60 }}>
          {/* brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#5d9070,#3a6650)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:15, fontFamily: 'Georgia, serif' }}>R</div>
              <div>
                <div style={{ fontWeight:800, fontSize:15, color:'#111', fontFamily: "'Inter','Noto Sans SC',sans-serif" }}>瑞承文化</div>
                <div style={{ fontSize:10, color:'#bbb', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Ruicheng Culture</div>
              </div>
            </div>
            <p style={{ 
              fontSize:14, lineHeight:1.8, color:'#777', margin:0, 
              fontFamily: "'Inter','Noto Sans SC',sans-serif", maxWidth: 280 
            }}>
              专注展览展示、数字交互与工程落地的一体化文化解决方案服务商。用数字科技赋能空间叙事。
            </p>
          </div>

          {/* services */}
          <div>
            <h4 style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', color:'#3a6650', marginBottom:24, marginTop:0, letterSpacing: '0.1em' }}>核心服务</h4>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:12 }}>
              {['展馆设计与施工','数字虚拟体验','多媒体互动系统','商业空间重塑','策展与品牌策划'].map(s => (
                <li key={s} style={{ 
                  display:'flex', alignItems:'center', gap:10, fontSize:14, color:'#666',
                  fontFamily: "'Inter','Noto Sans SC',sans-serif" 
                }}>
                  <span style={{ width:4, height:4, borderRadius:'50%', background:'#3a6650', opacity:0.4 }} />{s}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', color:'#3a6650', marginBottom:24, marginTop:0, letterSpacing: '0.1em' }}>联系方式</h4>
            <div style={{ 
              fontSize:14, color:'#666', lineHeight:1.8,
              fontFamily: "'Inter','Noto Sans SC',sans-serif" 
            }}>
              <p style={{ margin: '0 0 8px' }}>总部地址：四川省成都市</p>
              <p style={{ margin: 0 }}>联系邮件：<span style={{ color: '#3a6650', fontWeight: 500 }}>{EMAIL}</span></p>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div style={{ 
          marginTop:80, paddingTop:24, borderTop:'1px solid rgba(0,0,0,0.06)', 
          display:'flex', justifyContent:'space-between', alignItems:'center', 
          flexWrap:'wrap', gap:20 
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' }}>
            <p style={{ fontSize:12, color:'#aaa', margin:0, fontFamily: "'Inter', sans-serif" }}>© 2026 瑞承文化. All rights reserved.</p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" style={{ fontSize:12, color:'#aaa', textDecoration:'none', fontFamily: "'Inter', sans-serif" }}>蜀ICP备2024098185号</a>
          </div>
          <p style={{ fontSize:12, color:'rgba(58,102,80,0.5)', margin:0, fontWeight: 500, letterSpacing: '0.05em' }}>立足四川，服务全国。</p>
        </div>
      </div>

      <style>{`
        .footer-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(58,102,80,0.35);
        }
        @media (max-width: 768px) {
          .footer-container { padding: 60px 24px 40px !important; }
          #footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          h2 { margin-bottom: 32px !important; }
        }
      `}</style>
    </footer>

      {/* ── 右下角浮动微信客服按钮 ── */}
      <a
        id="wechat-float-btn"
        href="https://work.weixin.qq.com/kfid/kfc4029faea9a56f196"
        target="_blank" rel="noreferrer"
        title="微信客服"
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg,#5d9070,#3a6650)',
          boxShadow: '0 6px 24px rgba(58,102,80,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1) translateY(-4px)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 36px rgba(58,102,80,0.45)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1) translateY(0)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(58,102,80,0.35)';
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="white"/>
          <path d="M12 2C6.477 2 2 6.253 2 11.5c0 2.304.87 4.41 2.308 6.032L3.5 21l3.632-1.817A10.45 10.45 0 0 0 12 21c5.523 0 10-4.253 10-9.5S17.523 2 12 2Zm0 17c-1.47 0-2.864-.37-4.075-1.022l-.29-.16-2.156 1.078.549-2.195-.202-.24A7.522 7.522 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5S16.418 19 12 19Z" fill="white"/>
        </svg>
        <span className="pulse-ring" style={{
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
          @media (max-width: 768px) {
            #wechat-float-btn { bottom: 20px !important; right: 20px !important; width: 48px !important; height: 48px !important; }
            .pulse-ring { inset: -3px !important; }
          }
        `}</style>
      </a>
    </>
  );
}
