const withOptimizedImages = require("next-optimized-images");
// DOWNGRADE imagemin-moxjpeg to 9.0.0 if build errors
module.exports = withOptimizedImages({
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "it",
  },
  images: {
    disableStaticImages: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/it/home',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
});
