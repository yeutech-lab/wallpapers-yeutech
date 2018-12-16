const { createConfig } = require('@rollup-umd/documentation');

module.exports = createConfig({
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        }
      ],
    },
  },
});
