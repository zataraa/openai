/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  env: {
    AI_ENABLED: process.env.AI_ENABLED || 'false',
    PAYMENTS_ENABLED: process.env.PAYMENTS_ENABLED || 'false'
  }
};

module.exports = nextConfig;
