'use strict'
const loaderUtils = require('loader-utils')

module.exports = source => source

module.exports.pitch = function (request, p) {
  const h = loaderUtils.parseQuery(this.query).h
  if (!h) {
    throw new Error('hyperstyles-loader: Please specify the hyperscript module to use (e.g. hyperstyles?h=react-hyperscript)')
  }
  const req = request => `require(${JSON.stringify(request)})`
  return `module.exports = ${req('hyperstyles')}(
    ${req(h)},
    ${req(`-!${request}`)}
  )`
}
