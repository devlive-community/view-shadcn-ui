#!/usr/bin/env sh
VERSION=$(jq -r '.version' package.json)
set -e

yarn run docs:build

cd docs/.vitepress/dist

echo 'shadcn.vue.devlive.org' > CNAME

time=$(date "+%Y-%m-%d %H:%M:%S")

echo "GitHub Action Auto Deploy $VERSION on $time"

git init
git add -A
git commit -m "GitHub Action Auto Deploy $VERSION on $time"

git push -f git@github.com:devlive-community/view-shadcn-ui.git master:gh-pages

echo "GitHub Action Auto Deploy done"
