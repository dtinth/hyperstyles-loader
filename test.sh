#!/bin/bash -e
webpack --config example/webpack.config.js
node example/build/test.js
