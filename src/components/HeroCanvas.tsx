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
  '58,102,80',   // brand green
  '93,144,112',  // mid green
  '128,181,149', // light green
  '180,210,160', // pale green
  '210,190,120', // soft gold
];

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, inside: false });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

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
      ctx.clearRect(0, 0, W, H);

      // Soft radial background glow that follows mouse
      if (mouse.current.inside) {
        const gx = W * mouse.current.x;
        const gy = H * mouse.current.y;
        const bg = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.65);
        bg.addColorStop(0, 'rgba(180,220,195,0.22)');
        bg.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);
      }

      // Particles
      const mx = mouse.current.x * W;
      const my = mouse.current.y * H;

      for (const p of particles) {
        p.life++;

        // Gentle mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 90 && mouse.current.inside) {
          p.vx += (dx / dist) * 0.025;
          p.vy += (dy / dist) * 0.025;
        }
        // Damping
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
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        g.addColorStop(0, `rgba(${col},${alpha})`);
        g.addColorStop(0.4, `rgba(${col},${alpha * 0.5})`);
        g.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Streaks
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
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(s.pts[0].x, s.pts[0].y);
          for (let i = 1; i < s.pts.length; i++) {
            const ratio = i / s.pts.length;
            ctx.lineTo(s.pts[i].x, s.pts[i].y);
            if (i === s.pts.length - 1) {
              // Fade tail
              const grad = ctx.createLinearGradient(
                s.pts[0].x, s.pts[0].y,
                s.pts[s.pts.length - 1].x, s.pts[s.pts.length - 1].y
              );
              grad.addColorStop(0, `rgba(${COLORS[s.colorIdx]},0)`);
              grad.addColorStop(1, `rgba(${COLORS[s.colorIdx]},${s.alpha})`);
              ctx.strokeStyle = grad;
            }
          }
          ctx.lineWidth = s.width;
          ctx.lineCap = 'round';
          ctx.strokeStyle = `rgba(${COLORS[s.colorIdx]},${s.alpha})`;
          ctx.stroke();
          ctx.restore();
        }
      }

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);

    // ── Mouse events ───────────────────────────────
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
      ro.disconnect();
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
