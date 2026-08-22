import type { NextConfig } from "next";
import { SITE_INDEXABLE } from "./src/lib/site";

const noIndexHeaders = SITE_INDEXABLE
  ? []
  : [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];

const nextConfig: NextConfig = {
  async headers() {
    return noIndexHeaders;
  },
  async redirects() {
    return [
      {
        source: "/carpet-cleaning",
        destination: "/carpet-cleaning-london",
        statusCode: 301,
      },
      {
        source: "/carpet-cleaning/",
        destination: "/carpet-cleaning-london",
        statusCode: 301,
      },
      {
        source: "/gutter-cleaning",
        destination: "/gutter-cleaning-london",
        statusCode: 301,
      },
      {
        source: "/gutter-cleaning/",
        destination: "/gutter-cleaning-london",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
