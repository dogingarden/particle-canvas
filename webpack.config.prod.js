var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: true
        }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
               'src': path.resolve(__dirname, '../src'),
               'assets': path.resolve(__dirname, '../src/assets'),
               'components': path.resolve(__dirname, '../src/components'),
               'd3': 'd3/build/d3.js'   //<--- this is the line I added in webpack.
    }
  },
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }]
  }
};
