import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Avoid failing the whole deploy when ESLint rules drift from Next major upgrades.
  // Run `npm run lint` locally or in CI to keep quality high.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
