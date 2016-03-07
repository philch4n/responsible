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
      { test: /\.js$/, exlucde: /node_modules/, loader:"babel" },
    ],
  },
};
