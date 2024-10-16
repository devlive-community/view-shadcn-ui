#!/usr/bin/env sh
set -e

yarn run build

time=$(date "+%Y-%m-%d %H:%M:%S")

echo "Publish to NPM $VERSION on $time"

yarn publish --access public --non-interactive

echo "Publish to NPM done"
