'use strict'

module.exports = source => source

module.exports.pitch = request => {
  const req = request => `require(${JSON.stringify(request)})`
  return `module.exports = ${req('hyperstyles')}(
    ${req('react-hyperscript')},
    ${req(`-!${request}`)}
  )`
}
