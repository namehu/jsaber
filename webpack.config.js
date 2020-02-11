const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'jsaber.min.js',
    library: 'jsaber',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`, // fix webpack 4 bug,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}