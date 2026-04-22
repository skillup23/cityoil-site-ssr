/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Удалили секцию eslint отсюда
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    cpus: 1,
  },
};

module.exports = nextConfig;
