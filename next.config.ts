import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
} as NextConfig & { turbopack?: { root: string } };

export default nextConfig;


