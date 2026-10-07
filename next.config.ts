import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const wpUploadsPattern = (): RemotePattern[] => {
  const wpUrl = process.env.NEXT_PUBLIC_WP_URL ?? process.env.WP_URL;
  if (!wpUrl) return [];

  const { protocol, hostname, port, pathname } = new URL(wpUrl);
  return [
    {
      protocol: protocol.replace(":", "") as "http" | "https",
      hostname,
      port,
      pathname: `${pathname.replace(/\/$/, "")}/wp-content/uploads/**`,
    },
  ];
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/knk/wp-content/uploads/**",
      },
      ...wpUploadsPattern(),
    ],
  },
};

export default nextConfig;
