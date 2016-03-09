var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/app.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app-bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|server|test/,
        loaders: ['react-hot', 'babel-loader'],
      },
      { test: require.resolve('react'), loader: 'expose?React', },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
};
