#!/usr/bin/env sh
set -e

yarn run build

time=$(date "+%Y-%m-%d %H:%M:%S")

echo "Select the release type:"
echo "1. alpha"
echo "2. beta"
echo "3. prod"

read -p "Enter your choice (1-3): " choice

current_version=$(node -p "require('./package.json').version")

if [ "$choice" = "1" ]; then
  major=$(echo "$current_version" | cut -d'.' -f1)
  minor=$(echo "$current_version" | cut -d'.' -f2)
  patch=$(echo "$current_version" | cut -d'.' -f3 | cut -d'-' -f1)
  # shellcheck disable=SC2004
  new_version="${major}.${minor}.$(( $patch))-alpha.$(date +%s)"
  echo "Publishing to NPM with 'alpha' tag version $new_version on $time"
  yarn version --new-version "$new_version" --no-git-tag-version
  yarn publish --tag alpha --access public --non-interactive
elif [ "$choice" = "2" ]; then
  major=$(echo "$current_version" | cut -d'.' -f1)
  minor=$(echo "$current_version" | cut -d'.' -f2)
  patch=$(echo "$current_version" | cut -d'.' -f3 | cut -d'-' -f1)
  # shellcheck disable=SC2004
  new_version="${major}.${minor}.$(( $patch))-alpha.$(date +%s)"
  echo "Publishing to NPM with 'beta' tag version $new_version on $time"
  yarn version --new-version "$new_version" --no-git-tag-version
  yarn publish --tag beta --access public --non-interactive
elif [ "$choice" = "3" ]; then
  major=$(echo "$current_version" | cut -d'.' -f1)
  minor=$(echo "$current_version" | cut -d'.' -f2)
  patch=$(echo "$current_version" | cut -d'.' -f3 | cut -d'-' -f1)
  # shellcheck disable=SC2004
  new_version="${major}.${minor}.$(( $patch))"
  echo "Publishing to NPM version $new_version on $time"
  yarn version --new-version "$new_version" --no-git-tag-version
  yarn publish --access public --non-interactive
else
  echo "Invalid choice. Exiting."
  exit 1
fi

echo "Publish to NPM done"
