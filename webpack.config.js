const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./app/index.js'],
    vendors: ['./vendors.js']
  },

  output: {
    path: path.resolve('./dist'),
    publicPath: '/'
  },

  context: path.resolve(__dirname, 'angular'),

  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'ng-annotate'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
      {test: /\.(woff2?|ttf|svg|eot)?(\?.+)?$/, loader: 'file?name=fonts/[name].[ext]'},
      { test: /\.(jpg|png|gif)?(\?.+)?$/, loader: 'file?name=img/[name].[hash].[ext]' },
      {test: /\.html$/, loader: 'html'},
      {test: require.resolve('jquery'), loader: 'expose?$'},
      {test: require.resolve('jquery'), loader: 'expose?jQuery'}
    ],

    noParse: [
      /^jquery(\-.*)?$/,
      /^bootstrap(\-.*)?$/,
      /^lodash$/,
      /^angular(\-.*)?$/,
      /^ng(\-.*)?$/
    ]
  },

  resolve: {
    alias: {
      'bootstrap.css': path.resolve(__dirname, 'node_modules', 'bootstrap/dist/css/bootstrap.css')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Playbuzz Mission',
      template: 'index.ejs'
    })
  ]
};
