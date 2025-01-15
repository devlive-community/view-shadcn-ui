#!/bin/bash
HOME=$(pwd)

cd $HOME/playground
pnpm upgrade view-shadcn-ui@latest
pnpm run build

rm -rf /tmp/playground-dist
mkdir -p /tmp/playground-dist
cp -r dist/* /tmp/playground-dist
cd /tmp/playground-dist

echo 'playground.view-shadcn-ui.devlive.org' > CNAME

git init
git remote add origin git@github.com:devlive-community/playground.view-shadcn-ui.devlive.org.git
git add .
git commit -m "deploy: playground on $(date "+%Y-%m-%d %H:%M:%S")"

git checkout -b dev
git push --force origin dev

cd $HOME