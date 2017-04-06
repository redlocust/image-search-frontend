var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  externals: {
    jquery: 'jQuery'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    alias: {
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      ImageList: path.resolve(__dirname, './app/components/ImageList.jsx'),
      SearchForm: path.resolve(__dirname, './app/components/SearchForm.jsx'),
      NewMain: path.resolve(__dirname, './app/components/NewMain.jsx'),
      applicationStyles: path.resolve(__dirname, './app/styles/app.scss')
    }
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devtool: 'source-map'
};