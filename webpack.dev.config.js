const path = require('path');
const config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

config.output = {
  publicPath: '/',
  path: path.join(__dirname, 'build'),
  filename: 'bundle.js',
};

config.devtool = 'source-map';

config.module.rules.push({
  test: /\.(css|scss)$/i,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
});

config.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
    }
  ],
});

config.devServer = {
  contentBase: './build',
};

config.plugins.push(new HtmlWebpackPlugin({
  template: './src/template.html',
}));

config.plugins.push(new DashboardPlugin());

module.exports = config;
