const webpack = require('webpack');
const { env } = require('process');
const isProd = env.NODE_ENV === 'production';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isNonNil = x => x != null;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProfile = env.PROFILE == 'true';
const minify = env.MINIFY == 'true';
const package = require('./package.json');
const camelcase = require('camelcase');

let conf = {
  entry: './src/index.js',

  devtool: isProd ? false : 'inline-source-map',

  output: {
    filename: './build/bundle.js',
    library: camelcase( package.name ),
    libraryTarget: 'umd'
  },

  externals: isProd ? Object.keys( package.dependencies || {} ) : [],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),

    minify ? new UglifyJSPlugin() : null
  ].filter( isNonNil )
};

module.exports = conf;
