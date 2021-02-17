const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
});
