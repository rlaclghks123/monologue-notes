/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.aladin.co.kr'],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://www.aladin.co.kr/:path*`,
      },
    ];
  },
};

export default nextConfig;
