/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
    localeDetection: false,
  },
};

module.exports = withContentlayer(nextConfig);
