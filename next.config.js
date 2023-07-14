/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static01.nyt.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
