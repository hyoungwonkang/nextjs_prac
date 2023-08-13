/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["recipe1.ezmember.co.kr"],
  },
};

module.exports = nextConfig;
