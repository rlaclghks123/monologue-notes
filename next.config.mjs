/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.aladin.co.kr',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        pathname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
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
