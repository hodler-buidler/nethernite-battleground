const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
        ? '/nethernite-battleground/'
        : './',

  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '@intlify/vue-i18n-loader',
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/design/_design.scss";`,
      },
    },
  },
};