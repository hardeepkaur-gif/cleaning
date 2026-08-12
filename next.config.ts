import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/carpet-cleaning",
        destination: "/carpet-cleaning-london",
        permanent: true,
      },
      {
        source: "/gutter-cleaning",
        destination: "/gutter-cleaning-london",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
