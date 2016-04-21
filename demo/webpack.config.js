var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index',
    './index.html'
  ],
  output: {
    path: path.join(__dirname, 'dist_demo'),
    filename: 'demo.js',
    publicPath: '/static/'
  },
  resolveLoader: {
    modulesDirectories: ['../node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /^admin-ui/, function (data) {
        const suffix = data.request.substring('admin-ui'.length);
        data.request = path.resolve(__dirname, '../scripts/' + suffix);
      }
    )
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: [path.join(__dirname), path.join(__dirname, '../scripts')]
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.png|\.jpg$/,
      loaders: ['file-loader']
    }]
  }
};
