import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // 开启 WebP 自动转换（Next.js 默认已开启）
    formats: ['image/webp'],
    // 移动端设备常用屏幕宽度
    deviceSizes: [390, 430, 640, 750, 828, 1080, 1200, 1920],
    // 图片组件 fill 模式下使用的小尺寸
    imageSizes: [64, 128, 256, 384, 512],
    // 提高内容安全策略限制
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 天缓存
  },
};

export default nextConfig;
