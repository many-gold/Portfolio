import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    NEXT_DISABLE_DEVTOOLS: "1", // 👈 expose to browser
  },
};

export default nextConfig;
