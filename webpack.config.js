const webpack = require('webpack');

module.exports = {
  entry: [
    './public/entry.jsx',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot$/,
        loader: 'file'
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}