const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  reloadOnPrerender: !isProduction
};