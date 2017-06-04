const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build\/)/,
        loader: "babel-loader",
        query: {
          presets:['es2015','react']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./build"
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ]
};
