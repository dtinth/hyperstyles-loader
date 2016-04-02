const h = require('./wow.css')
const ReactDOMServer = require('react-dom/server')
const expected = '<div class="akjwv5w26SyRccwMIp2WL"></div>'
const equal = require('assert').equal

equal(expected, ReactDOMServer.renderToStaticMarkup(h('div.cool')))
