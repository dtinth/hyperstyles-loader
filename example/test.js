const h = require('./wow.css')
const ReactDOMServer = require('react-dom/server')

console.log(ReactDOMServer.renderToStaticMarkup(
  h('div.cool')
))
