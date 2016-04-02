module.exports = {
  target: 'node',
  entry: {
    test: __dirname + '/test.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: require.resolve('..') + '?h=react-hyperscript!css/locals?modules'
      }
    ]
  }
}
