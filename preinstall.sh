#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

echo "Ruby version: $(ruby -v)"
echo "Gem version: $(gem -v)"

echo "Node version: $(node -v)"
nvm install 16
nvm use 16

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi