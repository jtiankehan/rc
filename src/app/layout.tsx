import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '瑞承文化 — 筑造空间叙事  重塑文化体验',
  description: '瑞承文化专注展览展示、数字交互与工程落地的一体化解决方案，扎根成都，辐射全国，为品牌与文化打造沉浸式叙事体验。',
  keywords: '展览设计,博物馆设计,数字交互展示,文化空间,成都展览公司,瑞承文化',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
