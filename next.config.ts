import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale(en|fa|ar|fr|es|ru|zh)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/:locale(en|fa|ar|fr|es|ru|zh)/:path+",
        destination: "/:path+",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
