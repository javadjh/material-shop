/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["45.149.76.235", "45.149.76.235"],
  },
  // plugins: [
  //   [
  //     "babel-plugin-styled-components",
  //     {
  //       ssr: false,
  //     },
  //   ],
  // ],
};

module.exports = nextConfig;
