import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@tanstack/react-table"],
  },
};

export default withContentlayer(nextConfig);
