import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["prnt.sc"],
  },
  experimental: {
    dynamicIO: true,
    authInterrupts: true,
  },
}

export default nextConfig
