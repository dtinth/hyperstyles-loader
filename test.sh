#!/bin/bash -e
webpack --config example/webpack.config.js

EXPECTED='<div class="akjwv5w26SyRccwMIp2WL"></div>'
echo "Expected: $EXPECTED"

ACTUAL=$(node example/build/test.js)
echo "Actual:   $ACTUAL"

test "$EXPECTED" = "$ACTUAL"
