import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/knk/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "kobietanakole.pl",
        pathname: "/knk/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
