/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — the whole site is prerendered to plain HTML in `out/`.
  output: 'export',
  images: {
    // Netlify serves the export as static files; no Next image optimizer at runtime.
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
