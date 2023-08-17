/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['drive.google.com', 'yotube.com', '*.googleusercontent.com']
  }
}

module.exports = nextConfig
