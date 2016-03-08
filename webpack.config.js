module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app-bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
