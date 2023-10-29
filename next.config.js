/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["recipe1.ezmember.co.kr", "robohash.org", "picsum.photos"],
  },
};

module.exports = {
  sassOptions: {
    outputStyle: "compressed",
    // ...여기에 필요한 SASS 설정을 편집함.
  },
};
