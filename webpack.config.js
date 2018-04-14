var path = require('path')
var webpack = require('webpack')

const env = process.env.NODE_ENV

module.exports = {
  mode: env || 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '/dist'), // local path
    publicPath: '/', // public path can be accessed thru browser
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    compress: true,
    port: 6324
  }
}
