const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
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