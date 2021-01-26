const withImages = require('next-images');

module.exports = withImages({
  i18n: {
    locales: ['en', 'it', 'de'],
    defaultLocale: 'it',
  },
});
