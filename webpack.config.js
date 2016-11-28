const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    home: './home.js',
    tripled: './lib/BarChart.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};