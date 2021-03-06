/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },

  typescript: {
    tsconfigPath: './tsconfig.project.json',
  },
};

module.exports = nextConfig;
