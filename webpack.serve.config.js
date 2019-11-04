const { webpackMerge, htmlOverlay, webpackServeConfig } = require('just-scripts');
const webpack = require('webpack');

module.exports = webpackMerge(
  webpackServeConfig,
  htmlOverlay({
    template: 'public/index.html'
  }),
  {
    output: {
      publicPath: '/'
    },
    plugins : [
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': '""'
      })
    ]
  }
);
