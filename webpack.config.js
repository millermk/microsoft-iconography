const { webpackConfig, webpackMerge, htmlOverlay } = require('just-scripts');
const webpack = require('webpack');

module.exports = webpackMerge(
  webpackConfig,
  htmlOverlay({
    template: 'public/index.html'
  }),
  {
    output: {
      publicPath: '/microsoft-iconography/'
    },
    plugins : [
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': '"/microsoft-iconography"'
      })
    ]
  }
);
