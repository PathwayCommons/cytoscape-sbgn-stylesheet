let conf = {
  entry: './demo.js',

  devtool: 'inline-source-map',

  output: {
    filename: './build/demo.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

module.exports = conf;
