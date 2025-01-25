/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig 