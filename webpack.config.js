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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', },
      { test: require.resolve('react'), loader: 'expose?React', },
    ],
  },
};
