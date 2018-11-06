const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'review.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] }
  // loaders: [
  //   {
  //     test: /\.jsx?$/,
  //     exclude: /node_modules/,
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['es2015', 'react']
  //     }
  //   }
  // ]
};
