// module.exports = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.pexels.com",
  //       pathname: "/account123/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["sangw.in", "localhost", "picsum.photos", "pexels.com"], // <== Domain name
  },
};

module.exports = nextConfig;
