#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

echo "Ruby version: $(ruby -v)"
echo "Gem version: $(gem -v)"

if [[ "$CI_PLATFORM" == "ios" ]]; then
  brew install ruby@3.4
  echo "Ruby location: $(which ruby)"
  echo "Ruby version: $(ruby -v)"
fi


if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi