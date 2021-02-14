const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  i18n: {
    locales: ['en', 'it', 'de'],
    defaultLocale: 'it',
  },
});
