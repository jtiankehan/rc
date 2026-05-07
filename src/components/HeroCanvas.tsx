'use client';

import { useRef, useEffect } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  life: number; maxLife: number;
  colorIdx: number;
}

interface Streak {
  x: number; y: number;
  pts: { x: number; y: number }[];
  vx: number; vy: number;
  colorIdx: number;
  width: number;
  alpha: number;
}

const COLORS = [
  '58,102,80',
  '93,144,112',
  '128,181,149',
  '180,210,160',
  '210,190,120',
];

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, inside: false });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 移动端跳过动画循环，避免旧 iOS 上的性能和兼容性问题
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = canvas.getContext('2d');
    } catch {
      return;
    }
    if (!ctx) return;
    const ctxSafe = ctx;

    let W = 0, H = 0;

    // 安全获取 devicePixelRatio，旧版 Safari 可能为 undefined
    const getDpr = (): number => {
      const dpr = typeof devicePixelRatio === 'number' ? devicePixelRatio : 1;
      return dpr > 0 ? Math.min(dpr, 3) : 1;
    };

    const resize = () => {
      try {
        W = canvas.offsetWidth  || 400;
        H = canvas.offsetHeight || 400;
        const dpr = getDpr();
        canvas.width  = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctxSafe.setTransform(dpr, 0, 0, dpr, 0, 0);
      } catch { /* 静默忽略 */ }
    };

    resize();

    // ResizeObserver 在 iOS 14 部分版本有 bug，提供 window.resize 回退
    let ro: ResizeObserver | null = null;
    const winResize = () => { try { resize(); } catch { /* ignore */ } };
    try {
      if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(winResize);
        ro.observe(canvas);
      } else {
        window.addEventListener('resize', winResize);
      }
    } catch {
      window.addEventListener('resize', winResize);
    }

    // 移动端：只画静态渐变，不跑 rAF 循环
    if (isMobile) {
      try {
        ctxSafe.fillStyle = 'rgba(245,250,247,1)';
        ctxSafe.fillRect(0, 0, W, H);
        const grad = ctxSafe.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, 'rgba(93,144,112,0.12)');
        grad.addColorStop(0.5, 'rgba(128,181,149,0.08)');
        grad.addColorStop(1, 'rgba(180,210,160,0.06)');
        ctxSafe.fillStyle = grad;
        ctxSafe.fillRect(0, 0, W, H);
      } catch { /* ignore */ }
      return () => {
        ro?.disconnect();
        window.removeEventListener('resize', winResize);
      };
    }

    // ── Particles ──────────────────────────────────
    const MAX_P = 70;
    const particles: Particle[] = [];

    const mkP = (): Particle => ({
      x: Math.random() * W,
      y: H + 10,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(0.25 + Math.random() * 0.55),
      radius: 1.2 + Math.random() * 2.8,
      life: 0,
      maxLife: 130 + Math.random() * 200,
      colorIdx: Math.floor(Math.random() * COLORS.length),
    });

    for (let i = 0; i < MAX_P; i++) {
      const p = mkP();
      p.y = Math.random() * H;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    // ── Streaks ────────────────────────────────────
    const MAX_S = 5;
    const streaks: Streak[] = [];

    const mkS = (): Streak => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
      const speed = 1.2 + Math.random() * 1.8;
      return {
        x: W * 0.1 + Math.random() * W * 0.8,
        y: H * 0.05 + Math.random() * H * 0.75,
        pts: [],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        colorIdx: Math.floor(Math.random() * (COLORS.length - 1)),
        width: 0.5 + Math.random() * 1.2,
        alpha: 0.25 + Math.random() * 0.3,
      };
    };
    for (let i = 0; i < MAX_S; i++) streaks.push(mkS());

    // ── Draw loop ──────────────────────────────────
    const draw = () => {
      try {
        ctxSafe.clearRect(0, 0, W, H);

        if (mouse.current.inside) {
          const gx = W * mouse.current.x;
          const gy = H * mouse.current.y;
          const bg = ctxSafe.createRadialGradient(gx, gy, 0, gx, gy, W * 0.65);
          bg.addColorStop(0, 'rgba(180,220,195,0.22)');
          bg.addColorStop(1, 'rgba(255,255,255,0)');
          ctxSafe.fillStyle = bg;
          ctxSafe.fillRect(0, 0, W, H);
        }

        const mx = mouse.current.x * W;
        const my = mouse.current.y * H;

        for (const p of particles) {
          p.life++;
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < 90 && mouse.current.inside) {
            p.vx += (dx / dist) * 0.025;
            p.vy += (dy / dist) * 0.025;
          }
          p.vx *= 0.995;
          p.vy *= 0.998;
          p.x += p.vx;
          p.y += p.vy;

          const t = p.life / p.maxLife;
          const alpha = Math.min(t < 0.12 ? t / 0.12 : t > 0.75 ? (1 - t) / 0.25 : 1, 0.75);

          if (p.life >= p.maxLife || p.y < -10) {
            Object.assign(p, mkP());
            continue;
          }

          const col = COLORS[p.colorIdx];
          const g = ctxSafe.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
          g.addColorStop(0, `rgba(${col},${alpha})`);
          g.addColorStop(0.4, `rgba(${col},${alpha * 0.5})`);
          g.addColorStop(1, `rgba(${col},0)`);
          ctxSafe.fillStyle = g;
          ctxSafe.beginPath();
          ctxSafe.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          ctxSafe.fill();
        }

        for (const s of streaks) {
          s.x += s.vx;
          s.y += s.vy;
          s.pts.push({ x: s.x, y: s.y });
          if (s.pts.length > 45) s.pts.shift();

          if (s.x < -80 || s.x > W + 80 || s.y < -80 || s.y > H + 80) {
            Object.assign(s, mkS());
            continue;
          }

          if (s.pts.length > 2) {
            ctxSafe.save();
            ctxSafe.beginPath();
            ctxSafe.moveTo(s.pts[0].x, s.pts[0].y);
            for (let i = 1; i < s.pts.length; i++) {
              ctxSafe.lineTo(s.pts[i].x, s.pts[i].y);
            }
            const grad = ctxSafe.createLinearGradient(
              s.pts[0].x, s.pts[0].y,
              s.pts[s.pts.length - 1].x, s.pts[s.pts.length - 1].y
            );
            grad.addColorStop(0, `rgba(${COLORS[s.colorIdx]},0)`);
            grad.addColorStop(1, `rgba(${COLORS[s.colorIdx]},${s.alpha})`);
            ctxSafe.lineWidth = s.width;
            ctxSafe.lineCap = 'round';
            ctxSafe.strokeStyle = grad;
            ctxSafe.stroke();
            ctxSafe.restore();
          }
        }
      } catch { /* 绘制错误静默忽略 */ }

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);

    // ── Mouse / Touch events ────────────────────────
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
        inside: true,
      };
    };
    const onLeave = () => { mouse.current.inside = false; };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf.current);
      ro?.disconnect();
      window.removeEventListener('resize', winResize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', cursor: 'crosshair' }}
    />
  );
}
