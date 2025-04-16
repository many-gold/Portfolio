import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer, dev }) {
    // Disable React DevTools in production
    if (!dev && !isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NEXT_DISABLE_DEVTOOLS": JSON.stringify("1"),
        })
      );
    }

    return config;
  },
};

export default nextConfig;
