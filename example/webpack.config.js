module.exports = {
  target: 'node',
  entry: {
    test: __dirname + '/test.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  resolveLoader: {
    alias: {
      'hyperscript-loader': require.resolve('..')
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'hyperscript-loader?h=react-hyperscript',
          'css/locals?modules'
        ]
      }
    ]
  }
}
