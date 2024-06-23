/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost", "localhost"],
  },
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        ssr: false,
      },
    ],
  ],
};

module.exports = nextConfig;
