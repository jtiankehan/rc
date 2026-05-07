import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // 自建服务器不支持 /_next/image API，使用 unoptimized 直接引用静态文件
    // 图片已手动转换为 WebP，不损失优化效果
    unoptimized: true,
  },
};

export default nextConfig;
