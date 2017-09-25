const path = require('path');
const config = require('./webpack.base.config');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.output = {
  path: path.join(__dirname, 'build'),
  filename: '[name]-[chunkHash].js',
};

config.module.rules.push({
  test: /\.(css|scss)$/i,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
            require('autoprefixer')(),
          ]
        },
      },
    ],
  }),
});

config.plugins.push(new WebpackCleanupPlugin());

config.plugins.push(new ExtractTextPlugin({
  filename: 'style.css',
  allChunks: true,
}));

config.plugins.push(new HtmlWebpackPlugin({
  template: './src/template.html',
  files: {
    css: ['style.css'],
    js: ['bundle.js'],
  },
}));

module.exports = config;
