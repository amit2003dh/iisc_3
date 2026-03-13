/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  allowedDevOrigins: [
    "b52ce9df-cf25-4b27-b4bc-34526a457ec6-00-27ja1yqdssb9n.picard.replit.dev",
  ],
}

module.exports = nextConfig
