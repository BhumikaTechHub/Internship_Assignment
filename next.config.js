/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Only use this if you want to deploy with type errors
    // ignoreBuildErrors: false
  },
  // Modern image optimization
  images: {
    domains: [],
    remotePatterns: [],
  },
  // Recommended security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        }
      ],
    },
  ],
}

module.exports = nextConfig 