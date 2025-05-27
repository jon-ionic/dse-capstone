#!/bin/bash
echo "preinstall script"
echo "Commit message: $CI_GIT_COMMIT_MSG"

if [[ "$CI_PLATFORM" == "ios" ]]; then
  echo "Ruby version: $(ruby -v)"
  echo "Gem version: $(gem -v)"
fi

if [[ "$CI_PLATFORM" == "android" || "$CI_PLATFORM" == "web" ]]; then
  apt-get update && apt-get install -y libpcap-dev
fi