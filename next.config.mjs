/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Updated headers configuration to allow Formspree submissions and proper document handling
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://formspree.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://v0.blob.com https://blob.v0.dev https://sjc.microlink.io; form-action 'self' https://formspree.io; frame-src 'self' blob:;"
          }
        ],
      },
    ];
  },
};

export default nextConfig;
