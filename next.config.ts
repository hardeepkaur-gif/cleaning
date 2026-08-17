import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/carpet-cleaning",
        destination: "/carpet-cleaning-london",
        statusCode: 301,
      },
      {
        source: "/gutter-cleaning",
        destination: "/gutter-cleaning-london",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
