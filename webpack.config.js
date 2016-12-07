const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin({
  filename: 'client/bin/css/style.css'
});

module.exports = {
  entry: {
    'app': './client/src/app.module.ts'
  },
  devtool: 'sourcemap',
  output: {
    path: path.join(__dirname, 'client/bin'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader'],
        exclude: [ /node_modules\//]
      },
      {
        test: /\.less$/,
        loader: extractLESS.extract(['css', 'sass'])
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractLESS
  ],
  devServer: {
    hot: true,
    proxy: {
      '**': 'http://localhost:5050/'
    }
  }
};
