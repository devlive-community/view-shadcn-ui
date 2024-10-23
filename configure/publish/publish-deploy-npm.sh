#!/usr/bin/env sh
set -e

yarn run build

time=$(date "+%Y-%m-%d %H:%M:%S")

echo "Select the release type:"
echo "1. alpha"
echo "2. beta"
echo "3. prod"

read -p "Enter your choice (1-3): " choice

current_version=$(npm view . version)

if [ "$choice" = "1" ]; then
  new_version="${current_version%.*}.$(( ${current_version##*.} + 1 ))-alpha.$(date +%s)"
  echo "Publishing to NPM with 'alpha' tag version $new_version on $time"
  yarn version --new-version $new_version --no-git-tag-version
  yarn publish --tag alpha --access public --non-interactive
elif [ "$choice" = "2" ]; then
  new_version="${current_version%.*}.$(( ${current_version##*.} + 1 ))-beta.$(date +%s)"
  echo "Publishing to NPM with 'beta' tag version $new_version on $time"
  yarn version --new-version $new_version --no-git-tag-version
  yarn publish --tag beta --access public --non-interactive
elif [ "$choice" = "3" ]; then
  echo "Publishing to NPM version $current_version on $time"
  yarn publish --access public --non-interactive
else
  echo "Invalid choice. Exiting."
  exit 1
fi

echo "Publish to NPM done"
