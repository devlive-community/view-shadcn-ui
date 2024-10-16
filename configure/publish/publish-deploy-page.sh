#!/usr/bin/env sh
VERSION=$1
set -e

yarn run docs:build

cd docs/.vitepress/dist

echo 'shadcn.vue.devlive.org' > CNAME

time=$(date "+%Y-%m-%d %H:%M:%S")

git init
git add -A
git commit -m "GitHub Action Auto Deploy $VERSION on $time"

git push -f git@github.com:devlive-community/view-shadcn-ui.git master:gh-pages

git status
