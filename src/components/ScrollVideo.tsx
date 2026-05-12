'use client';

import { useEffect, useRef } from 'react';

interface ScrollVideoProps {
  src?: string;
}

export default function ScrollVideo({ src = '/hero-video.mp4' }: ScrollVideoProps) {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const lastScrollY = useRef(0);
  const rafRef      = useRef<number>(0);

  useEffect(() => {
    // 在客户端 effect 内同步真实滚动位置，避免 hydration 不匹配
    lastScrollY.current = window.scrollY;

    const video = videoRef.current;
    if (!video) return;

    /* 强制停在第 0 帧，防止浏览器自动跳帧 */
    const onCanPlay = () => { video.currentTime = 0; };
    video.addEventListener('canplay', onCanPlay, { once: true });

    /* ── 滚动驱动：每 1px 滚动 ≈ 0.008s 视频时长 ── */
    const SCRUB = 0.008;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const delta = window.scrollY - lastScrollY.current;
        lastScrollY.current = window.scrollY;
        if (!video.duration) return;
        const next = video.currentTime + delta * SCRUB;
        video.currentTime = Math.max(0, Math.min(video.duration, next));
      });
    };

    /* 触摸设备 */
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove  = (e: TouchEvent) => {
      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      if (!video.duration) return;
      const next = video.currentTime + delta * SCRUB;
      video.currentTime = Math.max(0, Math.min(video.duration, next));
    };

    window.addEventListener('scroll',     onScroll,     { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove',  onTouchMove,  { passive: true });

    return () => {
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        /* CSS keyframe 淡入，不依赖 JS onLoadedData */
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          display: 'block',
          animation: 'videoFadeIn 1s ease forwards',
        }}
      />
      <style>{`
        @keyframes videoFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
