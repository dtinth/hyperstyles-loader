# hyperstyles-loader

## Hyperscript + CSS modules + Hyperstyles + Webpack

<a href="https://travis-ci.org/dtinth/hyperstyles-loader"><img src="https://img.shields.io/travis/dtinth/hyperstyles-loader.svg" width="100%" alt="travis"></a>

<a href="https://www.npmjs.com/package/hyperstyles-loader"><img src="https://img.shields.io/npm/v/npm.svg" width="100%" alt="npm"></a>

I’ve been using [hyperscript in place of JSX](https://medium.com/@jador/jsx-4b978fbeb290). The problem is that it’s so verbose to use with CSS modules.

```js
import styles from './styles.styl'

// JSX
<div className={styles.root}>Text</div>

// hyperscript
h('div', { className: styles.root }, [ 'text' ])
```

Now there’s [`hyperstyles`](https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fcolingourlay%2Fhyperstyles) that merges the `hyperscript` and `styles` together.

```js
import styles from './styles.styl'
import hyperstyles from 'hyperstyles'
import hyperscript from 'react-hyperscript'
const h = hyperstyles(hyperscript, styles)

h('div.root', [ 'text' ])
```

Now that’s _much_ better, except now I have to require three files instead of one! So I created this webpack loader.

```js
import h from './styles.styl'

h('div.root', [ 'text' ])
```

Now it’s so short!!!!

Example webpack configuration:

```js
{
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: [
          'hyperstyles?h=react-hyperscript', // <--
          'style',
          'css?modules'
          'postcss',
          'stylus'
        ]
      }
    ]
  }
}
```

Substitute `style!css` for `css/locals` for prerendering!
