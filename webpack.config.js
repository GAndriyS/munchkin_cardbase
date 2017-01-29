const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/main.ts'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'client/bin'),
    publicPath: 'http://localhost:3000/',
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'client/src/index.tpl.html'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      files: ['./bin'],
      proxy: "localhost:3000"
    })
  ],
  devServer: {
    hot: true,
    port: 3000,
    contentBase: path.join(__dirname, 'client/bin'),
    publicPath: 'http://localhost:3000/',
      proxy: {
      '/': {
        target: 'http://localhost:5050/',
        secure: false
      },
      '/dashboard': {
        target: 'http://localhost:5050/',
        secure: false
      }
    }
  }
};
