/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://rank-race-blog.vercel.app/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'https://rank-race-blog.vercel.app/blog/:path*',
      },
    ];
  },
}

export default nextConfig
