import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>. The workflow sets PAGES_BASE_PATH;
// local dev and build leave it empty and run at the root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  // Pages has no image optimizer; screenshots are pre-compressed WebP instead.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
