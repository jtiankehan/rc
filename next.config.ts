import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // 如果宝塔部署了 Node 环境，可以正常使用 next/image 的优化
    // 开启 unoptimized 会直接请求原图，按需选择
    unoptimized: true,
  },
};

export default nextConfig;
