const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  configureWebpack: {
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