/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable type checking during builds for Netlify
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during builds for Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable static exports for Netlify
  output: 'export',
  // Image configuration
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig 