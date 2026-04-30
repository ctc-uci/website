import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 compiler: {
  emotion: true,
 },
 experimental: {
  optimizeCss: false,
 },
 async redirects() {
  return [
   {
    source: "/:path*",
    has: [{ type: "host", value: "www.ctc-uci.com" }],
    destination: "https://ctc-uci.com/:path*",
    permanent: true,
   },
  ];
 },
};

export default nextConfig;
