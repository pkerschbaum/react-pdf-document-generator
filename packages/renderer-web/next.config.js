/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,

  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },

  typescript: {
    tsconfigPath: './tsconfig.project.json',
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
