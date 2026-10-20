import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "subject-contracts-cardiff-consistency.trycloudflare.com",
    "*.trycloudflare.com",
    "localhost:3000",
  ],
};

export default nextConfig;
