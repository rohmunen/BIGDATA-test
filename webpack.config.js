const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:'./src/index.tsx',
  output: {
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {test : /\.(scss)$/, use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],},
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'public/index.html'
    })
  ] 

}