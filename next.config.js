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
