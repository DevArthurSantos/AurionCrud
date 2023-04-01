//@type {import('next').NextConfig}
const withRuntimeDotenv = require("next-runtime-dotenv");

module.exports = withRuntimeDotenv()({
  experimental: {
    appDir: false,
  },
});
