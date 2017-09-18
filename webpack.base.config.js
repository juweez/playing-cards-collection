module.exports = {
  entry: [
    './src/index.js',
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build\/)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [],
};
