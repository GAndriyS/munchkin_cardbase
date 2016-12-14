const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    // app: './client/src/app.module.ts',
    app: './client/src/styles/main.less'
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
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!less-loader' })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name].css')
  ],
  devServer: {
    hot: true,
    proxy: {
      '**': 'http://localhost:5050/'
    }
  }
};
