/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Enable polling for file changes (useful for WSL)
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig